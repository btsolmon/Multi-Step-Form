"use client";

import { useState } from "react";
import { Button } from "./Button";
import { TextField } from "./TextField";
import { ImageField } from "./ImageField";

export const ThirdStep = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
  error,
  setError,
}) => {
  const isDobValid = (value) => {
    if (value === "") return "Please select a date.";
    return null;
  };
  const isProfileImageValid = (value) => {
    if (value === "") return "Image cannot be blank.";
    return null;
  };
  const isHavingError = () => {
    const dobError = isDobValid(form.dob);
    const profileimageError = isProfileImageValid(form.image);
    return dobError || profileimageError;
  };

  return (
    <div className="flex flex-col justify-between w-[480px] min-h-[655px] rounded-[8px] bg-white p-[32px] shadow-xl">
      <div className=" flex flex-col gap-[28px]">
        <div className="">
          <img src="logo.svg"></img>
          <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
          <h2 className="text-[18px] text-gray-400">
            Please provide all current information accurately.
          </h2>
        </div>
        <div className="flex flex-col gap-[12px]">
          <TextField
            type="date"
            value={form.dob}
            onChange={(e) => {
              setForm({ ...form, dob: e.target.value });
              setError({
                ...error,
                dob: isDobValid(e.target.value),
              });
            }}
            error={error.dob}
            required={true}
            label="Date of Birth"
          />
          <ImageField
            value={form.image}
            onChange={(e) => {
              const imageValue = URL.createObjectURL(e.target.files[0]);
              setForm({ ...form, image: imageValue });
              setError({
                ...error,
                image: isProfileImageValid(e.target.value),
              });
            }}
            error={error.image}
            onCancel={() => {
              setForm({ ...form, image: "" });
            }}
            required={true}
            label="Profile Image"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={handlePrevStep}
          className="bg-white text-black border border-gray-300 w-[128px] gap-2"
        >
          <img src="chevron_left.png"></img>
          Back
        </Button>
        <Button
          onClick={handleNextStep}
          className="bg-black text-white w-full gap-2"
          disabled={isHavingError()}
        >
          Continue 3/3
          <img src="chevron_right.png"></img>
        </Button>
      </div>
    </div>
  );
};
