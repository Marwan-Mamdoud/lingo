import { Check, Crown, Star } from "lucide-react";
// import { CircularProgressbarWithChildren } from "react-circular-progressbar";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
const LessonBtn = ({
  title,
  id,
  index,
  completed,
  totalCount,
  current,
  locked,
  percentage,
}) => {
  const cycleLenght = 8;
  const cycleIndex = index % cycleLenght;
  let indentationLevel;

  if (cycleIndex <= 2) {
    indentationLevel = cycleIndex;
  } else if (cycleIndex <= 4 || cycleIndex <= 6) {
    indentationLevel = 4 - cycleIndex;
  } else {
    indentationLevel = cycleIndex - 8;
  }
  const rightPosition = indentationLevel * 40;
  const isLast = index === totalCount;
  const isFirst = index === 0;
  const Icon = completed ? Check : isLast ? Crown : Star;
  const href = `/lesson/${id}`;
  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !completed ? 17 : 4,
        }}
      >
        <div className="w-[102px] h-[102px] relative ">
          {current ? (
            <>
              <div className="absolute -top-6 -left-1 px-3 py-2.5 border-2 font-bold uppercase text-green-400 bg-white rounded-xl border-green-200 animate-bounce tracking-wide z-10">
                start
                <div className="absolute -bottom-2 left-1/2 border-t-8 border-x-8 border-green-300 border-x-transparent w-0 h-0 transform -translate-x-1/2" />
              </div>
              <Button
                size="rounded"
                className="h-[70px] w-[70px] border-b-8 "
                variant={`${locked ? "locked" : "secondry"}`}
              >
                <Icon
                  className={cn(
                    "h-10 w-10  ",
                    locked
                      ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                      : "fill-primary-foreground stroke-primary-foreground",
                    completed && "fill-none stroke-[4]"
                  )}
                />
              </Button>
            </>
          ) : (
            <Button
              size="rounded"
              className="h-[70px] w-[70px] border-b-8 "
              variant={`${locked ? "locked" : "secondry"}`}
            >
              <Icon
                className={cn(
                  "h-10 w-10  ",
                  locked
                    ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                    : "fill-primary-foreground stroke-primary-foreground",
                  completed && "fill-none stroke-[4]"
                )}
              />
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default LessonBtn;
