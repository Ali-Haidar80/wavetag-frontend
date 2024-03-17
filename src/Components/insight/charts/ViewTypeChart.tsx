"use client";
import { Viewoptions } from "@/utils/charts";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import variablePie from 'highcharts/modules/variable-pie';

variablePie(Highcharts)
const ViewTypeChart = () => {
  return (
    <div className="w-[50%] md:w-[30%]">
      <p className="text-secondary-500   mt-6 text-[1.375rem] font-semibold mb-2">
        View Type
      </p>
      <div className="bg-light-100 rounded-3xl flex items-center justify-center w-[100%] h-[176px] md:h-[235px]">
       <p className="flex flex-col gap-3 mx-3">
          <p className="flex items-center gap-2"><div className="w-[25px] h-[25px] bg-primary-100 rounded-full" /><span className="text-[12px] font-medium">Direct On</span><span className="text-[12px] font-medium text-secondary-400  ">50%</span></p>
          <p className="flex items-center gap-2"><div className="w-[25px] h-[25px] bg-primary-200 rounded-full" /><span className="text-[12px] font-medium">Direct Off</span><span className="text-[12px] font-medium text-secondary-400  ">18%</span></p>
          <p className="flex items-center gap-2"><div className="w-[25px] h-[25px] bg-danger-100 rounded-full" /><span className="text-[12px] font-medium">Share</span><span className="text-[12px] font-medium text-secondary-400  ">100%</span></p>
        </p>
        <HighchartsReact
          highcharts={Highcharts}
          options={Viewoptions}
          constructorType={'chart'}
        />
      </div>
    </div>
  );
};

export default ViewTypeChart;
