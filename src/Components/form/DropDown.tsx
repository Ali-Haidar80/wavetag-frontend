import { DropDownProps } from "@/types/addfield";
import Image from "next/image";
import { memo, useCallback, useEffect, useRef, useState } from "react";


const DropDown: React.FC<DropDownProps> = ({ selected,setPlaceHolderCheck, setFormData, formData, options }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event:MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  const [isOpen, setIsOpen] = useState(false)

  
  const handlerChanger = useCallback((option: string) => {
    if (option === "Radio Buttons" || option === "Select Dropdown") {
      setPlaceHolderCheck(false);
    } else {
      setPlaceHolderCheck(true);
    }
    setIsOpen(false);
    setFormData({ ...formData, fieldType: option });
  }, [formData, setFormData, setPlaceHolderCheck]);

  return (
    <div className="relative w-full flex justify-center items-center text-left cursor-pointer" >
      <div
                onClick={() => setIsOpen(!isOpen)}
       className="border flex  border-secondary-200  rounded-2xl px-4 w-full cursor-pointer">
        <input

          type="button"
          className="z-20 flex justify-between cursor-pointer w-full  text-sm font-medium py-3   focus:outline-none items-center "
          value={selected}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        />
        <Image src={'/assets/svgs/arrow-down.svg'} className={`cursor-pointer ${isOpen && "rotate-180"}`} width={15} height={15} alt='' />
      </div>
      {isOpen && (
        <div
        
          className="top-[40px] origin-top-right w-full z-20 absolute  left-0  mt-2 rounded-2xl drop-shadow-xl  bg-light-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1 w-full" role="none">
            {options.map((option: string) => (
              <div
                key={option}
                onClick={() => handlerChanger(option)}
                className="block px-4 py-2 text-sm text-dark-70  hover:bg-secondary-100  hover:text-secondary-300 cursor-pointer"
                role="menuitem"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(DropDown);