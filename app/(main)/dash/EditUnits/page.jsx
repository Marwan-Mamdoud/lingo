"use client";
import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { createUnit, deleteUnit } from "@/action/crud";

// export default () => (
//   <Tabs.Root>
//     <Tabs.List>
//       <Tabs.Trigger />
//     </Tabs.List>
//     <Tabs.Content />
//   </Tabs.Root>
// );

const Page = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [courseId, setCourseId] = useState();
  const [orderr, setOrder] = useState();
  const [unitId, setUnitId] = useState();
  const router = useRouter();
  const toast = useToast();
  const onSubmit = async () => {
    const order = Number(orderr);

    const create = await createUnit({ title, description, courseId, order });
    if (create)
      return toast({
        position: "top-right",
        status: "success",
        title: `Done Create Unit`,
      });
    router.push("/dash/EditLessons");
  };
  const onDelete = async () => {
    const create = await deleteUnit({ unitId });
    if (create)
      return toast({
        position: "top-right",
        status: "success",
        title: `Done Delete Unit`,
      });
  };
  return (
    <div className="w-full h-[100vh] mx-auto">
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
            <FormLabel>Unit Title</FormLabel>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Unit name "
              className=" border-2 mb-5 border-red-500"
            />
            <FormLabel>Unit Description</FormLabel>
            <Input
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Unit description"
              className=" border-2 mb-5 border-red-500"
            />
            <FormLabel>Course Id</FormLabel>
            <Input
              onChange={(e) => setCourseId(e.target.value)}
              placeholder="ID Course "
              className=" border-2 mb-5 border-red-500"
            />
            <FormLabel>Order</FormLabel>
            <Input
              type="number"
              onChange={(e) => setOrder(e.target.value)}
              placeholder="Order Number"
              className=" border-2 mb-5 border-red-500"
            />
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
            <FormLabel>Unit Id</FormLabel>
            <Input
              onChange={(e) => setUnitId(e.target.value)}
              placeholder="ID Unit "
              className=" border-2 mb-5 border-red-500"
            />
            <Button variant="dangerous" className="w-full" onClick={onDelete}>
              Delete
            </Button>
          </FormControl>
        </Tabs.TabsContent>{" "}
      </Tabs.Root>
    </div>
  );
};

export default Page;
