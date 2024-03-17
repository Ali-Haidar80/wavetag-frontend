import { AboutInputTypes } from "@/types/about";
import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

const AboutForm: React.FC<{
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  inputs: AboutInputTypes;
  setInputs: Dispatch<SetStateAction<AboutInputTypes>>;
}> = ({ handleFormSubmit, inputs, setInputs }) => {
  return (
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleFormSubmit(e)}>
      <div className="w-[100%] flex flex-col md:flex-row gap-4 mt-6">
        <div className="w-[80%] md:w-[50%]">
          <h2 className="font-medium text-sm mb-2">Name</h2>
          <input
            type="text"
            className="outline-none border w-[100%] px-4 py-2 border-secondary-50 rounded-2xl bg-transparent text-secondary-400  "
            placeholder="Charlene Reed"
            name="fullname"
            value={inputs.fullname}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, fullname: e.target.value })
            }
            id=""
          />
        </div>
        <div className="w-[80%] md:w-[50%]">
          <h2 className="font-medium text-sm mb-2">User Name</h2>
          <input
            type="text"
            className="outline-none border w-[100%]  px-4 py-2 border-secondary-50 rounded-2xl bg-transparent text-secondary-400  "
            placeholder="@Charlene Reed"
            name="username"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, username: e.target.value })
            }
            value={inputs.username}
            id=""
          />
        </div>
      </div>
      <div className="w-[100%] flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-[80%] md:w-[50%]">
          <h2 className="font-medium text-sm mb-2">Email</h2>
          <input
            type="email"
            className="outline-none border w-[100%] px-4 py-2 border-secondary-50 rounded-2xl bg-transparent text-secondary-400  "
            placeholder="charlenereed@gmail.com"
            name="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, email: e.target.value })
            }
            value={inputs.email}
            id=""
          />
        </div>
        <div className="w-[80%] md:w-[50%]">
          <h2 className="font-medium text-sm mb-2">Mobile</h2>
          <input
            type="number"
            className="outline-none border w-[100%]  px-4 py-2 border-secondary-50 rounded-2xl bg-transparent text-secondary-400  "
            placeholder="***********"
            name="mobile"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, mobile: Number(e.target.value) })
            }
            value={inputs.mobile}
            id=""
          />
        </div>
      </div>
      <div className="w-[100%] flex flex-col md:flex-row gap-4 mt-4">
        <div className="w-[80%] md:w-[50%]">
          <h2 className="font-medium text-sm mb-2">Job Tittle</h2>
          <input
            type="text"
            className="outline-none border w-[100%] px-4 py-2 border-secondary-50 rounded-2xl bg-transparent text-secondary-400  "
            placeholder="UI UX"
            name="job"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, job: e.target.value })
            }
            value={inputs.job}
            id=""
          />
        </div>
        <div className="w-[80%] md:w-[50%]">
          <h2 className="font-medium text-sm mb-2">Company</h2>
          <input
            type="text"
            className="outline-none border w-[100%]  px-4 py-2 border-secondary-50 rounded-2xl bg-transparent text-secondary-400  "
            placeholder="EH"
            name="company"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputs({ ...inputs, company: e.target.value })
            }
            value={inputs.company}
            id=""
          />
        </div>
      </div>
      <h2 className="font-medium text-sm mt-4 mb-2">Bio</h2>
      <textarea
        rows={5}
        className="resize-none outline-none border w-[80%] md:w-[100%] px-4 py-2 border-secondary-50 rounded-2xl bg-transparent text-secondary-400  "
        placeholder="San Jose, California, USA"
        name="bio"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setInputs({ ...inputs, bio: e.target.value })
        }
        value={inputs.bio}
        id=""
      />
      <div className="my-4 mx-4 flex md:justify-end">
        <button
          type="submit"
          className="bg-primary-100 text-light-100  text-sm py-2 px-10 rounded-lg"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AboutForm;
