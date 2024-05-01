
const TappedLinks = () => {
  return (
    <div className="w-[100%]">
        <p className="text-secondary-500   mt-6 text-[1.375rem] font-semibold mb-2"> Top Tapped Links </p>
        <div className='bg-light-100 rounded-3xl flex flex-col gap-4 md:gap-3 p-4 h-[450px] md:h-max w-[100%]'>
            {
                Array.from({length:3},(item,id)=>(
                    <div key={id} className="flex flex-col md:flex-row gap-4 md:gap-3">
                        <div className="flex items-center justify-between h-[50px] px-4 w-full md:w-[50%] bg-secondary-100  rounded-lg">
                            <div className="flex items-center gap-3 text-base font-medium">
                            <img src="/assets/social links/linkedin.png" alt={"linkedin"} className="h-[30px] w-[30px]" />
                            <p className="text-base font-medium">LinkedIn</p>
                            </div>
                            <p className="text-xl font-normal">12</p>
                        </div>
                        <div className="flex items-center justify-between h-[50px] px-4 w-full md:w-[50%] bg-secondary-100  rounded-lg">
                            <div className="flex items-center gap-3 text-base font-medium">
                            <img src="/assets/social links/instagram.png" alt={"linkedin"} className="h-[30px] w-[30px]" />
                            <p className="text-base font-medium">LinkedIn</p>
                            </div>
                            <p className="text-xl font-normal">09</p>
                        </div>
                    </div>
                ))
            }
        </div>
  </div>
  )
}

export default TappedLinks