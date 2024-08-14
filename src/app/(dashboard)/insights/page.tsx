"use client";
import DateChecker from "@/Components/DateRange/DateChecker";
import ActiveAccessories from "@/Components/insight/ActiveAccessories";
import TrafficTypeChart from "@/Components/insight/charts/TrafficTypeChart";
import ViewTypeChart from "@/Components/insight/charts/ViewTypeChart";
import InsightCard from "@/Components/insight/InsightCard";
import InsightSection from "@/Components/insight/InsightSection";
import { insightData } from "@/constants/constants";

const Page = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between mx-6">
        <p className="text-secondary-500   mt-6 text-[1.375rem] font-bold">
          {" "}
          Insight{" "}
        </p>
        <DateChecker />
      </div>
      <div className="flex items-center justify-between md:justify-normal px-2 rounded-lg mx-6 mt-4 gap-0 md:gap-3 lg:gap-5 bg-light-100  md:bg-transparent">
        {insightData?.map((data, idx) => (
          <>
            <InsightCard
              key={idx}
              title={data?.title}
              image={data?.icon}
              value={data?.value}
            />
            {idx === 3 ? null : (
              <div className="sm:bg-secondary-50 w-[1px] h-[59px] mx-2 md:hidden "></div>
            )}
          </>
        ))}
      </div>
      <InsightSection />
      <div className="flex gap-3 mx-6 mb-8">
        <TrafficTypeChart />
        <div className="hidden md:block w-[40%]">
          <ActiveAccessories />
        </div>
        <ViewTypeChart />
      </div>
      <div className="block md:hidden mx-6 mb-8">
        <ActiveAccessories />
      </div>
    </div>
  );
};

export default Page;
