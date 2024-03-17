'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import OTPField from '@/Components/auth/otp/OTPField';

const Page: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));

  const handleClick = async () => {
    let GetOtp = otp.join('');
    console.log(GetOtp)
  };

  const handleAgainSend = async () => {
  };

  return (
    <div className='bg-light-100  h-screen w-screen flex items-center'>
      <div className='w-[520px] mx-auto my-0 '>
        <div className='text-start'>
          <div className='text-center flex justify-center flex-col items-center'>
            <Image src={'/assets/logos/logo.svg'} width={200} height={200} alt='' />
            <p className='text-secondary-250 text-[24px] font-[500] mt-8 mb-4 tracking-[0em] line-[29px] '>
              Check your email
            </p>
            <p className='text-secondary-250 text-[18px] mb-2 line-[22px] font-[500] tracking-[0em] '>
              We sent a verification code
            </p>
          </div>
          <p className='px-2 text-secondary-250 text-[18px]  font-[500] line-[22px] tracking-[0em] '>
            Check your email then enter the verification code below
          </p>
          <p className='px-2 text-secondary-250 mt-10 line-[22px] font-[500] text-[18px] tracking-[0em] '>
            Verification code
          </p>
        </div>
        <div className='mx-auto my-0 px-2'>
          <OTPField otp={otp} setOtp={setOtp} />
        </div>
        <button
          onClick={handleClick}
          disabled={otp[otp.length - 1] === ''}
          className={`${
            otp[otp.length - 1] === '' && 'opacity-35'
          } bg-primary-100 text-light-100  font-[500] text-[16px] mt-12 w-full px-6 rounded-full py-3`}
        >
          Verify Email
        </button>
        <div className='mt-8 flex flex-col items-center'>
          <p className='text-secondary-200  text-[16px] tracking-normal'>Didn’t receive code?</p>
          <span className='text-[16px] mt-2 font-[500]  '>
            <span onClick={handleAgainSend} className={`text-[16px] font-[500] cursor-pointer text-primary-100 `}>
              Request Again
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
