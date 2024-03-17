"use client"
import React, { FormEvent, useState } from 'react'
import CardTitle from '@/Components/about/CardTitle'
import AboutForm from '@/Components/about/AboutForm'
import { AboutInputTypes } from '@/types/about'
import UploadProfilePic from '@/Components/about/UploadProfilePic'
import UploadCoverPic from '@/Components/about/UploadCoverPic'
import UploadCompanyLogo from '@/Components/about/UploadCompanyLogo'
import Preview from '@/Components/dashboard/Preview'

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
  function handleFormSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("form submitted...",inputs);
    
  }
  return (
    <div className="bg-light-100  w-[100%] flex flex-row mb-10 rounded-b-3xl mt-[1px] ">
      <div className='flex md:flex-row flex-col w-full'>
      <div className=' flex flex-row md:flex-col w-[20%] gap-6 mt-4 mx-6'>
    <div className='flex flex-col items-center gap-1'>
    <h2 className='text-[10px] md:ext-[13px]'>Profile Photo</h2>
    <UploadProfilePic inputs={inputs} setInputs={setInputs} />
    </div>
    <div className='flex flex-col items-center gap-3'>
    <h2 className='text-[10px] md:ext-[13px]'>Cover Photo</h2>
    <UploadCoverPic inputs={inputs} setInputs={setInputs} />
    </div>
    <div className='flex flex-col items-center gap-1'>
    <h2 className='text-[10px] md:ext-[13px]'>Company Logo</h2>
    <UploadCompanyLogo inputs={inputs} setInputs={setInputs} />
    </div>
  </div>
      <div className="right data flex flex-col w-full md:w-[80%] lg:w-[100%] px-4 py-2 ">
        <CardTitle inputs={inputs} setInputs={setInputs} />
        <AboutForm handleFormSubmit={handleFormSubmit} inputs={inputs} setInputs={setInputs} />
    </div>
      </div>
      <div className="w-[360px] md:hidden">
          <Preview />
      </div>
    </div>
  )
}

export default page