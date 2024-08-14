import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-light-100  w-[100%] flex flex-col items-center justify-center py-[9.5rem] mb-10 rounded-b-3xl mt-[1px]">
      <Image width={200}
          height={200} src="/assets/img/qr.png" alt="" />
      <h5 className="font-medium text-lg text-dark-80 mt-4">Activate accessories to Moheez Gul's profile</h5>
      <h6 className="text-center text-xs font-medium w-1/3 mt-2">Scan the PopCode with your phone to launch the activation flow</h6>
      <h6 className="text-center text-xs font-medium mt-2">Use your app to activate accessories.</h6>
    </div>  
  )
};

export default Page;
