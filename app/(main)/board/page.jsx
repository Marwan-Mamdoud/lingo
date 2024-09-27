import {
  getUserprogress,
  getUsersProgrss,
  getUserSubscription,
} from "@/action/userProgress";
import StickyWarpper from "@/app/component/StickyWarpper";
import UserProcessing from "@/app/component/UserProcessing";
import Image from "next/image";
import Users from "./users";
import Promo from "@/app/component/Promo";

const Page = async () => {
  const usersProgress = await getUsersProgrss();
  const userProgress = await getUserprogress();
  const userSubscription = await getUserSubscription();

  const isPro = !!userSubscription;

  return (
    <div className="h-[100vh] w-full flex justify-between items-start">
      <div className="">
        <div className="w-[600px] text-center  flex flex-col items-center pb-5 mb-5 border-b-2 border-slate-500">
          <Image
            src="leaderboard.svg"
            width={120}
            height={120}
            alt="leaderboard"
            className="mb-5"
          />
          <p className="font-extrabold text-3xl font-mono text-black mb-3">
            Leaderboard
          </p>
          <p className="text-xl font-mono text-slate-300">
            See where you stand among other learners in the community.
          </p>
        </div>
        {usersProgress.map((user, index) => (
          <Users
            index={index}
            key={user.userId}
            name={user.userName}
            image={user.userImage}
            points={user.points}
            me={userProgress.userId == user.userId}
          />
        ))}
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

export default Page;
