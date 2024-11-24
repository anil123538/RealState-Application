import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const HomeTestimonial = () => {
  const review = [
    {
      id: 1,
      user_image:
        "https://assets.nobroker.in/images/testimonials/ff80818155da4ee20155dd9b3e161113_2016.08.18.11.41.41.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 2,
      user_image:
        "https://assets.nobroker.in/images/testimonials/ff80818155da4ee20155dd9b3e161113_2016.08.18.11.41.41.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 3,
      user_image:
        "https://assets.nobroker.in/images/testimonials/ff80818155da4ee20155dd9b3e161113_2016.08.18.11.41.41.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 4,
      user_image:
        "https://assets.nobroker.in/images/testimonials/ff80818155da4ee20155dd9b3e161113_2016.08.18.11.41.41.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 5,
      user_image:
        "https://assets.nobroker.in/images/testimonials/ff80818155da4ee20155dd9b3e161113_2016.08.18.11.41.41.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
  ];

  const testimonialContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scrollRight = () => {
    if (testimonialContainerRef.current) {
      testimonialContainerRef.current.scrollBy({
        left: 400,
      });
    }
  };

  const scrollLeft = () => {
    if (testimonialContainerRef.current) {
      testimonialContainerRef.current.scrollBy({
        left: -400,
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
    <>
      <div className="bg-slate-600 py-10 items-center flex flex-col relative">
        <h1 className="text-white text-2xl">Our Customers Loves us</h1>
        <iframe
          width="560"
          height="320"
          src="https://www.youtube.com/embed/0ChlgxhXVws"
          title="NoBroker Reviews - Why our customers love us?"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="my-10"
        ></iframe>
        <div
          className="flex gap-8 xl:gap-12 w-11/12 flex-nowrap overflow-x-scroll behavior mt-10 scroll-smooth"
          ref={testimonialContainerRef}
        >
          {[...review, ...review].map((item, index) => (
            <div
              key={index}
              className="bg-white p-3 min-w-[300px] xl:min-w-[430px] xl:h-64 h-56 overflow-y-scroll mb-2"
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
            className="absolute right-14 shadow-lg shadow-white top-[630px] bg-white rounded-full cursor-pointer"
            onClick={scrollRight}
          >
            <IoIosArrowRoundForward className="text-black text-3xl" />
          </div>
          {showLeftArrow && (
            <div
              className="absolute left-8 top-[630px] shadow-md shadow-white bg-white rounded-full cursor-pointer"
              onClick={scrollLeft}
            >
              <IoIosArrowRoundBack className="text-black text-3xl" />
            </div>
          )}
        </div>
        <hr className="border-2 border-white w-11/12 mt-4 mb-10" />
        <div className=" underline cursor-pointer text-sm">
          <Link to="/testimonials" className="text-white underline text-[13px]">
            More Testimonials
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-around p-10">
        <div>
          <img
            src="https://assets.nobroker.in/nb-new/public/Home/homeAppPromotion.png"
            alt=""
            width="80%"
          />
        </div>
        <div>
          <h2 className="text-3xl font-normal text-red-500">
            Find A New Home On The Go
          </h2>
          <div className="my-10">
            <div className="font-normal text-xl">Download our app</div>
            <span className="font-extralight">
              Where convenience is at your fingertip
            </span>
          </div>
          <div className="flex my-8">
            <img src="/home/google_play.png" alt="" width="160px" />
            <img src="/home/app_store.svg" alt="" width="160px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTestimonial;
