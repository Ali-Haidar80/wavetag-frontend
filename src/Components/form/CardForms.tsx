"use client";
import React, { useCallback, useMemo, useState } from "react";
import SwitchButton from "../SwitchButton";
import InputField from "./InputField";
import AddField from "./AddField";
import { FormData } from "@/types/addfield";
import { Disclaimer } from "@/icons";


const CardForms: React.FC = () => {
  const cardData = useMemo(() => {
    return [
      {
        id: '1',
        label: 'Full Name',
        fieldType: 'Text',
        options: [''],
        isRequired: false,
        isEnabled: true,
        placeholder: '',
      },
      {
        id: '2',
        label: 'Last Name',
        fieldType: 'Text',
        options: [''],
        isRequired: false,
        isEnabled: true,
        placeholder: '',
      },
      {
        id: '3',
        label: 'Phone Number',
        fieldType: 'Text',
        options: [''],
        isRequired: false,
        isEnabled: true,
        placeholder: '',
      },
      {
        id: '4',
        label: 'Job Title',
        fieldType: 'Text',
        options: [''],
        isRequired: false,
        isEnabled: true,
        placeholder: '',
      },
      {
        id: '5',
        label: 'Company',
        fieldType: 'Text',
        options: [''],
        isRequired: false,
        isEnabled: true,
        placeholder: '',
      },
      {
        id: '6',
        label: 'Note',
        fieldType: 'Text',
        options: [''],
        isRequired: false,
        isEnabled: true,
        placeholder: '',
      },
    ];
  }, []);
  const [fields, setFields] = useState<FormData[]>(cardData);
  const [isLeadCaptureEnabled, setLeadCaptureEnabled] = useState(false);
  const [EditField, setEditField] = useState<FormData>({
    id: "uuid12",
    label: "",
    fieldType: "Text",
    options: [],
    isRequired: false,
    isEnabled: true,
    placeholder: "",
  })


  const handleToggleChange = useCallback((checked: boolean) => {
    console.log(`Switch toggled: ${checked}`);

  }, [])
  const handleToggleAddField = useCallback(() => {
    setEditField({
      id: "", // Add the generated id to the field
      label: "",
      fieldType: "Text",
      options: [""],
      isRequired: false,
      isEnabled: true,
      placeholder: "",
    })
    setLeadCaptureEnabled(true);
  }, [isLeadCaptureEnabled]);

  const addField = (field: FormData) => {
    if (Object.values(EditField)[0] == '') {
      setFields((prevFields) => [...prevFields, field]);
    } else {
      setFields((prevFields) => {
        const updatedFields = [...prevFields];
        const index = updatedFields.findIndex((item) => item.id === field.id);
        if (index !== -1) {
          updatedFields[index] = { ...updatedFields[index], ...field };
        }
        return updatedFields;
      });
    }
  };
  const handlerSubmit = () => {
    console.log(fields, 'fields')
  }

  const onClose = useCallback(() => {
    setLeadCaptureEnabled(false)
  }, [isLeadCaptureEnabled])

  const handlerDelete = useCallback((item: FormData) => {
    const updatedFields = fields.filter((field) => field.id !== item.id);
    setFields(updatedFields);
  }, [fields, setFields]);

  const handlerEdit = useCallback((item: FormData) => {
    setEditField(item)
    setLeadCaptureEnabled(true);
  }, [])
  

  const handlerChanger =useCallback((event:any)=>{

  },[])
  return (
    <div className="mt-5">
      <SwitchButton isChecked={false} label="Lead Capture:" onToggle={handleToggleChange} />
      {isLeadCaptureEnabled && <AddField EditField={EditField} onClose={onClose} onAddField={addField} />}
      <div
        className="text-secondary-400 mb-2 font-inter font-medium text-base mt-5"
      >
        Form Header
      </div>
        <div className="w-[90%] md:w-[60%]"> 
        <InputField
          label="Share your info back with Moheez Gul"
          onChange={handlerChanger}
        />
        </div>
      <div className="flex justify-between items-center mt-3">
        <h6
          className="text-secondary-400 font-inter font-medium text-base mt-5"
        >
          Input Fields
        </h6>
        <button onClick={handleToggleAddField} className="text-primary-100 border-primary-100 border font-medium mr-4 text-base px-11 py-[6px] rounded-full">
          Add Field
        </button>
      </div>
      <div className="flex flex-wrap mt-1">
        {fields.map((field, index) => {
          return <div key={index} className="w-full md:w-1/2 p-2 pl-0">
            <InputField isEdit={true} isDelete={true} 
              handlerDelete={() => handlerDelete(field)}
              handlerEdit={() =>handlerEdit(field)}
              {...field} isToggle={true} onChange={handlerChanger} />
          </div>
        })}
      </div>
      <div className="mt-3">
        <h6
          className="text-secondary-400 flex items-center gap-3 font-inter font-medium text-base mb-3"
        >
          Form Disclaimer <Disclaimer/>
        </h6>
        <InputField
          label="Share your info back with Moheez Gul"
          onChange={handlerChanger}
          isInputArea={true}
        />
        <button
          onClick={handlerSubmit}
          className="bg-primary-100 text-light-100 h-35 p-2 pl-10 pr-10 rounded-lg text-center font-inter font-medium text-base mt-5 flex md:ml-auto"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default CardForms;

