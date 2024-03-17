import ThemesNav from "@/Components/Navbars/ThemesNav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
   return (
    <>
       <ThemesNav />
      <div className="">{children}</div>
    </>
  );
};

export default layout;
