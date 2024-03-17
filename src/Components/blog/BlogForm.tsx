import { AboutInputTypes } from '@/types/about'
import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import UploadCoverPic from './UploadCoverPic'

const BlogForm: React.FC<{ handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void, inputs: AboutInputTypes, setInputs: Dispatch<SetStateAction<AboutInputTypes>> }> = ({ handleFormSubmit, inputs, setInputs }) => {

  return (
    <form className='w-full' onSubmit={(e: FormEvent<HTMLFormElement>) => handleFormSubmit(e)}>

      <div className="w-full xl:flex-row lg:flex-row 2xl:flex-row flex md:items-start lg:items-end xl:items-end 2xl:items-end sm:items-start xs:items-start md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse  gap-4 mt-6">

        <div className="w-full ">
          <h2 className="font-medium text-sm mb-2">Heading</h2>
          <input
            type="text"
            className="outline-none border w-[100%]  px-4 py-2 border-gray rounded-2xl bg-transparent text-secondary-400  "
            placeholder="EH"
            name="company"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInputs({ ...inputs, company: e.target.value })}
            value={inputs.company}
            id=""
          />
          <h2 className="font-medium text-sm mt-4 mb-2">Meta Description</h2>
          <textarea
            rows={5}
            className="resize-none outline-none border w-[100%] md:w-[100%] px-4 py-2 border-gray rounded-2xl bg-transparent text-secondary-400  "
            placeholder="San Jose, California, USA"
            name="bio"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputs({ ...inputs, bio: e.target.value })}
            value={inputs.bio}
            id=""
          />
        </div>
        <div className='md:w-full xs:w-full sm:w-full lg:w-auto xl:w-auto 2xl:w-auto flex flex-col items-center justify-end gap-3'>
          <h2 className='text-[10px] md:text-[13px]'>Cover Image</h2>
          <UploadCoverPic inputs={inputs} setInputs={setInputs} />
        </div>
      </div>
    </form>
  )
}

export default BlogForm