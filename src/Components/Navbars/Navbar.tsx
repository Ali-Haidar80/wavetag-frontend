import React from 'react'
import { Links } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DownloadIcon } from '@/icons';

const Navbar = () => {
    const pathname = usePathname();

  return (
    <div className="bg-light-100 mx-6 rounded-2xl mt-6 flex  lg:items-center justify-center md:justify-start gap-4 md:gap-6  md:px-6 lg:px-6">
    {Links.map((link, idx) => (
      <Link
        key={idx}
        href={link.path}
        className={`${
          pathname.includes(link.path) && "active"
        } flex flex-col py-5`}
      >
        <div className="icons flex items-center gap-1 md:gap-[6px]">
          {link.icon}
          <h2 className="text-sm md:text-sm font-medium capitalize text-secondary-400  ">
            {link.name}
          </h2>
        </div>

        <div className="tab hidden h-[10px] w-full rounded-[18px] absolute -bottom-[5px] bg-primary-100 "></div>
      </Link>
    ))}
    <div className='flex md:hidden items-center gap-2'>
    <span className='block md:hidden h-[55px] w-[2px] bg-secondary-50 '></span>
     <Link href={""} className="flex items-center gap-1">
     <h2 className='text-primary-100 text-[11px] md:text-sm'>Download App</h2>
      <DownloadIcon/>
     </Link>
    </div>
  </div>
  )
}

export default Navbar