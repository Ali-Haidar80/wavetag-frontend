"use client";
import { UserIcon, EmailIcon, HidePasswordIcon, PasswordIcon } from "@/icons";
import { SignUpInputTypes } from "@/types/auth";
import { useState,SyntheticEvent, ChangeEvent } from "react";
import SignUpOptions from "./SignUpOptions";

const SignUpForm = () => {
  const [inputs, setInputs] = useState<SignUpInputTypes>({
    username:"",
    email: "",
    password: "",
  });
  const handleSubmit = (e:SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
    console.log(inputs);
  };
  return (
    <div className="h-[600px] w-full xl:w-[40%] md:w-full login-card flex flex-col items-center xl:pt-6 md:pt-12 lg:pt-12 md:rounded-tl-none xl:rounded-tl-2xl md:rounded-bl-none xl:rounded-bl-2xl xl:rounded-tr-2xl xl:rounded-br-2xl">
      <div className="xl:w-full md:w-[65%]">
      <div className="flex justify-center flex-col items-center">
     <img src="/assets/logos/logo2.png" alt="logo" />
      <h1 className="text-primary-100 text-2xl mt-2 font-semibold"> Sign Up </h1>
     </div>
      <form onSubmit={handleSubmit} className="xl:w-[80%] mx-auto my-0">
      <div className="border-secondary-50 border-2 rounded-md flex items-center gap-1 mt-10 px-2 py-1 w-full">
        <UserIcon />
        <input
          type="text"
          placeholder="Name"
          name="username"
          value={inputs.username}
          onChange={(e:ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, username: e.target.value })}
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div className="border-secondary-50 border-2 rounded-md flex items-center gap-1 mt-4 px-2 py-1 w-full">
        <EmailIcon />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={(e:ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, email: e.target.value })}
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div className="border-secondary-50 border-2 rounded-md flex items-center gap-1 mt-4 px-2 py-1 w-full">
        <PasswordIcon />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={(e:ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, password: e.target.value })}
          className="bg-transparent outline-none w-full"
        />
        <HidePasswordIcon />
      </div>
      <button
        type="submit"
        className="bg-primary-100 w-full rounded-md text-light-100  text-sm mt-4 py-2"
      >
        Sign Up
      </button>
      </form>
      <SignUpOptions />
      </div>
      
    </div>
  );
};

export default SignUpForm;
