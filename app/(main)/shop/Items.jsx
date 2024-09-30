"use client";
import { refillHearts } from "@/action/userProgress";
import { createStripeUrl, createSubscription } from "@/action/userSubscription";
import { Button } from "@/components/ui/button";
import { useToast } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Items = ({ hearts, points, isPro }) => {
  const toast = useToast();
  const router = useRouter();

  const upgradeToPro = async () => {
    const stripe = await createStripeUrl();
    await createSubscription();

    window.location.href = stripe.data;

    return toast({
      title: "Done Refill your hearts",
      status: "success",
      position: "top-right",
    });
  };

  const onClick = async () => {
    const data = await refillHearts();
    if (data) window.location.reload();
    return toast({
      title: "Done Refill your hearts",
      status: "success",
      position: "top-right",
    });
  };
  return (
    <ul className="pt-7 border-t-2 border-slate-300 flex mt-5 flex-col gap-4">
      <li className="flex items-center gap-32 justify-between">
        <div className="flex items-center justify-center gap-2">
          <Image src="/heart.svg" width={40} height={40} alt="heart" />
          <p className="text-slate-400 text-lg ">Refill hearts</p>
        </div>
        <div className=" items-center">
          <Button
            onClick={onClick}
            disabled={hearts === 25}
            variant="defaultOutline"
          >
            {hearts === 25 ? (
              "Full"
            ) : (
              <div className="flex items-center justify-center gap-1">
                <Image src="/points.svg" width={20} height={20} alt="points" />
                25
              </div>
            )}
          </Button>
        </div>
      </li>
      <li className="flex items-center gap-32 justify-between">
        <div className="flex items-center justify-center gap-2">
          <Image src="/unlimited.svg" width={40} height={40} alt="heart" />
          <p className="text-slate-400 text-lg ">Unlimited hearts</p>
        </div>
        <div className=" items-center">
          <Button
            onClick={upgradeToPro}
            disabled={isPro}
            variant="defaultOutline"
          >
            Upgrade
          </Button>
        </div>
      </li>
    </ul>
  );
};

export default Items;
