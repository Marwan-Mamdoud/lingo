import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full  h-20 border-t-2 flex justify-center items-center border-slate-200 ">
      <div className="max-w-screen-lg mx-auto flex flex-row gap-x-4 ">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            alt="hi"
            src="/hr.svg"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            alt="hi"
            src="/fr.svg"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            alt="hi"
            src="/it.svg"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            alt="hi"
            src="/es.svg"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          Spain
        </Button>
        <Button size="jg" variant="ghost" className="w-full">
          <Image
            alt="hi"
            src="/jp.svg"
            width={32}
            height={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </div>
  );
};

export default Footer;
