import React from "react";

const Integrations = () => {
  return (
    <div className="relative flex justify-between px-6 mx-6" >
      <div className=" mt-14">
      
          <h1
            className="text-dark-70 font-semibold text-[32px] xl:text-[55px] lg:text-[55px]"
          >
            Stay tune
          </h1>
          <p
            className="xl:text-[24px] lg:text-[24px] text-[16px] text-dark-70 xl:mt-[30px] lg:mt-[30px] mt-2"
          >
            We are bringing some exciting third party integration<br className=""/>very soon.....
          </p>
          <img
            src="/assets/svgs/integration_dir.svg"
            alt="Image"
            className="mb-2 mt-12 w-[60%] xl:w-auto lg:w-auto"
          />
      
      </div>

      <div className=" mt-10">
        <img
          src="/assets/img/integration_icons.png"
          alt="Image"
          className="mb-2 hidden lg:block xl:block 2xl:block" 
        />
        <img
          src="/assets/logos/integration.svg"
          alt="Image"
          className="lg:hidden xl:hidden 2xl:hidden block mb-2 absolute w-[55%] top-[26%] right-0"
        />
      </div>
    </div>
  );
};

export default Integrations;
