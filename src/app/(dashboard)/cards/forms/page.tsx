"use client";
import Preview from "@/Components/dashboard/Preview";
import CardForms from "@/Components/form/CardForms";
import React from "react";

const Page = () => {
  return (
    <div className="bg-light-100  flex justify-between w-[100%] mt-[1px] px-6 pt-1 pb-6 mb-6 rounded-b-2xl ">
        <div className="w-[55%] md:w-[100%]"><CardForms /></div>
        <div className="w-[40%] block md:hidden"><Preview/></div>
    </div>
  );
};

export default Page;
