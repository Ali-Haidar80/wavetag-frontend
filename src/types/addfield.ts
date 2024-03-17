export type FormData = {
  label: string;
  id: string;
  fieldType: string;
  options: string[];
  isRequired: boolean;
  isEnabled: boolean;
  placeholder: string;
}

export type AddFieldType = {
  onAddField: (event: FormData) => void;
  onClose: () => void;
  EditField: FormData;
}

export type DropDownProps = {
  selected: string;
  options: string[];
  placeholder: string;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  setPlaceHolderCheck: React.Dispatch<React.SetStateAction<any>>;
  formData: FormData;
}

