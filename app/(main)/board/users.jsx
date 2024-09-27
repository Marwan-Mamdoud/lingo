import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const Users = ({ name, image, points, me, index }) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center my-4 p-4 rounded-lg hover:bg-slate-200",
        me ? "bg-green-300 hover:bg-green-400" : "",
        index == 0 ? "bg-amber-400 hover:bg-amber-400" : ""
      )}
    >
      <div className=" flex items-center justify-center gap-x-2">
        <p className="text-slate-600 font-bold">{index + 1}.</p>
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-black text-xl  items-center ml-3">
          {name}
        </p>
      </div>
      <p className="text-slate-400 text-xl">{points} XP</p>
    </div>
  );
};

export default Users;
