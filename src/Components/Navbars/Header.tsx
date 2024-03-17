import React, { useState } from 'react'
import { NotificationIcon, SettingIcon } from "@/icons";
import NotificationModal from '../notification/NotificationModal';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false)
  const handlerModal = () => {
    setIsOpened(!isOpened)
  }
  const handlerCLose = () => {
    setIsOpened(false)
  }
  return (
    <div className="flex items-center justify-between mx-6 mt-6">
      <img src="/assets/img/brand.png" alt="brand" />
      <div className="flex items-center gap-6">
        <div className="hover:rotate-[30deg] transition-all cursor-pointer">
          <SettingIcon />
        </div>
        <div className="relative">
          <div onClick={handlerModal} className="hover:animate-spin-slow transition-all cursor-pointer">
            <NotificationIcon />
          </div>
          <NotificationModal isOpened={isOpened} onClose={handlerCLose} />
        </div>
        <img
          src="/assets/img/profile.jpeg"
          className="h-11 w-11 rounded-full bg-cover"
          alt="profile"
        />
      </div>
    </div>
  )
}

export default Header