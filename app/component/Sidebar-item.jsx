"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/moving-border";

const SidebarItem = ({ icon, label, href }) => {
  return (
    <div className="mb-4">
      <Link
        href={href}
        className=" justify-start items-start flex flex-row ml-2"
      >
        <Button
          className="font-bold text-xl justify-start border-2 border-slate-400 flex gap-2 hover:translate-x-2 duration-300 bg-white text-slate-500 "
          width="w-52"
          borderRadius="1rem"
          height="h-[50px]"
        >
          <Image
            src={icon}
            alt={label}
            width={32}
            height={32}
            className="mr-3 text-black "
          />
          <p>{label}</p>
        </Button>
      </Link>
    </div>
  );
};

export default SidebarItem;
