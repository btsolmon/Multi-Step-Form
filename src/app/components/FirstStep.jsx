"use client";

import { useState } from "react";
import { Button } from "./Button";
import { TextField } from "./TextField";

export const FirstStep = ({
  handleNextStep,
  form,
  setForm,
  error,
  setError,
}) => {
  const isFirstNameValid = (value) => {
    if (value === "") return "First name cannot be empty.";
    if (!/^[A-Za-z-]+$/.test(value))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = (value) => {
    if (value === "") return "Last name cannot be empty.";
    if (!/^[A-Za-z-]+$/.test(value))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUsernameValid = (value) => {
    if (value === "") return "Username cannot be empty.";
    if (!/^[A-Za-z0-9.]+$/.test(value))
      return "Username cannot contain special characters.";
  };
  const isHavingError = () => {
    const firstNameError = isFirstNameValid(form.firstname);
    const lastNameError = isLastNameValid(form.lastname);
    const usernameError = isUsernameValid(form.username);
    return firstNameError || lastNameError || usernameError;
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
            value={form.firstname}
            onChange={(e) => {
              setForm({ ...form, firstname: e.target.value });
              setError({
                ...error,
                firstname: isFirstNameValid(e.target.value),
              });
            }}
            error={error.firstname}
            required={true}
            label="First name"
            placeholder="Donald..."
          />
          <TextField
            value={form.lastname}
            onChange={(e) => {
              setForm({ ...form, lastname: e.target.value });
              setError({
                ...error,
                lastname: isLastNameValid(e.target.value),
              });
            }}
            error={error.lastname}
            required={true}
            label="Last name"
            placeholder="Trump..."
          />
          <TextField
            value={form.username}
            onChange={(e) => {
              setForm({ ...form, username: e.target.value });
              setError({
                ...error,
                username: isUsernameValid(e.target.value),
              });
            }}
            error={error.username}
            required={true}
            label="Username"
            placeholder="@realDonaldTrump..."
          />
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          className="bg-black text-white w-full gap-2"
          onClick={handleNextStep}
          disabled={
            !form.firstname ||
            !form.lastname ||
            !form.username ||
            isHavingError()
          }
        >
          Continue 1/3
          <img src="chevron_right.png"></img>
        </Button>
      </div>
    </div>
  );
};
