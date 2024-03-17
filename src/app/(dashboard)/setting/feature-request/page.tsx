"use client"
import CustomInput from '@/Components/general/CustomInput'
import { FeatureInputTypes } from '@/types/setting'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const page: React.FC = () => {
  const [inputs, setInputs] = useState<FeatureInputTypes>({
    message: "",
  });

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("form submitted...", inputs);
  }

  return (
    <div className='bg-light-100  p-6'>
      <form onSubmit={handleFormSubmit} className='lg:mx-auto max-w-[650px]'>
      <h4 className="block font-medium text-secondary-400   mb-2">Request Feature</h4>
      <p className='text-secondary-400   text-sm mb-4'>Do you have an idea for a feature that would make our services even better for you? Let us know!</p>
        <CustomInput
          type="textarea"
          label="Message"
          placeholder="Message........."
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, message: e.target.value })}
          value={inputs.message}
        />

        <div className="lg:text-center mt-8">
          <button type='submit' className="bg-primary-100 text-light-100   py-2.5 px-6 rounded-xl">
            Send Request
          </button>
        </div>
      </form>
    </div>
  )
}

export default page