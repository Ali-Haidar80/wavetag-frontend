import { CheckIcon } from "@/icons"

type Props = {
    type: string,
    popular?: boolean,
    active: string,
  }
  
  const Package: React.FC<Props> = ({ type, popular, active }) => {
    return (
        <div className="bg-primary-50 rounded-[30px] ">
        {popular && (
            <h3 className='lg:text-lg uppercase font-semibold p-3 text-center text-light-100'>Most Popular</h3>
            )}
            <div className={`max-w-[280px] flex-1 rounded-[30px] text-light-100   ${type === "Free" ? "bg-info-100/60" : type === "Premium" ? "bg-primary-100" : type === "Business" ? "bg-danger-200/60" : "bg-info-100"}`}>
        <div className={`max-w-[285px] min-w-[220px] flex-1 rounded-[30px] text-light-100  py-6 px-5 lg:px-6 ${type === "Free" ? "bg-info-100" : type === "Premium" ? "bg-primary" : type === "Business" ? "bg-danger-200" : "bg-info-100"}`}>
          <h3 className='lg:text-2xl text-lg font-semibold'>{type}</h3>
          <h2 className='mt-2 lg:text-3xl text-xl font-bold'>
            ${type === "Free" ? "0"
                : type === "Premium" || type === "Business"
                ? active === "monthly" ? "29.99"
                : "299.99" : "0"}
            <span className='font-light'>/{active === "monthly" ? "mo" : "yr"}</span>
          </h2>
          <div className='flex lg:min-h-[230px] min-h-[200px] flex-col gap-5 mt-8 mb-8'>
            <div className="flex items-center text-[15px] lg:gap-3 gap-1">
              <CheckIcon className="w-4 h-4 lg:w-5 lg:h-5" />
              <p className='font-light text-sm lg:text-base'>Voice messages anywhere</p>
            </div>
            <div className="flex items-center text-[15px] lg:gap-3 gap-1">
              <CheckIcon className="w-4 h-4 lg:w-5 lg:h-5" />
              <p className='font-light text-sm lg:text-base'>Voice messages anywhere</p>
            </div>
            <div className="flex items-center text-[15px] lg:gap-3 gap-1">
              <CheckIcon className="w-4 h-4 lg:w-5 lg:h-5" />
              <p className='font-light text-sm lg:text-base'>Voice messages anywhere</p>
            </div>
          </div>
          <div className={`text-center font-bold ${type === "Premium" && "mb-6 lg:mb-0"} `}>
            <button className="bg-light-100  text-dark-50  py-2.5 px-8 w-full rounded-lg">
              {type === "Free" ? "Already using" : "Buy Now"}
            </button>
          </div>
  
        </div>
      </div>
      </div>

    )
  }
  export default Package