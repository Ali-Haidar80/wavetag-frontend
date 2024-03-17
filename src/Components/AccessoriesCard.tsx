import { CardTypes } from "@/types/card"
import Image from "next/image"

const AccessoriesCard: React.FC<CardTypes> = ({ icon, title, subtitle, btntext, iconWidth, iconHeight }) => {
  return (
    <div className="flex justify-center flex-col items-center">
        <Image src={icon} width={iconWidth} height={iconHeight} alt='' />
        <h2 className='text-center mt-1 xl:text-[25px] lg:text-[25px] text-[20px] font-medium text-dark-80'>{title}</h2>
        <p className='mt-1  text-center text-[16px] font-normal whitespace-pre text-dark-90'>{subtitle}</p>
        <button className="mt-[35px] bg-primary-100 text-light-100 lg:text-[15px] text-[14px] xl:text-[15px]  justify-center py-[11px] px-[45px] font-medium rounded-[9px]">{btntext}</button>
    </div>
  )
}

export default AccessoriesCard
