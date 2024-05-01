"use client"
import { themes } from '@/constants/constants'
import React from 'react'

const Page = () => {

  return (
    <div className='bg-light-100 w-full p-6  rounded-b-2xl  mb-10'>
      
        <div className='flex flex-wrap gap-4 py-1 my-1 overflow-y-auto h-[32rem]'>
          {
            Array.from({length:2},()=>(
              themes.map((s,idx)=>(
                <img key={idx} src={s.path} alt="" />
              ))
            ))
          }
        </div>
      
    </div>
  )
}

export default Page