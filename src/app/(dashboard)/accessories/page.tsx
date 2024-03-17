import AccessoriesCard from "@/Components/AccessoriesCard";

const page = () => {
  return (
    <div className="mx-6">
      <h1 className='text-secondary-500 mt-6 text-[1.375rem] font-semibold'>Accessories</h1>
        <div className='bg-light-100 w-full mt-2 mb-8 rounded-3xl flex items-center justify-center gap-[5.7rem] py-[3rem]'>
          <AccessoriesCard iconHeight={150} iconWidth={150} btntext='Order' icon='/assets/logos/watchcard.svg' title='Get WaveTag Accessories' subtitle={`Don’t Have Any Accessories?\nPurchase them here.` }/>
          <AccessoriesCard iconHeight={285} iconWidth={285} btntext='Activate' icon='/assets/logos/device.svg' title='Activate WaveTag Accessories' subtitle={`If you have all the accessories you\nneed, simply activate them`} />
        </div>
    </div>
  );
};

export default page;




