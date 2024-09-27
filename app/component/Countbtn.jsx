"use client";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

const Countbtn = () => {
  const toast = useToast();
  const [count, setCount] = useState(0);
  return (
    <div className="p-5 space-y-4 flex flex-col gap-9 max-w-[230px]  ">
      <Button
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        default
      </Button>
      <Button
        variant="defaultOutline"
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        default outline
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        primary
      </Button>
      <Button
        variant="primaryOutline"
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        primary outline
      </Button>
      <Button
        variant="secondry"
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        secondry
      </Button>
      <Button
        variant="secondryOutline"
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        secondry outline
      </Button>
      <Button
        variant="dangerous"
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        dangerous
      </Button>
      <Button
        variant="dangerousOutline"
        className=""
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        dangerous outline
      </Button>
      <Button
        variant="super"
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        super
      </Button>
      <Button
        variant="superOutline"
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        super outline
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        ghost
      </Button>
      <Button
        variant="sidebarOutlint"
        onClick={() => {
          setCount((prev) => prev + 1);
          toast({
            status: "success",
            title: `Count: ${count}`,
            // isClosable: true,
            position: "top-right",
            duration: 1000,
          });
        }}
      >
        sidebar outline
      </Button>
    </div>
  );
};

export default Countbtn;
