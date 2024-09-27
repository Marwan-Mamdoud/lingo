import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheck, XCircle } from "lucide-react";
import React from "react";

const Footer = ({ disabled, lessonId, status, onCheck }) => {
  return (
    <div
      className={cn(
        "h-[100px] border-t-2",
        status === "correct" && "border-transparent bg-green-100",
        status === "wrong" && "border-transparent bg-rose-100"
      )}
    >
      <div className="flex items-center justify-between h-full  w-full px-6 mx-auto">
        {status === "correct" && (
          <div
            className={cn(
              "text-green-500 font-bold text-2xl flex items-center"
            )}
          >
            <CircleCheck className="h-8 w-8 mr-2" />
            Nicely Done
          </div>
        )}
        {status === "wrong" && (
          <div
            className={cn("text-red-500 font-bold text-2xl flex items-center")}
          >
            <XCircle className="h-8 w-8 mr-2" />
            Try again
          </div>
        )}
        {status === "completed" && (
          <Button
            variant="defaultOutline"
            size="lg"
            onClick={() => {
              window.location.href = `/lesson/${lessonId}`;
            }}
          >
            Practice Again
          </Button>
        )}
        <Button
          disabled={disabled}
          className="ml-auto"
          onClick={onCheck}
          size="lg"
          variant={
            status === "none"
              ? "defaultOutline"
              : status === "wrong"
              ? "dangerous"
              : "secondry"
          }
        >
          {status === "none" && "Check"}
          {status === "completed" && "Continue"}
          {status === "wrong" && "Retry"}
          {status === "correct" && "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Footer;
