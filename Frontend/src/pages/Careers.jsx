import React, { useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Careers = () => {
  const howDidWeStart = [
    {
      id: 1,
      image:
        "https://assets.NESTATE.in/nb-new/public/Careers/propertyListed.png",
      heading: "25 Lakhs+",
      text: "Property listed on NESTATE",
    },
    {
      id: 2,
      image: "https://assets.NESTATE.in/nb-new/public/Careers/appDownload.png",
      heading: "20 Million+",
      text: "Cumulative App Downloads",
    },
    {
      id: 3,
      image: "https://assets.NESTATE.in/nb-new/public/Careers/visitors.png",
      heading: "200Million+",
      text: "Customers visited NESTATE",
    },
    {
      id: 4,
      image: "https://assets.NESTATE.in/nb-new/public/Careers/transaction.png",
      heading: "20 Million+",
      text: "Customer Transactions",
    },
  ];

  const learnFromExperts = [
    {
      id: 1,
      image: "/careers/amitagrawal.png",
      name: "Amit Agrawal",
      text: "Amit Agrawal is the Founder and Chief Executive officer at NESTATE",
    },
    {
      id: 2,
      image: "/careers/Saurabh@2x.png",
      name: "Saurabh Garg",
      text: "Saurabh Garg is the Founder and Chief Business officer at NESTATE",
    },
    {
      id: 3,
      image: "/careers/Akhil.png",
      name: "Akhil Gupta",
      text: "Akhil Gupta is the Founder and Chief Tech & Product officer at NESTATE",
    },
  ];

  const expertContainerRef = useRef(null);

  const scrollRight = () => {
    if (expertContainerRef.current) {
      expertContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (expertContainerRef.current) {
      expertContainerRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (expertContainerRef.current) {
        expertContainerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <div className="flex justify-between md:gap-10 items-center">
        <div className="text-white bg-black/60 p-6 pt-10 md:text-black md:bg-white md:pl-[100px] xl:w-[430px]">
          <div className="font-medium text-2xl xl:text-3xl">
            Careers at NESTATE
          </div>
          <div className="opacity-60 text-sm my-4">
            We ignite opportunities by solving the biggest real-estate problem
          </div>
          <button className="bg-[#004958] px-5 py-2.5 font-medium text-sm text-white">
            See all opportunities
          </button>
        </div>
        <img
          src="/careers/topImage.jpg"
          alt=""
          className="m-0 w-[60%] hidden md:block"
        />
      </div>

      <div className="px-6 md:pl-[100px] md:pr-[60px]">
        {/* How did we Start */}
        <div className="py-10 md:py-20 ">
          <div>
            <div className="text-2xl md:text-3xl md:pb-2 font-medium">
              How did we Start
            </div>
            <p className="opacity-60 text-sm leading-6">
              NESTATE was founded by IIT and IIM graduates Amit Kumar Agarwal,
              Akhil Gupta and Saurabh Garg; because we know brokers don’t add a
              lot of value in real estate transactions, but still, charge a lot!
              This is why we work on technology and use it as the backbone to
              identify and ban brokers, while providing customers with a
              seamless experience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            {howDidWeStart.map((item) => (
              <div className="flex flex-col items-center justify-center text-center gap-2 md:items-start">
                <img src={item.image} alt="" className="m-0 w-16" />
                <div className="font-semibold text-lg md:text-xl">
                  {item.heading}
                </div>
                <div className="text-sm opacity-60">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* We’re looking for fearless explorers */}
        <div className="flex flex-col md:flex-row md:gap-20 md:items-center mb-5 md:mb-[100px]">
          <div className="w-full md:w-1/2 xl:w-5/12">
            <div className="font-medium text-2xl mt-[10px] mb-5">
              We’re looking for fearless explorers
            </div>
            <p className=" opacity-60 text-sm leading-6 mb-[30px]">
              We’re looking for creative hustlers who are as customer-obsessed
              as we are. Our ideal “Employee” is always looking for innovative
              ways to relentlessly improve real-estate experience, is passionate
              about building loyalty amongst our existing user base, and is
              excited to build products and services that will bring the next
              million users to the platform.
            </p>
          </div>
          <img
            src="/careers/Fearless_Explorers.png"
            alt=""
            className="m-0 w-full md:w-1/2 xl:w-7/12"
          />
        </div>

        {/* Learn from experts */}
        <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between md:gap-10 relative">
          <div className="md:w-[55%]">
            <div className="font-medium text-2xl mt-[10px] mb-5">
              Learn from experts
            </div>
            <p className="opacity-60 text-sm leading-6">
              We boast of culture and team that holds a tremendous passion for
              learning & growth. Every player in our team holds the guts to push
              the next frontier in technology, to solve the next most
              challenging problem in the industry, to bring the next greatest
              value to our users and to our business. In the process you grow in
              your skills and strengths, grooming yourselves to be the finest in
              your respective domain.
            </p>
          </div>
          <div
            className="flex gap-4 overflow-x-scroll no-scrollbar py-5 mb-5 -mx-4 md:py-0 md:mx-0 md:w-[45%]"
            ref={expertContainerRef}
          >
            {learnFromExperts.map((item) => (
              <div className="bg-[#f8f8f8] min-w-80 md:min-w-full">
                <img
                  src={item.image}
                  alt=""
                  className="h-[270px] md:h-[330px] m-0"
                />
                <div className="pl-4 font-medium">{item.name}</div>
                <div className="pl-4 text-xs opacity-60 mb-[10px]">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
          <div
            className="hidden md:block absolute left-[41%] top-[40%] bg-white rounded-full shadow-[#ccc] z-10 shadow-md cursor-pointer"
            onClick={scrollRight}
          >
            <IoIosArrowRoundForward className="text-black text-4xl" />
          </div>
        </div>

        {/* We truly believe fun at work */}
        <div className="flex flex-col md:flex-row md:mb-[100px] items-center gap-10">
          <div>
            <div className="font-medium text-2xl md:text-[28px] mt-[10px] mb-5">
              We truly believe fun at work
            </div>
            <p className=" opacity-60 text-sm leading-6 mb-[30px]">
              We facilitate an environment that is challenging, meaningful,
              fulfilling and fun. Fun, according to us is as crucial in a
              workplace as all the other components. We like to have a good
              laugh together and indulge in fun and games. We believe that it is
              all about focusing on the things that make employees happy at
              work.
            </p>
          </div>
          <img
            src="/careers/Fun_at_work.png"
            alt=""
            className="m-0 w-full md:w-1/2 mb-5 md:h-[440px]"
          />
        </div>

        {/* Join an amazing team */}
        <div className="flex flex-col md:flex-row-reverse md:gap-20 md:items-center md:mb-[100px]">
          <div>
            <div className="font-medium text-2xl pt-[30px] mb-5">
              Join an amazing team
            </div>
            <p className=" opacity-60 text-sm leading-6 mb-[30px]">
              Stay constantly inspired by working alongside creative,
              collaborative and passionate colleagues.
            </p>
          </div>
          <div className="-mx-4 md:mx-0">
            <img
              src="/careers/Team1.png"
              alt=""
              className="m-0 py-5 md:py-0 mb-11 md:mb-0 md:h-[440px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
