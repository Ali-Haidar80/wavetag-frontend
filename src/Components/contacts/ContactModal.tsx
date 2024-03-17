import { Close } from "@/icons";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: Record<string, string>;
  }
  
  const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
    return (
      <>
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-dark-50 bg-opacity-50">
            <div className="bg-light-100 p-6 rounded-2xl relative">
              <div className="flex justify-between">
                <span className="font-bold text-2xl text-primary-50">Details</span>
                <span onClick={onClose} className="cursor-pointer"><Close /></span>
              </div>            
              <hr className="my-2 mb-4 text-primary-50" />
              <dl className="">
              {Object.entries(data).map(([key, value]) => (
                <div className="flex flex-col pb-3 ">
                  <dt className="mb-1 text-secondary-400 ">{key}</dt>
                  <dd className="text-lg font-semibold text-dark-90">{value}</dd>
                </div>
              ))}
              </dl>
            </div>
          </div>
        )}
      </>
    );
  };

  export default ContactModal;