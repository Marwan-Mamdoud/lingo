import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const FinishCart = ({ lessonId, hearts, points, isUnlimited }) => {
  const router = useRouter();
  const { width, height } = useWindowSize();
  return (
    <>
      <div className="w-full h-[100vh] flex items-center flex-col justify-center">
        <Confetti
          width={width}
          height={height}
          numberOfPieces={1000}
          tweenDuration={10000}
        />
        <Image src="/finish.svg" width={100} height={100} alt="finish" />
        <div className="font-extrabold text-3xl font-mono text-center mt-3 space-y-2 mb-12">
          <p>Great Job!</p>
          <p>You have completed this lesson.</p>
        </div>
        <div className="flex text-white items-center justify-center gap-8">
          <div className="bg-orange-500 text-xl  font-bold text-center rounded-xl">
            <p className="py-0.5">total XP</p>
            <div className="rounded-xl  h-[100px] w-[150px] border-orange-500 border-2 bg-white flex items-center justify-center">
              <Image src="/points.svg" width={50} height={50} alt="points" />
              <p className="text-orange-500 text-2xl">{points}</p>
            </div>
          </div>
          <div className="bg-rose-500 text-xl font-bold  border-rose-500 border-2 text-center rounded-xl">
            <p className="py-0.5">Heatrs</p>
            <div className="rounded-xl  h-[100px] w-[150px] bg-white flex items-center justify-center ">
              {isUnlimited ? (
                <Image
                  src="/unlimited.svg"
                  width={45}
                  height={45}
                  alt="points"
                />
              ) : (
                <Image src="/heart.svg" width={45} height={45} alt="points" />
              )}
              <p className="text-rose-500 text-2xl">
                {isUnlimited ? (
                  <InfinityIcon className="w-8 h-8 stroke-[3] shrink-0" />
                ) : (
                  hearts
                )}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[650px] mt-28 p-5 bg-slate-100 rounded-xl  flex flex-row items-center justify-between">
          <Button
            variant="defaultOutline"
            onClick={() => {
              window.location.href = `/lesson/${lessonId}`;
            }}
          >
            Practice again
          </Button>
          <Button
            variant="secondry"
            onClick={() => {
              router.push("/learn");
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default FinishCart;
