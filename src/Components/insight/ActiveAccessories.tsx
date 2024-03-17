const ActiveAccessories = () => {
  return (
    <>
        <p className="text-secondary-500   mt-6 text-[1.375rem] font-semibold mb-2">Most Active Accessories</p>
        <div className="bg-light-100 rounded-3xl w-[100%] h-[235px] px-4 py-6">
            <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between text-base font-medium h-[50px] px-4 w-full bg-secondary-100  rounded-lg">
                <p className="w-28 flex-wrap flex">LinkedIn</p>
                <div className="flex flex-1 border-secondary-300  border-b-2 border-spacing-x-8 border-dashed" />
                <p className="w-20  text-end">09</p>
            </div>
            <div className="flex flex-row items-center justify-between text-base font-medium h-[50px] px-4 w-full bg-secondary-100  rounded-lg">
                <p className="w-28 flex-wrap flex">LinkedIn</p>
                <div className="flex flex-1 border-secondary-300  border-b-2 border-spacing-x-8 border-dashed" />
                <p className="w-20  text-end">09</p>
            </div>
            <div className="flex flex-row items-center justify-between text-base font-medium h-[50px] px-4 w-full bg-secondary-100  rounded-lg">
                <p className="w-28 flex-wrap flex">LinkedIn</p>
                <div className="flex flex-1 border-secondary-300  border-b-2 border-spacing-x-8 border-dashed" />
                <p className="w-20  text-end">09</p>
            </div>
            </div>
        </div>
    </>
  );
};

export default ActiveAccessories;
