"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { useHeartModel } from "@/store/use-heart-model";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
const HeartModel = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartModel();
  useEffect(() => setIsClient(true), []);
  if (!isClient) {
    return null;
  }
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-center">
            <Image
              src="/mascot_bad.svg"
              width={120}
              height={120}
              alt="mascot"
              className="mb-5 text-center"
            />
          </div>
          <DialogTitle className="text-center text-black font-bold text-2xl">
            You run out of hearts!
          </DialogTitle>
          <DialogDescription className="text-center text-xl font-base ">
            Get pro for unlimited hearts, or purches them in the store.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className={`mt-4`}>
          <div className="flex flex-col gap-y-2 items-center w-full">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                close();
                router.push("/shop");
              }}
            >
              Get unlimited hearts
            </Button>
            <Button
              variant="primaryOutline"
              className="w-full"
              onClick={() => {
                close();
              }}
            >
              no thanks
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HeartModel;
