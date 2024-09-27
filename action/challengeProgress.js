"use server";

import { revalidatePath } from "next/cache";
import {
  createChallengeProgress,
  getChallenge,
  getChallengeProgress,
  getUserprogress,
  updataUserProgress,
  updateChallengeProgress,
} from "./userProgress";
import { API } from "@/lib/createApi";

const { auth } = require("@clerk/nextjs/server");

export const upsertChallengeProgress = async (id) => {
  const { userId } = await auth();

  // const currectUserProgress = await getUserprogress();

  // if (!currectUserProgress) throw new Error("UserProgress not found");

  // const challenge = await getChallenge(id);

  // const lessonId = challenge.lessonId;

  // const existChallengeProgress = await getChallengeProgress(
  //   userId,
  //   challenge._id
  // );

  // const isPrctice = !!existChallengeProgress;

  // if (isPrctice) {
  //   await createChallengeProgress({
  //     userId: currectUserProgress.userId,
  //     challengeId: challenge._id,
  //     completed: true,
  //   });
  //   console.log("udpate progress");

  //   await updataUserProgress({
  //     hearts: Math.min(currectUserProgress.hearts + 1, 25),
  //     points: currectUserProgress.points + 10,
  //   });

  //   revalidatePath("/learn");
  //   revalidatePath("/lesson");
  //   revalidatePath("/quests");
  //   revalidatePath("/leaderboard");
  //   revalidatePath(`/lesson/${lessonId}`);
  //   return;
  // }

  // await createChallengeProgress({
  //   userId: currectUserProgress.userId,
  //   challengeId: challenge._id,
  //   completed: true,
  // });
  // console.log("done create all");

  // await updataUserProgress({
  //   hearts: Math.min(currectUserProgress.hearts + 1, 25),
  //   points: currectUserProgress.points + 10,
  // });

  const data = await API.post(
    `/api/userProgress/upsert-challenge-progress/${userId}/${id}`
  );

  const { challengeProgress, userProgress, lessonId } = data.data;

  revalidatePath("/learn");
  revalidatePath("/lesson");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  revalidatePath(`/lesson/${lessonId}`);
};

export const reduceHearts = async (id) => {
  try {
    const { userId } = auth();

    // const currectUserProgress = await getUserprogress();

    // if (!currectUserProgress) throw new Error("UserProgress not found");

    // const challenge = await getChallenge(id);
    // const lessonId = challenge.lessonId;

    // const existChallengeProgress = await getChallengeProgress(
    //   userId,
    //   challenge._id
    // );

    // const isPrctice = !!existChallengeProgress;

    // if (isPrctice) {
    //   return { error: "practice" };
    // }

    // // console.log(currectUserProgress, "userProgerss");

    // await updataUserProgress({
    //   hearts: Math.max(currectUserProgress.hearts - 1, 0),
    // });

    const data = await API.post(
      `/api/userProgress/reduce-heart/${userId}/${id}`
    );
    const { challengeProgress, userProgress, lessonId } = data.data;
    if (data.data.error) return data.data;
    revalidatePath("/learn");
    revalidatePath("/lesson");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
  } catch (error) {
    console.log(error.message);
  }
};
