"use client";
import { CardNavLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'

const MyCardNavbar = () => {
    const pathname = usePathname();
  return (
<div className=" mt-6">
          <p className="text-secondary-500   text-[1.375rem] font-semibold">Edit</p>
          <div className="bg-light-100 rounded-t-xl mt-2 flex items-center justify-start gap-6 px-4 xl:px-10">
            {CardNavLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.path}
                className={`${
                  pathname.includes(link.path) && "active"
                } flex flex-col py-3`}
              >
                <h3 className="text-xs lg:text-base font-medium lg:px-2 capitalize text-secondary-400  ">
                  {link.name}
                </h3>

                <div className="subtab hidden h-[6px] w-full rounded-[18px] absolute -bottom-[3px] bg-primary-100 "></div>
              </Link>
            ))}
          </div>
        </div>  )
}

export default MyCardNavbar