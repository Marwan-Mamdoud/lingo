import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex-1 flex flex-col lg:flex-row bg-white  mx-auto max-w-[988px] w-full h-full items-center justify-center gap-4 p-4 ">
      <div className="relative w-[240px] h-[240px] lg:w-[420px] lg:h-[420px] mb-8 lg:mb-0 ">
        <Image src="/hero.svg" alt="hero" fill />
      </div>
      <div className="flex flex-col gap-y-8 items-center">
        <h1 className="text-center font-bold text-xl lg:text-3xl text-neutral-600 max-w-[480px]">
          Learn, Practice and master new languages with lingo.
        </h1>
        <ClerkLoading>
          <Loader className="w-5 h-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton
              mode="modal"
              size="lg"
              signInForceRedirectUrl="/learn"
              forceRedirectUrl="/learn"
            >
              <Button variant="secondry" className="w-full">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton mode="modal" size="lg" forceRedirectUrl="/learn">
              <Button variant="primaryOutline" className="w-full -mt-4">
                Already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button variant="secondry" size="lg">
              <Link href="/learn">Countinue Learing</Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  );
};

export default page;
