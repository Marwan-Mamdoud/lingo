import Image from "next/image";
import React from "react";

const QuestionBubble = ({ question }) => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/mascot.svg" width={60} height={60} alt="mascot" />
      <div className="relative border-2 rounded-lg bg-white text-slate-400 font-mono py-2 px-4">
        <div className="absolute top-1/2 rotate-90 -left-3 border-t-8 border-x-8  border-x-transparent w-0 h-0 transform -translate-y-1/2" />
        {question}
      </div>
    </div>
  );
};

export default QuestionBubble;
