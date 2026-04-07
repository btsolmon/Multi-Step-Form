"use client";

import { useState } from "react";
import { Button } from "./Button";
import { TextField } from "./TextField";

export const SecondStep = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
  error,
  setError,
}) => {
  const isEmailValid = (value) => {
    if (value === "") return "Email cannot be empty.";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
      return "Please provide a valid email address.";
  };
  const isPhoneNumberValid = (value) => {
    if (value === "") return "Phone Number cannot be empty.";
    if (!/^[0-9]{8}$/.test(value)) return "Please enter a valid phone number.";
  };
  const isPasswordValid = (value) => {
    if (value === "") return "Password cannot be empty.";
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#.])[A-Za-z\d@$!%*?&#.]{8,}$/.test(
        value,
      )
    )
      return "Password must include uppercase, lowercase, numbers and special characters.";
  };
  const isConfirmPasswordValid = (value) => {
    if (value === "") return "Confirm password is required.";
    if (value !== form.password)
      return "Passwords do not match. Please try again.";
    return "";
  };
  const isHavingError = () => {
    const emailError = isEmailValid(form.email);
    const phoneNumberError = isPhoneNumberValid(form.phonenumber);
    const passwordError = isPasswordValid(form.password);
    const confirmPasswordError = isConfirmPasswordValid(form.confirmpassword);
    return (
      emailError || phoneNumberError || passwordError || confirmPasswordError
    );
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
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setError({
                ...error,
                email: isEmailValid(e.target.value),
              });
            }}
            error={error.email}
            required={true}
            label="Email"
            placeholder="example@gmail.com..."
          />
          <TextField
            value={form.phonenumber}
            onChange={(e) => {
              setForm({ ...form, phonenumber: e.target.value });
              setError({
                ...error,
                phonenumber: isPhoneNumberValid(e.target.value),
              });
            }}
            error={error.phonenumber}
            required={true}
            label="Phone Number"
            placeholder="99009900"
          />
          <TextField
            value={form.password}
            type="password"
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
              setError({
                ...error,
                password: isPasswordValid(e.target.value),
              });
            }}
            error={error.password}
            required={true}
            label="Password"
            placeholder="Password"
          />
          <TextField
            value={form.confirmpassword}
            type="password"
            onChange={(e) => {
              setForm({ ...form, confirmpassword: e.target.value });
              setError({
                ...error,
                confirmpassword: isConfirmPasswordValid(e.target.value),
              });
            }}
            error={error.confirmpassword}
            required={true}
            label="Confirm Password"
            placeholder="Confirm Password"
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
          Continue 2/3
          <img src="chevron_right.png"></img>
        </Button>
      </div>
    </div>
  );
};
