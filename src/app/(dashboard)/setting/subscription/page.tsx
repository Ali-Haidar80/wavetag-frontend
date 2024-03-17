"use client"
import Package from '@/Components/Package'
import { CheckIcon } from '@/icons'
import React, { useState } from 'react'

const page = () => {
  const [active, setActive] = useState<string>('monthly')

  return (
    <div className='bg-light-100  py-6 lg:px-6  '>
      <div className="flex items-center justify-center lg:gap-6 gap-4">
        <button
          onClick={() => setActive("monthly")}
          className={`${active === "monthly" ? "bg-primary-100 text-light-100" : "text-primary-100"} font-medium py-[8px] border-2 border-primary-100 lg:px-12 px-10 rounded-xl transition`}>
          Monthly
        </button>
        <button
          onClick={() => setActive("yearly")}
          className={`${active === "yearly" ? "bg-primary-100 text-light-100" : "text-primary-100"} border-2 font-medium py-[8px] lg:px-12 px-10 border-primary-100 rounded-xl transition`}>
          Yearly
        </button>
      </div>

      <div className="mx-auto flex flex-wrap md:flex-nowrap my-8 justify-center items-end md:items-center lg:items-end gap-y-6 gap-x-3 lg:gap-x-12">
        <Package type="Free" active={active} />
        <Package type="Premium" popular={true} active={active} />
        <Package type="Business" active={active} />
      </div>

    </div>
  )
}

export default page


