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
import { createOption, deleteOption } from "@/action/crud";

// export default () => (
//   <Tabs.Root>
//     <Tabs.List>
//       <Tabs.Trigger />
//     </Tabs.List>
//     <Tabs.Content />
//   </Tabs.Root>
// );

const Page = () => {
  const [challengeId, setChallengeId] = useState();
  const [text, setText] = useState();
  const [correct, setCorrect] = useState();
  const [optionId, setOptionId] = useState();
  const toast = useToast();
  const router = useRouter();
  const onSubmit = async () => {
    console.log({ challengeId, text, correct });
    const data = await createOption({ challengeId, text, correct });
    if (data)
      return toast({
        position: "top-right",
        title: "Done Create Option",
        status: "success",
      });

    // router.push("/dash/EditOptions");
  };
  const onDelete = async () => {
    const data = await deleteOption({ optionId });
    if (data)
      return toast({
        position: "top-right",
        title: "Done Delete Option",
        status: "success",
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
            <FormLabel>Option Text</FormLabel>
            <Input
              onChange={(e) => setText(e.target.value)}
              placeholder="Option Text "
              className=" border-2 rounded-full w-full mb-5 border-slate-200"
            />

            <FormLabel>Challenge Id</FormLabel>
            <Input
              onChange={(e) => setChallengeId(e.target.value)}
              placeholder="Challenge Id "
              className=" border-2 mb-5 border-red-500"
            />
            <Select
              placeholder="Select option"
              className="mb-5 "
              onClick={(e) => setCorrect(e.target.value)}
            >
              <option value="True">True</option>
              <option value="False">False</option>
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
            <FormLabel>Option Id</FormLabel>
            <Input
              onChange={(e) => setOptionId(e.target.value)}
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
