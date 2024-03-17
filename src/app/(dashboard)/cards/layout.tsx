import Preview from "@/Components/dashboard/Preview";
import MyCardNavbar from "@/Components/Navbars/MyCardNavbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
    <>
       <div className=" flex gap-[2rem] items-start justify-between mx-6">
        <div className="w-[100%]">
          <MyCardNavbar/>
            {children}
           </div>
           <div className="hidden md:block md:w-[360px]">
        <Preview />
       </div>
      </div>
    </>
  );
};

export default layout;
