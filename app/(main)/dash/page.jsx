import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-12">
        <div className="">
          <div className="  relative w-full">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl  h-56 bg-green-400 border border-green-300  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="font-bold mx-auto text-5xl text-white mb-4 relative z-50">
                Units Edit
              </h1>

              <Link
                href="dash/EditUnits"
                className="border px-4 py-1 rounded-lg  border-green-700 text-green-400 bg-green-800"
              >
                Explore
              </Link>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="  relative w-full">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl h-56 bg-green-400 border border-green-300  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
              <h1 className="font-bold mx-auto text-5xl text-white mb-4 relative z-50">
                Lessons Edit{" "}
              </h1>

              <Link
                href="dash/EditLessons"
                className="border px-4 py-1 rounded-lg  border-gray-500 text-green-400 bg-green-800"
              >
                Explore
              </Link>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="  relative w-full">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl h-56 bg-green-400 border border-green-300  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
              <h1 className="font-bold mx-auto text-5xl text-white mb-4 relative z-50">
                Challengs Edit{" "}
              </h1>

              <Link
                href="dash/EditChallenges"
                className="border px-4 py-1 rounded-lg  border-gray-500 text-green-400 bg-green-800"
              >
                Explore
              </Link>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="  relative w-full">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl h-56 bg-green-400 border border-green-300  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>
              <h1 className="font-bold mx-auto text-5xl text-white mb-4 relative z-50">
                Options Edit{" "}
              </h1>

              <Link
                href="/dash/EditOptions"
                className="border px-4 py-1 rounded-lg  border-gray-500 text-green-400 bg-green-800"
              >
                Explore
              </Link>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
