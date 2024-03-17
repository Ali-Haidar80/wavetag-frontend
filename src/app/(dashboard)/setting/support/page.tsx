"use client"
import CustomInput from '@/Components/general/CustomInput'
import { SupportInputTypes } from '@/types/setting'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const page: React.FC = () => {
  const [inputs, setInputs] = useState<SupportInputTypes>({
    subject: "",
    message: "",
  });

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("form submitted...", inputs);
  }

  return (
    <div className='bg-light-100  p-6'>
      <form onSubmit={handleFormSubmit} className='lg:mx-auto max-w-[550px]'>
        <CustomInput
          type="text"
          label={"Subject"}
          placeholder="mymail@mail.com"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, subject: e.target.value })}
          value={inputs.subject}
        />
        <CustomInput
          type="textarea"
          label="Message"
          placeholder="**********"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, message: e.target.value })}
          value={inputs.message}
        />

        <div className="lg:text-center mt-8">
          <button type='submit' className="bg-primary-100 text-light-100   py-2.5 px-10 rounded-xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default page