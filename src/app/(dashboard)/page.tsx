import { PenIcon, PlusIcon, ShareIcon } from "@/icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-6 mt-6 ">
    <div className="flex items-center gap-2">
      <h2 className="text-dark-900 font-medium text-2xl" >My cards</h2> 
      <Link href={'/cards/about'} className="add-card bg-secondary-50 p-3 rounded-full">
        <PlusIcon/>
      </Link>
    </div>
    <div className="bg-light-100 h-[40vh] w-[30%] rounded-2xl mt-6 pt-2">
      <div className="custom-gradient relative rounded-2xl h-[18vh] w-[96%] mx-auto">
        <div className="flex items-center justify-center bg-secondary-50 border-light-100 border-2 rounded-full h-[4.5rem] w-[4.5rem] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[5%]">
          <img src="/assets/img/user.png" alt="" />
        </div>
      </div>
      <p className="text-dark-50 font-medium text-base text-center mt-6">usama@erysonhandel.com</p>
      <div className="mt-5 flex gap-2 items-center justify-center">
        <Link href={'/cards/about'} className="flex items-center gap-2 text-sm border border-secondary-50 px-4 py-[6px] rounded-full"><PenIcon/>Edit Card</Link>
        <button className="flex items-center gap-2 text-sm bg-primary-100 text-light-100 px-4 py-[6px] rounded-full"><ShareIcon/>Share Card</button>
      </div>
    </div>
    </div>
  );
}
