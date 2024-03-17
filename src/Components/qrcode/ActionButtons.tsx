
const ActionButtons = () => {
  return (
    <div className=" flex gap-2 mt-2 w-full md:w-1/2">
      <button className="w-[48%] flex items-center gap-1 text-primary-100 border-primary border text-[15px]  justify-center py-[6px] font-medium rounded-lg">
        Create Event Badge
      </button>
      <button className="w-[48%] flex items-center gap-1 text-primary-100 border-primary border text-[15px]  justify-center py-[6px] font-medium rounded-lg">
        Add To Wallet
      </button>
    </div>
  );
};

export default ActionButtons;
