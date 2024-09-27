import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col h-[100vh] w-full">{children}</div>
    </div>
  );
};

export default layout;
