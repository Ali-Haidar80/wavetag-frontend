import React, { FC, useEffect, useRef, useState, ChangeEvent, KeyboardEvent } from "react";
import './otp.css';

interface OTPFieldProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

const OTPField: FC<OTPFieldProps> = ({ otp, setOtp }: OTPFieldProps): JSX.Element => {
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerOnChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[activeOTPIndex] = value.substring(value.length - 1);

    if (!value) {
      setActiveOTPIndex((prevIndex :number) => prevIndex - 1);
    } else {
      setActiveOTPIndex((prevIndex :number) => prevIndex + 1);
    }

    setOtp(newOTP);
  };

  const handlerKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>, index: number): void => {
    setActiveOTPIndex(index);

    if (key === 'Backspace') {
      setActiveOTPIndex((prevIndex :number) => prevIndex - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div className="flex justify-center items-center flex-wrap space-x-4">
      {otp.map((_:string, index:number):JSX.Element => (
        <React.Fragment key={index}>
          <input
            ref={index === activeOTPIndex ? inputRef : null}
            type="number"
            onKeyDown={(e) => handlerKeyDown(e, index)}
            onChange={handlerOnChange}
            value={otp[index]}
            className="w-[70px] text-[36px] p-3 focus:border-b-2 border-b-2 border-secondary-80 outline-none text-center font-[510] spin-button-none focus:border-primary-100 focus:bg-light-100  focus:text-primary-100 text-primary-100 transition"
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default OTPField;
