import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { useCallback } from "react";
import { useAudio } from "react-use";

const Card = ({
  type,
  disabled,
  audioSrc,
  status,
  onClick,
  selected,
  shortCut,
  imageSrc,
  text,
  id,
}) => {
  const [audio, _, controls] = useAudio({ src: audioSrc || "" });
  const handleClick = useCallback(() => {
    if (disabled) return null;
    controls.play();
    onClick();
  }, [disabled, onClick, controls]);
  return (
    <div
      onClick={handleClick}
      className={cn(
        "h-full border-2 border-b-4 rounded-xl cursor-pointer p-4 active:border-b-2 hover:bg-black/5",
        selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
        selected &&
          status === "correct" &&
          "border-green-300 bg-green-100 hover:bg-green-100",
        selected &&
          status === "correct" &&
          "border-green-300 bg-green-100 hover:bg-green-100",
        selected &&
          status === "wrong" &&
          "border-rose-300 bg-rose-100 hover:bg-rose-100",
        disabled && "pointer-events-none hover:bg-white",
        type === "ASSIST" && "w-full"
      )}
    >
      {imageSrc && (
        <div className="relative w-full aspect-square mb-4 max-h-[150px]">
          <Image src={imageSrc} fill alt={text} />
        </div>
      )}
      <div
        className={cn(
          "flex items-center justify-between",
          type == "ASSIST" && "flex flex-row-reverse"
        )}
      >
        {type === "ASSIST" && <div />}
        <p
          className={cn(
            "text-neutral-600 ",
            selected && "text-sky-500",
            selected && status == "correct" && "text-green-500",
            selected && status == "wrong" && "text-rose-500"
          )}
        >
          {text}
        </p>
        {audio}
        <div
          className={cn(
            "px-1 py-0.5 font-mono border-2 text-slate-400 border-slate-400 rounded-lg",
            selected && "text-sky-500 border-sky-500",
            selected &&
              status == "correct" &&
              "text-green-500 border-green-500",
            selected && status == "wrong" && "text-rose-500 border-rose-500"
          )}
        >
          {shortCut}
        </div>
      </div>
    </div>
  );
};

export default Card;
