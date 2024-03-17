import Image from "next/image";

type DropDownProps = {
  onChange: (selectedValue: string) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  icon:  string ;
  options: string[];
  width?: number;
  height?: number;
};
const DropDown:React.FC<DropDownProps> = ({ onChange, isOpen, setIsOpen, icon, options, width, height }) => {

    return (
      <div className="relative  flex justify-center items-center text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="z-20 inline-flex justify-between w-full px-4 text-sm font-medium text-gray-700   rounded-md focus:outline-none items-center "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <Image src={icon} width={width} height={height} alt='' />
          <Image src={'/assets/svgs/Polygon.svg'} width={5} height={5} alt='' />
        </button>
  
        {isOpen && (
          <div
            className="top-[20px] origin-top-right z-20 absolute right-[-10px] mt-2 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              {options.map((option: string) => (
                <div
                  key={option}
                  onClick={() => (setIsOpen(false), onChange(option))}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary-100  hover:text-gray-900 cursor-pointer"
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

export default DropDown;