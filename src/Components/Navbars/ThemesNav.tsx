"use client";
import { ThemesNavLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'

const ThemesNav = () => {
const pathname = usePathname();
return (
    <div className="">
        <div className="bg-light-100 border-y border-y-secondary-70 flex items-center justify-start gap-6 lg:px-4 px-6 xl:px-10">
        {ThemesNavLinks.map((link, idx) => (
        <Link
            key={idx}
            href={link.path}
            className={`${pathname === link.path ? "active" : ""} flex flex-col py-3`}
        >
            <h3 className="text-xs lg:text-[14px] pt-2 pb-1 lg:px-2 capitalize text-secondary-400  ">
              {link.name}
            </h3>

            <div className="subtab hidden h-[6px] w-full rounded-[18px] absolute -bottom-[3px] bg-primary-100 "></div>
        </Link>
        ))}
        </div>
    </div>)
}

export default ThemesNav