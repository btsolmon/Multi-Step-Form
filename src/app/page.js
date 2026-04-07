"use client";
import { useEffect, useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { FinalStep } from "./components/FinalStep";

export default function Home() {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState(null);
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    dob: "",
    image: "",
  });

  useEffect(() => {
    if (form !== null) {
      localStorage.setItem("form", JSON.stringify(form));
    } else {
      const storedForm = JSON.parse(localStorage.getItem("form"));
      if (storedForm) {
        setForm(storedForm);
      } else {
        setForm({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          phonenumber: "",
          password: "",
          confirmpassword: "",
          dob: "",
          image: "",
        });
      }
    }
  }, [form]);

  const steps = [FirstStep, SecondStep, ThirdStep, FinalStep];

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  const StepForm = steps[step];
  if (!form) return null;
  return (
    <div className=" h-screen w-full flex justify-center items-center bg-gray-100">
      <StepForm
        error={error}
        setError={setError}
        form={form}
        setForm={setForm}
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
      />
    </div>
  );
}
