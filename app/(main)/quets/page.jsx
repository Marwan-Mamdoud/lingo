import { getUserprogress, getUserSubscription } from "@/action/userProgress";
import Promo from "@/app/component/Promo";
import StickyWarpper from "@/app/component/StickyWarpper";
import UserProcessing from "@/app/component/UserProcessing";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";

const page = async () => {
  const userProgress = await getUserprogress();
  const userSubscription = await getUserSubscription();
  const isPro = !!userSubscription;
  const progress = [
    { title: "Earn 50 XP", value: 50 },
    { title: "Earn 100 XP", value: 100 },
    { title: "Earn 200 XP", value: 200 },
    { title: "Earn 500 XP", value: 500 },
    { title: "Earn 1000 XP", value: 1000 },
    { title: "Earn 5000 XP", value: 5000 },
  ];

  return (
    <div className="h-[100vh] w-full flex justify-between items-start">
      <div className="">
        <div className="w-[600px] text-center  flex flex-col justify-center items-center pb-8 mb-3 border-b-2 border-slate-500">
          <Image
            src="quests.svg"
            width={120}
            height={120}
            alt="leaderboard"
            className="mb-5 items-center"
          />
          <p className="font-extrabold text-3xl font-mono text-black mb-3">
            Quests
          </p>
          <p className="text-xl font-mono text-slate-500">
            Complete quets by earning points
          </p>
        </div>
        <div className="flex flex-col items-start w-full justify-between">
          {progress.map((prog) => {
            const value = (userProgress.points / prog.value) * 100;
            return (
              <div
                key={prog.value}
                className="flex items-center justify-between w-full p-0 m-0 pb-5 mb-2 border-b-2 border-slate-300"
              >
                <Image
                  src="points.svg"
                  width={50}
                  height={50}
                  alt="points"
                  className="ml-4"
                />
                <div className="flex items-start flex-col w-full gap-1 ">
                  <p className="text-black text-xl font-bold">{prog.title}</p>
                  <Progress value={value} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <StickyWarpper>
        <UserProcessing
          activeCourse={{
            title: userProgress.activeCourseId.title,
            imageSrc: userProgress.activeCourseId.image,
          }}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
      </StickyWarpper>
    </div>
  );
};

export default page;
