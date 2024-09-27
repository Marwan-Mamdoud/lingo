"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { useExitModel } from "@/store/use-exit-model";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
const ExitModel = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModel();
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
              src="/mascot_sad.svg"
              width={120}
              height={120}
              alt="mascot"
              className="mb-5 text-center"
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Wati, dont go!
          </DialogTitle>
          <DialogDescription className="text-center font-base ">
            Yor are about to leave the lesson. Are you sure?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className={`mt-4`}>
          <div className="flex flex-col gap-y-2 items-center w-full">
            <Button variant="primary" className="w-full" onClick={close}>
              Keep learning
            </Button>
            <Button
              variant="dangerousOutline"
              className="w-full"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              End Learning
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExitModel;
