import QrCode from "./QRCodeGenerator"
import UploadImg from "./UploadImg"
type Props = {
    logo?: File | null
    setLogo: React.Dispatch<React.SetStateAction<File | null | undefined>>
}
const MainSection: React.FC<Props> = ({logo,setLogo}) => {
  return (
<div className=" flex md:flex-row flex-col items-center md:items-start gap-10 md:justify-between md:w-full pr-3 md:pr-4">
        <div className="mt-8 flex flex-col justify-center md:bg-light-100 bg-secondary-650 rounded-2xl py-[20px] px-3 gap-4">
            <h2 className='pl-5 md:pl-0 font-medium text-dark-80 text-[13px] md:text-lg'>Add Logo</h2>
          <div className="flex items-center bg-secondary-650 pr-2 gap-4">
            <UploadImg className='bg-light-100' getImage={(file) => setLogo(file)} circle={true} />
          <p className='text-[12px] md:text-[14px] font-medium text-dark-80'>Add custom logo to be displayed in<br /> the middle of the QRCode.</p>
          </div>
        </div>
        <QrCode logo={logo} url="https://example.com"/>
</div>  
)}

export default MainSection