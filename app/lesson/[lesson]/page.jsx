import {
  getChallenges,
  getLesson,
  getUserprogress,
  getUserSubscription,
} from "@/action/userProgress";
import { redirect } from "next/navigation";
import Header from "./header";
import Quiz from "./quiz";

const page = async ({ params }) => {
  const data = await getLesson(params.lesson);

  const lesson = data?.lesson;
  const userProgress = await getUserprogress();
  const userSubscription = await getUserSubscription();
  const isUnlimited = !!userSubscription?.active;
  const challenge = await getChallenges(lesson._id);

  if (!data || !userProgress) {
    redirect("/learn");
  }

  const per = lesson.challenges.filter((challenge) => challenge.completed);
  const initialPercentage = (per.length / lesson.challenges.length) * 100;

  return (
    <Quiz
      challenges={challenge}
      initialPercentage={initialPercentage}
      lesson={lesson}
      userProgress={userProgress}
      isUnlimited={isUnlimited}
    />
  );
};

export default page;
