"use client";
import React from "react";
import { LeadChartsOptions } from "../../../utils/charts";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

const LeadsChart = () => {
  return (
    <div className="w-[100%] md:w-[50%]">
      <p className="text-secondary-500   mt-6 text-[1.375rem] font-semibold mb-2">
        {" "}
        Leads Generated{" "}
      </p>

      <HighchartsReact highcharts={Highcharts} options={LeadChartsOptions()} />

    </div>
  );
};

export default LeadsChart;
