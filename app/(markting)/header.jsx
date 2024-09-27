import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="h-20 w-full border-b-2 px-4 border-slate-200">
      <div className="h-full max-w-screen-lg mx-auto flex items-center justify-between w-full">
        <div className="pl-4 pb-7 pt-8 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="hi" />
          <h1 className="text-green-500 font-extrabold tracking-wide text-2xl">
            Lingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-span text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              signUpForceRedirectUrl="/learn"
              forceRedirectUrl="/learn"
            >
              <Button size="lg" variant="ghost" className="font-bold text-xl">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default Header;
