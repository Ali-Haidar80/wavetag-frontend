'use client'
import Preview from '@/Components/dashboard/Preview'
import ActionButtons from '@/Components/qrcode/ActionButtons'
import MainSection from '@/Components/qrcode/MainSection'
import QrCode from '@/Components/qrcode/QRCodeGenerator'
import UploadImg from '@/Components/qrcode/UploadImg'
import React, { useState } from 'react'

const page = () => {

  const [logo, setLogo] = useState<File | null | undefined>()

  return (
    <div className='flex bg-light-100 px-6 py-4 mt-[1px] mb-6 rounded-b-2xl'>
      <div className='w-[55%] md:w-full'>
        <ActionButtons/>
        <MainSection logo={logo} setLogo={setLogo} />
      <div className="my-4 mx-4 hidden md:flex md:justify-end">
        <button className="bg-primary-100 text-light-100  text-sm py-2 px-10 rounded-lg">
          Update
        </button>
      </div>
        </div>
        <div className='w-[45%] block md:hidden'>
        <Preview/>
        </div>
    </div>
  )
}

export default page