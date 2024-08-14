import React, { memo, useState, useCallback, ChangeEvent } from "react";
import SwitchButton from "../SwitchButton";
import { EditIcon, TrashIcon } from "@/icons";

interface CustomInputProps {
  label?: string;
  onChange: (value: string) => void;
  isToggle?: boolean;
  isInputArea?: boolean;
  isDelete?: boolean;
  handlerDelete?: () => void;
  isEdit?: boolean;
  handlerEdit?: () => void;
}

const InputField: React.FC<CustomInputProps> = memo(
  function InputField({
    label,
    onChange,
    isToggle,
    isInputArea,
    isDelete = false,
    handlerDelete = () => {},
    isEdit = false,
    handlerEdit = () => {},
  }) {
    const [inputValue, setInputValue] = useState("");
    const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);

    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
      },
      [onChange]
    );

    const handleToggleChange = useCallback(
      (checked: boolean) => {
        setIsSwitchEnabled(checked);
      },
      []
    );

    return (
      <div
        className={`flex outline-none border px-4 py-2 border-secondary-50 gap-[0.5rem] items-center rounded-2xl bg-transparent text-secondary-400    `}
      >
        {isInputArea ? (
          <textarea
            className={`flex-grow resize-none outline-none bg-transparent h-full `}
            placeholder={label}
            rows={4}
            value={inputValue}
            onChange={handleInputChange}
            disabled={!isSwitchEnabled && isToggle}
          />
        ) : (
          <input
            type="text"
            className={` w-full py-[.4rem] outline-none capitalize bg-transparent`}
            placeholder={label}
            value={inputValue}
            onChange={handleInputChange}
            disabled={!isSwitchEnabled && isToggle}
          />
        )}

        {isToggle && <SwitchButton isChecked={false} label="" onToggle={handleToggleChange} />}
        {isEdit && <EditIcon />}
        {isDelete && <TrashIcon />}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default memo(InputField);
