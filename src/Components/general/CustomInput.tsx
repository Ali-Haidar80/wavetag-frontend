import React from 'react'

type Props = {
  label: string,
  type: string,
  placeholder: string,
  onChange: any, 
  value: any,
}
const CustomInput: React.FC<Props> = ({ label, type, placeholder, onChange, value }) => {
return (
  <div className="mb-4">
    <label className="block font-medium text-sm mb-2">{label}</label>
    {type === "textarea" ? (
      <textarea
        className="outline-none w-full border px-4 py-2 border-secondary-70 rounded-xl bg-transparent text-secondary-400   placeholder:text-secondary-400  "
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        id="" cols={30} rows={6} />
    ) : (
      <input
        type={type}
        className="outline-none w-full border px-4 py-2 border-secondary-70 rounded-xl bg-transparent text-secondary-400   placeholder:text-secondary-400  "
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    )}
  </div>
)
}

export default CustomInput