import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import SidebarItem from "./Sidebar-item";
import { ClerkLoaded, ClerkLoading, SignedIn, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";

const Sidebar = ({ className }) => {
  return (
    <div
      className={cn(
        "flex w-[256px] h-full lg:fixed left-0 top-0 flex-col border-r-2 border-slate-400 justify-between px-2",
        className
      )}
    >
      <Link href="/learn" className=" pb-7 pt-4 flex items-center gap-x-3">
        <Image src="/mascot.svg" height={40} width={40} alt="hi" />
        <h1 className="text-green-500 font-extrabold tracking-wide text-2xl">
          Lingo
        </h1>
      </Link>
      <div className="flex flex-1 flex-col px-3">
        <SidebarItem icon="./learn.svg" href="/learn" label="Learn" />
        <SidebarItem icon="./shop.svg" href="/shop" label="shop" />
        <SidebarItem icon="./quests.svg" href="/quests" label="quests" />
        <SidebarItem
          icon="./leaderboard.svg"
          href="/board"
          label="Leaderboard"
        />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="w-5 h-5 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Sidebar;
