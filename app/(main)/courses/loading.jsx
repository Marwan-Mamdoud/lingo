import { Loader } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Loader className="w-5 h-5  animate-spin" />
    </div>
  );
};

export default loading;
