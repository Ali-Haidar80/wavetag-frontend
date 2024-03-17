import { Close, PlusIcon, SearchIcon } from "@/icons"
import { Dispatch, SetStateAction } from "react"

const Modal = ({setModal,setSubModal}:{setModal:Dispatch<SetStateAction<boolean>>,setSubModal:Dispatch<SetStateAction<boolean>>}) => {
  function HandleModdal() {
    setSubModal(true);
    setModal(false);
  }
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-secondary-50 bg-opacity-70 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex h-full w-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="flex-col transform flex px-4 pt-5 pb-8 rounded-3xl bg-light-100 text-left shadow-xl transition-all h-[80vh] w-[80vw]">
              <div className="flex items-center justify-between px-2 mb-4">
                <h1 className="font-medium text-2xl">Add Social</h1>
                <span onClick={() => setModal(false)} className="cursor-pointer"> <Close /> </span>
              </div>              
              <div className="flex w-full items-center justify-between">
                <p className="text-sm md:text-base font-normal text-secondary-200 ">Choose from our extensive range of links.</p>
                <div className="flex  gap-2 bg-secondary-100  py-2 w-[190px] md:w-[15vw] px-3 rounded-full">
                  <SearchIcon/>
                  <input className="text-secondary-200  outline-none w-[100%] bg-transparent pr-2" type="text" placeholder="Search Links" />
                </div>
              </div>
               <div className="flex flex-wrap overflow-y-auto  gap-4 mt-6">
                    {
                        Array.from({length:14},(item,id)=>(
                          <button onClick={HandleModdal} className="plus-svg bg-secondary-100  flex items-center justify-between w-[240px] py-3 px-3 rounded-lg ">
                            <div className="flex items-center gap-2"><img src={"/assets/social links/whatsapp.png"} className="h-[30px] w-[30px]" /><h3>Text</h3></div>
                            <PlusIcon/>
                          </button>
                        ))
                    } 
               </div>
            </div>
          </div>
        </div>
      </div> )
}

export default Modal