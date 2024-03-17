"use client"
import { ViewChartsOptions } from "@/utils/charts"
import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts/highstock";

const ViewsChart = () => {
  return (
      <div className="w-[100%] md:w-[50%]">
        <p className="text-secondary-500   mt-6 text-[1.375rem] font-semibold mb-2"> Views Over Time </p>
        <HighchartsReact highcharts={Highcharts} options={ViewChartsOptions()} />
        
      </div>
  )
}

export default ViewsChart