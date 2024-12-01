import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Testimonial = ({ review, scrollBy }) => {
  const testimonialContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scrollRight = () => {
    if (testimonialContainerRef.current) {
      testimonialContainerRef.current.scrollBy({
        left: scrollBy,
      });
    }
  };

  const scrollLeft = () => {
    if (testimonialContainerRef.current) {
      testimonialContainerRef.current.scrollBy({
        left: -scrollBy,
      });
    }
  };

  const handleScroll = () => {
    const { scrollLeft } = testimonialContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
  };

  useEffect(() => {
    if (testimonialContainerRef.current) {
      testimonialContainerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (testimonialContainerRef.current) {
        testimonialContainerRef.current.removeEventListener(
          "scroll",
          handleScroll
        );
      }
    };
  }, []);
  return (
    <div className="relative w-full">
      <div
        className="flex gap-8 xl:gap-12 mx-auto flex-nowrap overflow-x-auto no-scrollbar behavior mt-10 scroll-smooth"
        ref={testimonialContainerRef}
      >
        {[...review, ...review].map((item, index) => (
          <div
            key={index}
            className="bg-white p-3 min-w-[300px] xl:min-w-[430px] xl:h-64 h-56 overflow-y-scroll no-scrollbar mb-2"
          >
            <div className="flex items-center">
              <img
                src={item.user_image}
                alt=""
                className="w-9 h-9 rounded-full"
              />
              <div className="flex flex-col gap-2">
                <div className="text-[13px]">{item.user_name}</div>
                <div className="flex">
                  {Array.from({ length: item.star }).map((_, index) => (
                    <img
                      src="https://assets.nobroker.in/nb-new/public/star.png"
                      alt=""
                      key={index}
                      className="w-4 mr-0"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="font-semibold text-sm">{item.heading}</div>
              <div className="text-[12.5px]">{item.description}</div>
            </div>
          </div>
        ))}
        <div
          className="absolute -right-4 shadow-lg shadow-white top-[45%] bg-white rounded-full cursor-pointer"
          onClick={scrollRight}
        >
          <IoIosArrowRoundForward className="text-black text-3xl" />
        </div>
        {showLeftArrow && (
          <div
            className="absolute -left-4 top-[45%] shadow-md shadow-white bg-white rounded-full cursor-pointer"
            onClick={scrollLeft}
          >
            <IoIosArrowRoundBack className="text-black text-3xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
