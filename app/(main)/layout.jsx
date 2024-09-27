import React from "react";
import Header from "../(markting)/header";
import Sidebar from "../component/Sidebar";
import MobileHeader from "../component/MobileHeader";
import { SidebarDemo } from "../component/Side";

const layout = ({ children }) => {
  return (
    <div className="bg-white text-black">
      {/* <Header /> */}
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full ">
        <div className="h-full max-w-[1156px]  mx-auto pt-6">{children}</div>
      </main>
    </div>
  );
};

export default layout;
