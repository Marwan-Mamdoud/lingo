import FeedWrapper from "@/app/component/FeedWrapper";
import StickyWarpper from "@/app/component/StickyWarpper";
import React from "react";
import Header from "./header";
import UserProcessing from "@/app/component/UserProcessing";
import Unit from "@/app/component/unit";
import {
  getUnits,
  getUserprogress,
  getUserSubscription,
} from "@/action/userProgress";
import { redirect } from "next/navigation";
import Promo from "@/app/component/Promo";

const page = async () => {
  const userProgress = await getUserprogress();
  const userSubscription = await getUserSubscription();
  const isUnlimited = !!userSubscription?.active;
  if (!userProgress) {
    redirect("/courses");
  }
  const units = await getUnits(userProgress.activeCourseId._id);
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title={userProgress.activeCourseId.title} />
        {units.map((unit) => (
          <Unit unit={unit} key={unit._id} />
        ))}
      </FeedWrapper>
      <StickyWarpper>
        <UserProcessing
          activeCourse={{
            title: userProgress.activeCourseId.title,
            imageSrc: userProgress.activeCourseId.image,
          }}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isUnlimited}
        />
        {!isUnlimited ? <Promo /> : ""}
      </StickyWarpper>
    </div>
  );
};

export default page;
