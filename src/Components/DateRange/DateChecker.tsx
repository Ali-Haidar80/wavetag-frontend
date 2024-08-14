"use client";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useEffect, useRef, useState } from "react";
import { addDays } from "date-fns";
import { Calendar } from "@/icons";
import { dateRangeType } from "@/types/DatePickerType";
function DateChecker() {
  const [dates, setDates] = useState<dateRangeType[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const datePickerRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [show, setShow] = useState(false);

  //#et to do type for dates
  const updateDates = (dates: dateRangeType) => {
    setDates([dates]);
  };

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (
        datePickerRef?.current &&
        !datePickerRef?.current?.contains(e?.target as Node)
      ) {
        setShow(false);
      }
    };
    // Bind the event listener
    document?.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document?.removeEventListener("mousedown", handleClickOutside);
    };
  }, [datePickerRef]);
  return (
    <div className="" ref={datePickerRef}>
      <div
        className="bg-light-100  flex items-center gap-2 mt-6 py-1 px-3 rounded-[10px] cursor-pointer overflow-x-auto"
        onClick={(e) => {
          setShow(!show);
        }}
      >
        <div>
          <Calendar />
        </div>
        <p className="text-base md:text-lg text-secondary-400   font-extrabold">
          Last 30 days{" "}
          <span className="font-medium ml-1"> Dec 6, 2023 - Jan 4, 2024</span>
        </p>
      </div>
      {show && (
        <div className="relative ">
          <div
            className={`absolute top-0 right-0 m-auto w-[100%] sm:w-auto z-20 overflow-auto`}
          >
            <DateRangePicker
              onChange={(item) => {
                updateDates(item?.selection);
              }}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              direction="horizontal"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DateChecker;
