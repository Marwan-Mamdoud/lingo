import React from "react";
import Header from "./header";
import Footer from "./footer";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
