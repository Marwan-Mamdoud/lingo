"use client";
import { InfinityIcon, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { useExitModel } from "@/store/use-exit-model";

const Header = ({ percentage, hearts, hasActiveSubscription }) => {
  const { open } = useExitModel();
  return (
    <div
      className={`lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1100px] mx-auto w-full `}
    >
      <X
        className="text-slate-500 hover:text-slate-500/70 transition cursor-pointer"
        onClick={open}
      />
      <Progress value={percentage} />
      <div className="text-rose-600 flex gap-x-1 items-center font-semibold">
        <Image src={`/heart.svg`} width={28} height={28} alt="hearts" />
        {hasActiveSubscription ? (
          <InfinityIcon className="w-6 h-6 stroke-[3] shrink-0" />
        ) : (
          hearts
        )}
      </div>
    </div>
  );
};

export default Header;
