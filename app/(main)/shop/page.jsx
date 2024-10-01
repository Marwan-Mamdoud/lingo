import { getUserprogress, getUserSubscription } from "@/action/userProgress";
import StickyWarpper from "@/app/component/StickyWarpper";
import UserProcessing from "@/app/component/UserProcessing";
import Image from "next/image";
import React from "react";
import Items from "./Items";
import { Meteors } from "@/components/ui/meteors";

const Shop = async () => {
  const userProgress = await getUserprogress();
  const userSubscription = await getUserSubscription();

  const isPro = !!userSubscription;
  return (
    <div className="w-full mx-auto">
      <div className="h-full w-fit mx-auto gap-40 flex items-start justify-between">
        <div className="flex items-center flex-col">
          <Image src="/shop.svg" width={100} height={100} alt="shop" />
          <p className="font-bold text-4xl text-black my-3">Shop</p>
          <p className="text-slate-400 text-xl my-2">
            Spend your points on cool stuff.
          </p>
          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            isPro={isPro}
          />
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
        </StickyWarpper>
      </div>
      <Meteors number={20} />
    </div>
  );
};

export default Shop;
