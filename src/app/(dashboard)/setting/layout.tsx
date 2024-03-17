import MyCardNavbar from "@/Components/Navbars/MyCardNavbar";
import SettingNav from "@/Components/Navbars/SettingNav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
    <>
       <SettingNav />
      <div className="mx-6">{children}</div>
    </>
  );
};

export default layout;
