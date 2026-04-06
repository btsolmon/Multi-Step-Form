"use client";
import { Button } from "./Button";

export const FinalStep = () => {
  return (
    <div className=" h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="flex flex-col justify-between w-[480px] min-h-[193px] rounded-[8px] bg-white p-[32px] shadow-xl">
        <div className="">
          <img src="logo.svg"></img>
          <h1 className="text-[26px] font-semibold">You're All Set 🔥</h1>
          <h2 className="text-[18px] text-gray-400">
            We have received your submission. Thank you!
          </h2>
        </div>
        <div className="flex flex-col gap-[12px]"></div>
      </div>
    </div>
  );
};
