import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent, memo, useEffect } from "react";
import SwitchButton from "../SwitchButton";
import { Close, TrashIcon } from "@/icons"
import { v4 as uuidv4 } from 'uuid';
import DropDown from "./DropDown";
import { AddFieldType, FormData } from "@/types/addfield";
import Swal from 'sweetalert2'

const AddField: React.FC<AddFieldType> = ({ onAddField, onClose, EditField }) => {
  const [formData, setFormData] = useState<FormData>(EditField || {
    id: "uuid",
    label: "",
    fieldType: "Text",
    options: [""],
    isRequired: false,
    isEnabled: true,
    placeholder: "",
  });

  // console.log(Object.values(EditField)[1],'Object.values(EditField)[1]')

  const [placeholderCheck, setPlaceHolderCheck] = useState<boolean>(false)
  const validateFormData = (formData: FormData): boolean => {
    const { id, label, options, fieldType } = formData;
    if (fieldType == "Radio Buttons" || fieldType == "Select Dropdown") {
      if (options.some(option => !option.trim())) {
        return false;
      }
    } else {
      if (!label.trim()) {
        return false;
      }
    }
    return true;
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (name === "options") {
      const optionsArray: string[] = formData.options;
      const index = parseInt(e.target.getAttribute("data-index")!, 10);
      optionsArray[index] = value;
      setFormData((prevData) => ({
        ...prevData,
        options: optionsArray,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        // options:[],
        [name]: value,
      }));
    }
  };

  const handleAddOption = () => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      options: [...prevData.options, ""],
    }));
  };

  const handleRemoveOption = (index: number) => {
    const updatedOptions = [...formData.options as string[]];
    updatedOptions.splice(index, 1);
    setFormData((prevData: FormData) => ({
      ...prevData,
      options: updatedOptions,
    }));
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateFormData(formData);
    const newField = {
      ...formData,
      id: uuidv4(),
    };
    if (isValid) {
      if (Object.values(EditField)[0] == '') {
        onAddField(newField)
      } else {
        onAddField(formData)
      }
      onClose();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter option label",
        confirmButtonColor: "#396AFF"
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };
  useEffect(() => {
    if (EditField.fieldType == 'Text' || EditField.fieldType == 'Textarea') {
      setPlaceHolderCheck(true)
    } else {
      setPlaceHolderCheck(false)
    }
  }, [EditField])

  return (
    <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-dark-50 bg-opacity-50">
      <div className="bg-light-100 px-8 pb-8 pt-4 w-[423px] rounded-2xl relative">
        <div className="">
          <div className="text-primary-50 text-[20px] mb-4 font-bold ">
            {Object.values(EditField)[0] == '' ? "Add New Field" : "Update Field"}
          </div>
        </div>
        {/* <Image onClick={onClose} src={'/assets/svgs/cross.svg'}  width={15} height={15} alt="" /> */}
        <span onClick={onClose} className="absolute right-5 top-5 cursor-pointer"><Close/></span>
        <div className="container mx-auto ">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="label" className="block text-secondary-300 font-bold mb-2">
                Label:
              </label>
              <input
                type="text"
                id="label"
                name="label"
                value={formData.label}
                required
                onChange={handleChange}
                placeholder="Enter your label"
                className="border rounded-2xl border-secondary-200 outline-none w-full py-2 px-3"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="fieldType" className="block text-secondary-300 font-bold mb-2">
                Field Type:
              </label>
              <DropDown
                selected={formData.fieldType}
                options={[
                  "Text",
                  "Textarea",
                  "Radio Buttons",
                  "Select Dropdown",
                ]}
                setPlaceHolderCheck={setPlaceHolderCheck}
                placeholder="Enter your field type"
                formData={formData}
                setFormData={setFormData}
              />
            </div>
            {(formData.fieldType === "Radio Buttons" || formData.fieldType === "Select Dropdown") && (
              <div className="mb-4">
                <label htmlFor="options" className="block text-gray-700 font-bold mb-2">
                  Options:
                </label>
                {formData.options.map((option, index) => (
                  <div key={index} className="flex mb-2 items-center">
                    <input
                      type="text"
                      name="options"
                      value={option}
                      required
                      data-index={index}
                      onChange={handleChange}
                      className="border rounded-2xl border-secondary-200 outline-none w-full py-2 px-3 mr-2"
                    />
                    <TrashIcon
                      // onClick={() => handleRemoveOption(index)}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddOption}
                  className="bg-blue-500 text-primary-50 py-2 px-4 rounded"
                >
                  Add Option
                </button>
              </div>
            )}

            <div className="mb-4 flex flex-col text-secondary-300">

              <label htmlFor="isRequired" className="grid grid-cols-4 gap-2">
                Required
                <SwitchButton label="" isChecked={formData.isRequired} onToggle={(value) => setFormData({ ...formData, isRequired: value })} />
              </label>
              <label htmlFor="isEnabled" className="grid grid-cols-4 mt-2 gap-2">
                Enabled
                <SwitchButton label="" isChecked={formData.isEnabled} onToggle={(value) => setFormData({ ...formData, isEnabled: value })} />
              </label>
            </div>
            {placeholderCheck && <div className="mb-4">
              <label htmlFor="placeholder" className="block text-secondary-300 font-bold mb-2">
                Placeholder:
              </label>
              <input
                type="text"
                required
                id="placeholder"
                name="placeholder"
                value={formData.placeholder}
                onChange={handleChange}
                placeholder="placeholder"
                className="border rounded-2xl border-secondary-200 outline-none w-full py-2 px-3"
              />
            </div>}
            <button
              type="submit"
              className="flex justify-center bg-primary-100 text-light-100 h-35 p-2 pl-10 pr-10 rounded-2xl text-center font-inter font-medium text-base mt-5 w-full"
            >
              {Object.values(EditField)[0] == '' ? "Add Field" : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(AddField);
