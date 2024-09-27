"use client";
import { getUserProgress } from "@/action/userProgress";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CourseCard = ({ course, active }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        if (active) {
          router.push("/learn");
        } else {
          getUserProgress(course);
        }
      }}
      className="flex cursor-pointer flex-col min-h-[300px] w-[310px] rounded-2xl items-center justify-center"
    >
      <BackgroundGradient className="rounded-2xl relative w-full flex flex-col items-center justify-center p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          width={150}
          height={100}
          alt={course.title}
          src={course.image}
          className="rounded mb-5"
        />
        <p className="font-bold text-black  text-2xl">{course.title}</p>
        {active && (
          <CheckIcon className="bg-green-600 rounded-lg text-white text-lg font-extrabold absolute top-2 right-2" />
        )}
      </BackgroundGradient>
    </div>
  );
};

export default CourseCard;
