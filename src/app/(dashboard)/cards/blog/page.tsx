'use client'
import BlogForm from '@/Components/blog/BlogForm'
import EditorConvertToHTML from '@/Components/blog/Editor';
import Preview from '@/Components/dashboard/Preview';
import { AboutInputTypes } from '@/types/about';
import React, { FormEvent, useState } from 'react'

const page = () => {
  const [inputs, setInputs] = useState<AboutInputTypes>({
    cardTitle: "",
    fullname: "",
    username: "",
    email: "",
    mobile: 0,
    job: "",
    company: "",
    bio: "",
    profilePic: undefined,
    coverPic: undefined,
    companyLogo: undefined,
  });
  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("form submitted...", inputs);

  }
  return (
    <div className="bg-light-100 w-[100%] flex flex-row mb-10 rounded-b-3xl mt-[1px] ">
        <div className="right data flex flex-col w-full xl:w-[100%] 2xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] xs:w-[100%]  px-4 py-2 ">
          <BlogForm handleFormSubmit={handleFormSubmit} inputs={inputs} setInputs={setInputs} />
        <EditorConvertToHTML/>
        </div>
      <div className="w-[360px] md:hidden">
        <Preview />
      </div>
    </div>
  )
}

export default page