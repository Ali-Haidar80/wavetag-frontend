import { PictureIcon } from '@/icons';
import { AboutInputTypes } from '@/types/about';
import React, { useState, DragEvent, ChangeEvent, useRef, Dispatch, SetStateAction } from 'react';

const UploadProfilePic:React.FC<{inputs: AboutInputTypes,setInputs: Dispatch<SetStateAction<AboutInputTypes>>}> = ({inputs, setInputs}) => {

    const [dragging, setDragging] = useState<boolean>(false);
    const [uploaded, setUploaded] = useState<boolean>(false);
const ref = useRef<HTMLInputElement>(null)
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files[0];
    handleFiles(files);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = e.target.files[0];
      handleFiles(files);
    }
  };

  const handleFiles = (file: File) => {
    setInputs({...inputs,profilePic: file})
    setUploaded(true)
  };

  return (
 <>
   
    <div onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop} className='h-[96px] w-[96px] md:h-[140px] md:w-[140px] flex flex-col items-center gap-2 justify-center rounded-full bg-secondary-90 '>
     <PictureIcon/>
     <p className='text-[6px] md:text-[8px]'>Drop your files here or <button onClick={()=>ref.current && ref.current.click()}  className='text-primary-100 font-semibold'>browse</button></p>
     {
        uploaded ?  <small className='text-primary-200 text-[8px] md:text-[10px]'>{inputs.profilePic?.name}</small>:
        <small className='text-secondary-400   text-[6px] md:text-[8px]'>Maximum size: 50MB</small>
    }
     <input type="file" ref={ref} className='hidden' onChange={handleFileChange} />
 </div>
 </>
  );
};

export default UploadProfilePic;
