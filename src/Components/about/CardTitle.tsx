import { EditBrushIcon } from "@/icons"
import { AboutInputTypes } from "@/types/about"
import { Dispatch, SetStateAction } from "react"

const CardTitle:React.FC<{inputs: AboutInputTypes,setInputs: Dispatch<SetStateAction<AboutInputTypes>>}> = ({inputs, setInputs}) => {
    return (
  <div className='flex items-center md:justify-end gap-2'>
              <h2 className='text-primary-100 text-sm font-medium '>Card Title:</h2>
              <div className='flex items-center border border-secondary-50 rounded-2xl py-[6px] md:py-2 w-max px-4'>
                <input type="text" className='outline-none text-sm w-[140px] md:w-[170px] pr-1 bg-transparent text-secondary-400  ' onChange={(e)=> setInputs({...inputs,cardTitle:e.target.value})} value={inputs.cardTitle} placeholder='Charlene Reed' name="cardTitle" id="" />
                <EditBrushIcon/>
              </div>
            </div>  )
  }
  
  export default CardTitle