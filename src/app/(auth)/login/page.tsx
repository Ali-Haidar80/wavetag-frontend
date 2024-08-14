import AuthRightSection from "@/Components/auth/AuthRightSection";
import LoginForm from "@/Components/auth/LoginForm";
import Image from "next/image";

const Login = () => {

  return (
    <div className="w-full xl:h-[100vh] flex items-center justify-center mt-6">
      <div className="relative w-[80%] flex z-10 md:flex-col xl:flex-row">
       <>
       <AuthRightSection />
        <Image
          src="/assets/logos/phone.png"
          className="absolute md:block hidden -bottom-20 xl:-bottom-16 top-auto xl:top-auto py-4 left-[38%] xl:left-[36%] h-[30%] md:right-0 md:top-[22rem] md:left-auto md:scale-50"
          alt=""
          width={100}
          height={100}
        />
       </>
       <>
      <LoginForm />
      <div className="absolute xl:-bottom-[7rem] xl:top-auto xl:-right-[0.5%] -rotate-[30deg] hidden md:flex items-center justify-center bg-primary-100 rounded-md -z-10  md:h-[100px] md:w-[200px] lg:h-[100px] lg:w-[200px] xl:w-[274px] xl:h-[155px] lg:-bottom-[70px] lg:-right-[3.5%] md:-bottom-[70px] md:-right-[3.5%]">
        <Image src="/assets/logos/logo.png" alt="wavetag_logo" width={60}
          height={60} />
      </div>
       </>
      </div>
    </div>
  );
};
export default Login;