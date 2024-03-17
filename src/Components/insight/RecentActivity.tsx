
const RecentActivity = () => {
  return (
    <div className="w-[100%]">
    <p className="text-secondary-500   mt-6 text-[1.375rem] font-semibold mb-2"> Recent Activity </p>
    <div className='bg-light-100 rounded-3xl w-[100%] h-[450px] md:h-[550px] py-2'>
        <div className="overflow-y-auto w-[90%] h-[435px] md:h-[535px] mx-4">
            {
                Array.from({length:16},()=>(
            <div className="flex items-center gap-1 my-3">
            <img className="w-[50px] h-[50px] rounded-full mr-1" src="/assets/insights/user.jpeg" alt="user" />
            <h2 className="text-base font-medium">John Doe</h2>
            <p className="text-xs font-normal text-secondary-400  ">Connected with Julie Doe </p>
            </div>
                ))
            }
        </div>
    </div>
  </div>  )
}

export default RecentActivity