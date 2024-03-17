import React, { useEffect, useRef, useState } from 'react'
import { NotificationsData } from '../../constants/constants'
import Link from 'next/link'
import { NotificationType } from '@/types/notification'
import { NotificationIcon, NotificationIcon2 } from '@/icons'
interface NotificationModalProps {
  isOpened: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpened, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpened) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpened, onClose]);
  const [showNotiication,setNotitication]=useState([])
 
  return (
    <>
      {isOpened && (
        <div ref={modalRef} className="z-20 absolute top-6 right-0 w-[336px]  py-2.5 bg-light-100 rounded-[10px] border border-secondary-40 flex-col justify-start items-start gap-2.5 flex">
          <div className="flex-col justify-start items-center gap-4 flex w-full">
            <div className="justify-between border-b border-secondary-40 border-2 border-x-0 border-t-0 items-center flex w-full px-4 pb-[6px]">
              <div className="text-secondary-250 text-xs font-normal ">New Notification</div>
              <div className="justify-start items-start gap-2.5 flex">
                <div className="text-secondary-250 text-[10px] font-normal cursor-pointer">Mark as Read</div>
              </div>
            </div>
            <div className="w-full px-[20px] flex-col justify-start items-start gap-4 flex">
              {NotificationsData?NotificationsData?.slice(0.4).map((item:NotificationType, index:number) =>
              (
                <div key={index} className={`w-full cursor-pointer ${NotificationsData.length - 1 != index && "border-b border-secondary-40 border-2 border-x-0 border-t-0 pb-[20px] "} flex-col justify-start items-start gap-5 flex`}>
                  <div className="justify-start items-center gap-[11px] flex">
                    <div className="flex">
                      <div className="justify-start items-center pr-[27px] flex">
                        <NotificationIcon2/>
                      </div>
                      <div className="h-14 w-1   border-r border-secondary-40"></div>
                    </div>
                    <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="text-secondary-300 text-xs font-medium ">{item.title}</div>
                      <div className="text-danger-50 text-[10px] font-medium ">{item.subtitle}</div>
                      <div className="text-secondary-200 text-[10px] font-medium ">{item.time}</div>
                    </div>
                  </div>
                </div>
              )):null}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NotificationModal