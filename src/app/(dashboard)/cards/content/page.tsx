"use client";
import DetailModal from "@/Components/content/DetailModal";
import LinkCard from "@/Components/content/LinkCard";
import Modal from "@/Components/content/Modal";
import Preview from "@/Components/dashboard/Preview";
import { socialLinks } from "@/constants/constants";
import { PlusIcon } from "@/icons";
import { useState } from "react";

const Page = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [subModal, setSubModal] = useState<boolean>(false);
  return (
    <div className="bg-light-100  w-[100%] flex flex-row mb-10 rounded-b-3xl mt-[1px] ">
      <div className="right data flex flex-col w-full  px-4 pt-2 pb-12 ">
        <div className="mt-4">
          <button className="bg-primary-100 text-base font-medium rounded-full py-2 px-10 relative z-10 text-light-100 ">Add Social </button>
          <button className="bg-secondary-100  text-base font-medium text-secondary-200  rounded-full py-2 px-10 absolute left-44">Add Content </button>
        </div>
        <div className="flex items-center justify-end my-8">
          <button onClick={() => setModal(true)} className="flex items-center gap-1 text-primary-100 border-primary-100 border text-base px-11 py-[6px] rounded-full">
            <PlusIcon />Add</button>
          {modal ? (<Modal setModal={setModal} setSubModal={setSubModal} />) : null}
          {subModal ? (<DetailModal setModal={setModal} setSubModal={setSubModal} />) : null}
        </div>
        <div className="flex flex-col gap-3">
          {socialLinks.map((link, idx) => (<LinkCard name={link.name} img={link.img} />))}
        </div>
        <p className="hidden md:block text-secondary-200  my-2 text-sm font-normal">Drag and drop the icons above to reorder them.</p>
        <h2 className="hidden md:block text-lg font-medium mt-2">Position</h2>
        <p className="hidden md:block text-secondary-200  text-sm font-normal">Display icons at</p>
        <div className="hidden md:flex items-center my-2">
          <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-primary-100 bg-secondary-100  border-secondary-300 "/>
          <label htmlFor="default-radio-1" className="ms-1 text-base font-normal">Top</label>
        </div>
        <div className="hidden md:flex items-center">
          <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 bg-secondary-50 "/>
          <label htmlFor="default-radio-2" className="ms-1 text-base font-normal">Bottom</label>
        </div>
      </div>
      <div className="w-[360px] text-center md:hidden">
        <Preview />
      </div>
    </div>
  );};

export default Page;