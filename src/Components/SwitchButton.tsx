"use client";
import React, { memo, useCallback, useState } from "react";
import { usePathname } from "next/navigation";
interface SwitchButtonProps {
  isChecked: boolean;
  label: string;
  onToggle: (checked: boolean) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ isChecked = false, label, onToggle }) => {
  const pathname = usePathname();
  const [checked, setChecked] = useState(isChecked);

  const handleToggle = useCallback(() => {
    const newChecked = !checked;
    setChecked(newChecked);
    onToggle(newChecked);
  }, [checked, onToggle]);

  return (
    <div className="flex items-center">
      <label className="flex items-center cursor-pointer">
        {label && pathname.includes('forms') ? (
          <div className="text-gray-900 font-inter font-semibold text-base mr-3">
            {label}
          </div>
        ) : (
          ""
        )}
      </label>
      <label className="relative inline-flex items-center cursor-pointer">
        <input checked={checked} onChange={handleToggle} type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-secondary-70  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-light-100 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-light-100 after:border-secondary-50 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-info-100"></div>
      </label>
      <label className="flex items-center cursor-pointer">
        {label && !pathname.includes('forms') ? (
          <label className="block ml-4 text-dark-90 text-base font-normal">{label}</label>
        ) : (
          ""
        )}
      </label>
    </div>
  );
};

export default memo(SwitchButton);
