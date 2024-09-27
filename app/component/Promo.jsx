"use client";
import { createStripeUrl } from "@/action/userSubscription";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Promo = () => {
  const upgradeToPro = async () => {
    const stripe = await createStripeUrl();
    window.location.href = stripe.data;
    return;
  };

  return (
    <div className="flex flex-col items-start justify-center  border-2 px-4 py-2 border-slate-200 rounded-xl">
      <div className="flex items-center justify-start">
        <Image
          src="unlimited.svg"
          width={40}
          height={40}
          alt="pro"
          className="mb-3"
        />
        <p className="text-black font-bold text-xl ">Upgrade to pro</p>
      </div>
      <p className="text-slate-400 font-mono text-lg ">
        Get unlimited hearts and more!
      </p>
      <Button onClick={upgradeToPro} variant="super" className="w-full">
        Upgrade today
      </Button>
    </div>
  );
};

export default Promo;
