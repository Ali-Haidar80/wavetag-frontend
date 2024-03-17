import { DragIcon, TrashIcon } from "@/icons"

const LinkCard = ({name,img}:{name:string,img:string}) => {
  return (
    <div className="flex items-center justify-between px-4 bg-secondary-90 py-3 rounded-lg">
    <div className="flex items-center gap-3 text-base font-medium">
      <DragIcon />
      <img src={img} alt={name} className="h-[30px] w-[30px]" />
      {name}
    </div>
    <div className="flex items-center gap-3">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-secondary-70  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-light-100 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-light-100 after:border-secondary-50 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-info-100"></div>
      </label>
      <TrashIcon />
    </div>
  </div>
  )
}

export default LinkCard