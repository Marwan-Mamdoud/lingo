"use client";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border";
import { InfinityIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const UserProcessing = ({
  activeCourse,
  points,
  hearts,
  hasActiveSubscription,
}) => {
  const router = useRouter();
  return (
    <div className="mx-auto w-full flex items-center justify-between px-2">
      <Button
        borderRadius="1rem"
        width="w-20"
        height="h-10"
        onClick={() => router.push("/courses")}
        className="bg-white dark:bg-slate-900 hover:bg-slate-200 duration-100 mx-auto text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {" "}
        <Image
          src={activeCourse.imageSrc}
          width={30}
          height={30}
          alt={activeCourse.title}
          className="rounded cursor-pointer"
        />
      </Button>
      <Button
        width="w-20"
        height="h-10"
        borderRadius="1rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {" "}
        <Image
          src="/points.svg"
          width={30}
          height={30}
          alt="fire"
          className="rounded cursor-pointer"
        />
        {points}
      </Button>
      <Button
        width="w-20"
        height="h-10"
        borderRadius="1rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {" "}
        <Image
          src="/heart.svg"
          width={30}
          height={30}
          alt="heart"
          className="rounded cursor-pointer"
        />
        &nbsp;
        {hasActiveSubscription ? (
          <InfinityIcon className="text-red-500 text-lg" />
        ) : (
          hearts
        )}
      </Button>
    </div>
  );
};

export default UserProcessing;
