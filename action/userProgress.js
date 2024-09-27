"use server";
import { API } from "@/lib/createApi";
import { auth, currentUser } from "@clerk/nextjs/server";
import { AwardIcon } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getUserProgress = async (course) => {
  let userProgress;
  const { userId } = await auth();
  const user = await currentUser();

  const Course = await API(`/api/courses/get-course/${course._id}`);

  const data = await API(`/api/userProgress/get-userProgress/${userId}`);

  if (data) userProgress = data.data.userProgress;

  if (userProgress) {
    const data = await API.put(
      `/api/userProgress/update-userProgress/${userId}`,
      {
        userId: userId,
        userName: user.firstName,
        activeCourseId: Course.data.course._id,
        userImage: user.imageUrl || "./mascot.svg",
      }
    );

    if (data) {
      userProgress = data.data.userProgress;
      revalidatePath("/learn");
      revalidatePath("/courses");
      redirect("/learn");
    }
  }

  const Data = await API.post("/api/userProgress/create-userProgress", {
    userId: userId,
    userName: user.firstName,
    userImage: user.imageUrl,
    activeCourseId: course._id,
    hearts: 25,
    points: 100,
  });

  if (Data) {
    userProgress = Data.data.userProgress;
    revalidatePath("/learn");
    revalidatePath("/courses");
    redirect("/learn");
  }
  return { userProgress, user };
};

export const getCourses = async () => {
  try {
    const data = await API("/api/courses/get-all-courses");
    if (data) return data.data.courses;
  } catch (error) {
    console.log(error);
  }
};

export const getUserprogress = async () => {
  try {
    const { userId } = auth();
    const data = await API(`/api/userProgress/get-userProgress/${userId}`);
    // if (!data) return null;
    return data.data.userProgress;
  } catch (error) {
    console.log(`error getUserprogress: ${error.message}`);
  }
};

export const updataUserProgress = async (update) => {
  try {
    const { userId } = auth();
    const data = await API.put(
      `/api/userProgress/update-userProgress/${userId}`,
      update
    );
    if (!data) throw new Error("Cant get userProgress and update it.");
    return data.data.userProgress;
  } catch (error) {
    console.log("error updataUserProgress", error.message);
  }
};

export const getUnits = async (id) => {
  try {
    const data = await API(`/get-units/${id}`);
    if (data) return data.data.units;
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLessonsUnit = async (id) => {
  try {
    const data = await API(`/get-unit-lessons/${id}`);
    if (data) return data.data.lessonss;
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

export const getUnitProgress = async (id) => {
  try {
    const data = await API(`/api/userProgress/get-unit-progress/${id}`);
    if (data) return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLesson = async (id) => {
  try {
    const data = await API(`/get-lesson/${id}`);
    if (data) return data.data;
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

export const getChallenges = async (id) => {
  try {
    const data = await API(`/get-challenges/${id}`);
    if (data) return data.data;
    return null;
  } catch (error) {
    console.log(error.message);
  }
};

export const getChallenge = async (id) => {
  try {
    const data = await API(`/get-challenge/${id}`);
    if (data) return data.data.challenge;
  } catch (error) {
    console.log("error getChallenge", error.message);
  }
};

export const getChallengeProgress = async (userId, challengeId) => {
  try {
    const challengeProgress = await API(
      `/get-challenge-progress/${userId}/${challengeId}`
    );
    if (!challengeProgress) return null;
    console.log("progress", challengeProgress);

    return challengeProgress.data.challengeProgress;
  } catch (error) {
    console.log("error getChallengeProgress", error.message);
  }
};

export const createChallengeProgress = async (body) => {
  try {
    const challengeProgress = await API.post(
      "/create-challenge-progress",
      body
    );
    if (!challengeProgress) throw new Error("Cant create challenge progress");
    return challengeProgress.data.challengeProgress;
  } catch (error) {
    console.log("error createChallengeProgress", error.message);
  }
};

export const updateChallengeProgress = async (userId, challengeId) => {
  try {
    const data = await API(
      `/update-challenge-progress/${userId}/${challengeId}`
    );
    if (!data) throw new Error("Cant find challenge progress and update it.");
    return data.data.challengeProgress;
  } catch (error) {
    console.log("error updateChallengeProgress", error.message);
  }
};

export const refillHearts = async () => {
  try {
    const { userId } = auth();
    const data = await API.put(
      `/api/userProgress/update-userProgress/${userId}`,
      {
        hearts: 25,
        points: 25,
      }
    );
    if (data.data) return data.data.userProgress;

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/courses");
    redirect("/shop");
  } catch (error) {
    console.log(error);
  }
};

export const getUserSubscription = async () => {
  try {
    const { userId } = await auth();
    const data = await API(`/api/userProgress/get-user-subscription/${userId}`);

    if (data.data) return data.data.userSubscription;
  } catch (error) {
    console.log(error);
  }
};

export const getUsersProgrss = async () => {
  try {
    const data = await API("/api/userProgress/get-users-progress");
    if (data.data) return data.data.usersProgees;
  } catch (error) {
    console.log(error);
  }
};
