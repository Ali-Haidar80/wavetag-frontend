import AuthCarousel from "./AuthCarousel";

const AuthRightSection = () => {
  return (

      <div className="overflow-hidden relative hidden md:flex flex-col justify-center items-center py-6 xl:w-[60%] md:w-full bg-primary-100 md:rounded-t-2xl xl:rounded-tl-2xl xl:rounded-bl-2xl">
        <div className="h-full w-full">
            <AuthCarousel/>
        </div>
        <div className="-rotate-[45deg] backdrop-blur-[12px] box-shadow -left-[3.5%] top-[16%] absolute flex items-center justify-center bg-primary z-10 w-[120px] h-[120px] rounded-full">
          <img
            src="/assets/logos/logo.png"
            className=""
            width={61}
            height={16}
            alt="wavetag_logo"
          />
        </div>
      </div>
      

  );
};

export default AuthRightSection;