import LeadsChart from "./charts/LeadsChart"
import ViewsChart from "./charts/ViewsChart"
import RecentActivity from "./RecentActivity"
import TappedLinks from "./TappedLinks"

const InsightSection = () => {
  return (
    <div className='flex gap-3 mx-6 mb-4 '>
            <div className='w-[100%]'>
              <div className='flex flex-col md:flex-row w-[100%] gap-3'>
                  <ViewsChart/>
                  <LeadsChart/>
              </div>
              <div className='flex gap-3'>
                <div className='w-[50%] md:w-[100%]'>
                <TappedLinks/>
                </div>
                <div className='w-[50%] md:hidden'>
                  <RecentActivity/>
              </div>
              </div>
            </div>
             <div className='hidden md:block w-[40%]'>
                <RecentActivity/>
             </div>
        </div>
  )
}

export default InsightSection