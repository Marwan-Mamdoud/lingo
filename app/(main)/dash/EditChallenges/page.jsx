"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { createChallege, deleteChallenge } from "@/action/crud";

const Page = () => {
  const [challengeId, setChallengeId] = useState();
  const [lessonId, setLessonId] = useState();
  const [type, setType] = useState();
  const [question, setQuestion] = useState();
  const [order, setOrder] = useState();
  const router = useRouter();
  const toast = useToast();
  const onSubmit = async () => {
    const orderr = Number(order);
    // console.log({ title, unitId, orderr, type });
    const data = await createChallege({ lessonId, type, question, order });
    if (data)
      return toast({
        position: "top-right",
        status: "success",
        title: `Done Create Challenge`,
      });
    // router.push("/dash/EditChallenges");
  };
  const onDelete = async () => {
    const data = await deleteChallenge({ challengeId });
    if (data)
      return toast({
        position: "top-right",
        status: "success",
        title: `Done Delete Challenge`,
      });
  };
  return (
    <div clssName="w-full h-[100vh] mx-auto">
      <Tabs.Root
        defaultValue="one"
        className="w-[50rem] mx-auto rounded-xl bg-green-200"
      >
        <Tabs.TabsList className="flex justify-evenly items-center rounded-xl rounded-b-none bg-green-400 h-14 text-4xl text-green-200">
          <Tabs.TabsTrigger value="one">ADD</Tabs.TabsTrigger>
          <Tabs.TabsTrigger value="two">Delete</Tabs.TabsTrigger>
        </Tabs.TabsList>
        <Tabs.TabsContent
          className="bg-green-200 rounded-b-xl px-8 py-4"
          value="one"
        >
          <FormControl className="" isRequired>
            <FormLabel>Challenge Question</FormLabel>
            <Input
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Lesson name "
              className=" border-2 mb-5 border-red-500"
            />
            <FormLabel>Lesson ID</FormLabel>
            <Input
              onChange={(e) => setLessonId(e.target.value)}
              placeholder="Lesson Id "
              className=" border-2 mb-5 border-red-500"
            />

            <FormLabel>Order</FormLabel>
            <Input
              onChange={(e) => setOrder(e.target.value)}
              placeholder="Order Number"
              className=" border-2 mb-5 border-red-500"
            />
            <Select
              placeholder="Select option"
              className="mb-5 "
              onClick={(e) => setType(e.target.value)}
            >
              <option value="SELECT">SELECT</option>
              <option value="ASSIST">ASSIST</option>
            </Select>
            <Button variant="secondry" className="w-full" onClick={onSubmit}>
              ADD
            </Button>
          </FormControl>
        </Tabs.TabsContent>
        <Tabs.TabsContent
          className="bg-green-200 rounded-b-xl px-8 py-4"
          value="two"
        >
          <FormControl className="" isRequired>
            <FormLabel>Challenge Id</FormLabel>
            <Input
              onChange={(e) => setChallengeId(e.target.value)}
              placeholder="ID Lesson "
              className=" border-2 mb-5 border-red-500"
            />
            <Button variant="dangerous" className="w-full" onClick={onDelete}>
              Delete
            </Button>
          </FormControl>
        </Tabs.TabsContent>
      </Tabs.Root>
    </div>
  );
};

export default Page;
