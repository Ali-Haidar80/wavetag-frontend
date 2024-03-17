import { PolygonUp } from "@/icons"
import { InsightCardTypes } from "@/types/insight"

const InsightCard = ({title,image,value}:InsightCardTypes) => {
  return (
    <div className="bg-light-100 flex items-center gap-1 md:gap-2 px-0 md:px-2 lg:px-4 2xl:h-[160px] md:h-[110px] h-[90px] xl:w-[350px] 2xl:xl:w-[690px] md:w-[300px] rounded-none md:rounded-xl lg:rounded-3xl">
        <img className="h-[40px] md:h-[55px] lg:h-[70px] w-[40px] md:w-[55px] lg:w-[70px]" src={image} alt={title} />
        <div className="m-0 p-0">
            <h4 className="text-[13px] lg:text-base font-normal text-secondary-400   mb-1">{title}</h4>
            <h3 className="flex items-center md:gap-[6px]">
                <span className="text-lg lg:text-2xl font-semibold">{value}</span>
            <p className="flex items-center gap-[1px] text-[13px] font-normal text-info-100">
                <PolygonUp/> 
                <span className="mt-1">100%</span>
            </p>
            </h3>
        </div>
    </div>
  )
}

export default InsightCard