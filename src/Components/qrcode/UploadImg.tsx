import { PictureIcon } from '@/icons';
import React, { useState, DragEvent, ChangeEvent, useRef, Dispatch, SetStateAction } from 'react';

interface UploadImgProps {
  getImage: Dispatch<SetStateAction<File | null | undefined>>;
  circle?: boolean;
  className?: string; 
  textClassName?: string;
  iconHeight?:string;
  iconWidth?:string;
  containerSize?: string; 
}

const UploadImg: React.FC<UploadImgProps> = ({
  getImage,
  circle = false,
  className = '',
  textClassName = '',
  iconHeight = '16', // Default size for the icon
  iconWidth = '16', // Default size for the icon
  containerSize = 'h-[96px] w-[96px] md:h-[140px] md:w-[140px] lg:h-[180px] lg:w-[180px]', // Default size for the container
}) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [uploaded, setUploaded] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

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
    getImage(file);
    setUploaded(true);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`${containerSize} flex flex-col items-center gap-2 justify-center rounded-full md:bg-secondary-650 bg-light-100`}
    >
      <PictureIcon  height={iconHeight} width={iconWidth}/>
      <p className={`text-[6px] md:text-[8px] lg:text-[10px] ${textClassName}`}>
        Drop your files here or{' '}
        <button
          onClick={() => ref.current && ref.current.click()}
          className='text-primary-100 font-semibold'
        >
          browse
        </button>
      </p>
      <small className='text-secondary-400 text-[6px] md:text-[8px] lg:text-[10px]'>Maximum size: 50MB</small>
      <input type='file' ref={ref} className='hidden' onChange={handleFileChange} />
    </div>
  );
};

export default UploadImg;
