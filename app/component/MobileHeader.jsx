import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const MobileHeader = () => {
  return (
    <div className="lg:hidden h-[50px] bg-green-600 px-5 mb-11 fixed top-0 w-full z-20 flex items-center border-b-4">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-white " />
        </SheetTrigger>
        <SheetContent side="left" className="w-[256px] border-0">
          <Sidebar className="z-50" />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileHeader;
