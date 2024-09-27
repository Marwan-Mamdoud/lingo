import { Button } from "@/components/ui/moving-border";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Header = ({ title }) => {
  return (
    <div className="z-50 px-4 mx-auto sticky lg:top-0 pt-5 mb-5  top-[45px] bg-white flex items-center justify-between border-b-slate-400 border-b-2 pb-2">
      <Button
        borderRadius="1rem"
        width="w-20"
        height="h-10"
        className="bg-white text-black border-2 border-b-4 active:border-b-2 rounded  "
      >
        <Link href="../">
          <ArrowLeft />
        </Link>
      </Button>
      <h1 className="text-slate-500 font-mono font-extrabold text-2xl">
        {title}
      </h1>
      <div />
    </div>
  );
};

export default Header;
