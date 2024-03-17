"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const AuthCarousel = () => {
  return (
    <Carousel
      showDots={true} responsive={responsive} ssr={true} infinite={true} autoPlaySpeed={1000}
      keyBoardControl={true} customTransition="all .5" transitionDuration={500} containerClass="carousel-container"
      dotListClass="custom-dot-list-style"itemClass="carousel-item-padding-40-px" arrows={false} 
    >
        <div className="flex flex-col items-center justify-center pb-9 xl:py-0">
            <img src="/assets/logos/slide.png" className="h-[365px] w-[398px]" alt="slide-img"/>
            <h1 className="text-[2.6rem] lg:text-[2.8rem] font-semibold text-light-100 mt-6"> Welcome Aboard</h1>
            <p className="text-sm text-light-100 tracking-wider">One tap tells your social story</p>
        </div>
        <div className="flex flex-col items-center justify-center pb-9 xl:py-0">
            <img src="/assets/logos/slide.png" className="h-[365px] w-[398px]" alt="slide-img"/>
            <h1 className="text-[2.6rem] lg:text-[2.8rem] font-semibold text-light-100 mt-6"> Welcome Aboard</h1>
            <p className="text-sm text-light-100 tracking-wider">One tap tells your social stories</p>
        </div>
        <div className="flex flex-col items-center justify-center pb-9 xl:py-0">
            <img src="/assets/logos/slide.png" className="h-[365px] w-[398px]" alt="slide-img"/>
            <h1 className="text-[2.6rem] lg:text-[2.8rem] font-semibold text-light-100 mt-6"> Welcome-Aboard</h1>
            <p className="text-sm text-light-100 tracking-wider">One tap tells your social stories</p>
        </div>
    </Carousel>
  );
};

export default AuthCarousel;