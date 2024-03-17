import { ChevronLeft, Close, Share } from "@/icons";
import { Dispatch, SetStateAction } from "react";

const DetailModal = ({setModal, setSubModal}: {setModal: Dispatch<SetStateAction<boolean>>; setSubModal: Dispatch<SetStateAction<boolean>>;}) => {
  function HandleModal() {
    setSubModal(false);
    setModal(true);
  }
  function CloseModal() {
    setSubModal(false);
    setModal(false);
  }
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-secondary-50 bg-opacity-70 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex h-full w-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="flex-col transform flex p-4 rounded-3xl bg-light-100 text-left shadow-xl transition-all  w-[80vw] md:w-[65vw]">
            <div className="flex items-center justify-between px-4 pt-3 mb-1">
              <p onClick={HandleModal} className="font-medium text-base text-secondary-200  flex items-center cursor-pointer">
                <ChevronLeft /> Back </p>
              <span onClick={CloseModal} className="cursor-pointer"><Close /></span>
            </div>
            <div className="overflow-y-auto overflow-x-hidden">
            <img className="h-[70px] w-[70px] mx-4 mt-16 mb-10" src="/assets/social links/instagram.png" alt="social links"/>
            <label className="relative inline-flex items-center gap-2 mx-4 text-secondary-300  text-base font-medium cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-5 bg-secondary-70  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-light-100 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-light-100 after:border-secondary-50 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-info-100 bg-gray"></div>
              HighLight
            </label>
            <div className="w-[75vw] md:w-[60vw] mx-4 mt-6">
          <h2 className="font-medium text-base mb-2 text-secondary-300 ">Instagram username*</h2>
          <input type="text" className="outline-none w-[100%] px-4 py-[10px] rounded-xl bg-secondary-100  text-secondary-300 " placeholder="Instagram username" name=""/>
        </div>
            <div className="w-[75vw] md:w-[60vw] mx-4 mt-6">
          <h2 className="font-medium text-base mb-2 text-secondary-300 ">Link title</h2>
          <input type="text" className="outline-none w-[100%] px-4 py-[10px] rounded-xl bg-secondary-100  text-secondary-300 " placeholder="Instagram" name=""/>
        </div>
        <p className="flex items-center gap-1 cursor-pointer text-base font-medium text-primary-100 mx-4 mt-4">Test your link <Share/> </p>
        <div className="flex items-center justify-end gap-[10px] w-[75vw] md:w-[60vw] my-6">
            <button onClick={HandleModal} className="py-2 px-12 border border-primary-100 rounded-[10px] text-base font-medium text-primary-100 ">Cancel</button>
            <button className="py-2 px-12 bg-primary-100 bg-opacity-55 rounded-[10px] text-base font-medium text-light-100 ">Add Link</button>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
