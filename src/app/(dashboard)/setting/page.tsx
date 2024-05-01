"use client"
import CustomInput from '@/Components/general/CustomInput'
import SwitchButton from '@/Components/SwitchButton'
import { SettingInputTypes } from '@/types/setting'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Page: React.FC = () => {
  const [inputs, setInputs] = useState<SettingInputTypes>({
    email: "",
    password: "",
    emailNotifications: true,
    monthlyReport: false,
    promotionalInfo: true
  });

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("form submitted...", inputs);
  }

  return (
    <div className='bg-light-100 p-6'>
      <form onSubmit={handleFormSubmit} className='lg:mx-auto max-w-[550px]'>
        <CustomInput
          type="email"
          label={"Email"}
          placeholder="mymail@mail.com"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, email: e.target.value })}
          value={inputs.email}
        />
        <CustomInput
          type="password"
          label="Password"
          placeholder="**********"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, password: e.target.value })}
          value={inputs.password}
        />

        <div className="mt-4">
          <h4 className="block font-medium mb-4 text-secondary-400 ">Notification</h4>
          <div className='flex flex-col gap-[15px] justify-center'>
          <SwitchButton isChecked={inputs.emailNotifications}
            onToggle={() => setInputs({ ...inputs, emailNotifications: !inputs.emailNotifications })}
            label="Receive email notifications"/>
          <SwitchButton isChecked={inputs.monthlyReport}
            onToggle={() => setInputs({ ...inputs, monthlyReport: !inputs.monthlyReport })}
            label="Receive monthly report via email"/>
          <SwitchButton isChecked={inputs.promotionalInfo} onToggle={() => setInputs({ ...inputs, promotionalInfo: !inputs.promotionalInfo })}
            label="Send me promotional and informative content"/>
          </div>
        </div>
        <div className="lg:text-center mt-8">
          <button type='submit' className="bg-primary-100 text-light-100  py-2.5 px-16 rounded-xl">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page