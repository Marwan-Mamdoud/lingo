"use client";
import Header from "./header";
import { useState } from "react";
import QuestionBubble from "./questionBubble";
import Challenge from "../challenge";
import Footer from "./footer";
import {
  reduceHearts,
  upsertChallengeProgress,
} from "@/action/challengeProgress";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAudio } from "react-use";
import FinishCart from "@/app/component/FinishCart";
import { useToast } from "@chakra-ui/react";
import { useHeartModel } from "@/store/use-heart-model";
import { useExitModel } from "@/store/use-exit-model";

const Quiz = ({
  challenges,
  initialPercentage,
  lesson,
  userProgress,
  isUnlimited,
}) => {
  const toast = useToast();
  const { open } = useHeartModel();
  const [correct, _c, controll] = useAudio({ src: "/correct.wav" });
  const [inCorrect, _i, inControll] = useAudio({ src: "/incorrect.wav" });
  const router = useRouter();
  const [hearts, setHearts] = useState(Number(userProgress.hearts));
  const [percentage, setPercentage] = useState(initialPercentage);
  const [status, setStatus] = useState("none");
  const [selectedOption, setSelectedOption] = useState();
  const [activeIndex, setActiveIndex] = useState(() => {
    const firstUncompletedchallenge = challenges.findIndex(
      (challenge) => !challenge.completed
    );
    return firstUncompletedchallenge === -1 ? 0 : firstUncompletedchallenge;
  });

  const challenge = challenges[activeIndex];
  const title =
    challenge?.type === "ASSIST"
      ? "Select the correct meaning"
      : challenge?.question;
  const options = challenge?.challengeOptions ?? [];

  const onSelect = (id) => {
    if (status !== "none") return;
    setSelectedOption(id);
  };

  const onNext = () => {
    setActiveIndex((current) => current + 1);
  };

  const onContinue = async () => {
    if (!challenge.ChallengeProgress && userProgress.hearts === 0) {
      open();
      return;
    }

    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(null);
      return;
    }

    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(null);
      return;
    }

    const correctOption = options.find((option) => option.correct);

    if (correctOption && selectedOption === correctOption._id) {
      controll.play();
      setStatus("correct");
      setHearts((current) => Number(Math.min(current + 1, 25)));
      setPercentage((current) => current + 100 / challenges.length);
      await upsertChallengeProgress(challenge._id);
    } else {
      inControll.play();
      setStatus("wrong");
      if (isUnlimited) return;
      await reduceHearts(challenge._id).then((res) => {
        if (res?.error == "practice") {
          console.log(res);
          return;
        } else {
          setHearts((current) => Number(Math.max(current - 1, 0)));
        }
      });
    }
  };
  if (activeIndex === challenges.length) {
    return (
      <FinishCart
        lessonId={lesson._id}
        hearts={hearts}
        points={userProgress.points}
        isUnlimited={isUnlimited}
      />
    );
  }

  return (
    <>
      {correct}
      {inCorrect}
      <Header
        percentage={percentage}
        hearts={hearts}
        hasActiveSubscription={isUnlimited}
      />
      <div className="flex-1">
        <div className="h-full flex items-center justify-center">
          <div className="w-full h-full lg:w-[800px] lg:min-h-[350px] lg:px-0 px-6 flex flex-col justify-between gap-y-12 ">
            <h1 className="text-center text-3xl font-bold text-neutral-700 lg:text-3xl lg:text-start">
              {title}
            </h1>
            <div className="">
              {challenge?.type == "ASSIST" && (
                <QuestionBubble question={challenge?.question} />
              )}
              <Challenge
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedOption}
                disabled={false}
                type={challenge?.type}
              />
            </div>
            <Footer
              disabled={!selectedOption}
              lessonId={lesson?._id}
              status={status}
              onCheck={onContinue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
