import React from "react";
import Search from "../components/PaintingAndCleaningComponent/Search";
import Offer from "../components/PaintingAndCleaningComponent/Offer";
import Services from "../components/PaintingAndCleaningComponent/Services";
import FrequentAskedQuestion from "../components/FrequentAskedQuestion";
import Testimonial from "../components/Testimonial";
import { FaStar } from "react-icons/fa";
import VipMembership from "../components/PaintingAndCleaningComponent/VipMembership";
import SecondOffer from "../components/PaintingAndCleaningComponent/SecondOffer";
import InSpotlight from "../components/PaintingAndCleaningComponent/InSpotlight";

const PaintingAndCleaning = () => {
  const faq = [
    {
      id: 1,
      que: "Do I need to visit any government office?",
      ans: "Not even once. We will conduct the whole process for you online / at your home.",
    },
    {
      id: 2,
      que: "How much will it cost?",
      ans: "Please click here to know the charges. Apart from our convenience fee, the charges typically include stamp duty, registration charges, etc.",
    },
    {
      id: 3,
      que: "Landlord and tenant are in different locations?",
      ans: "You can use the Aadhar eSign based digital signature service.",
    },
    {
      id: 4,
      que: "Is Aadhar e-sign valid?",
      ans: "Yes, Aadhaar eSign based digital signatures are a legally accepted and secure manner of electronically signing documents, under effect of Gazette Notification No. 2015 Jan -GSR 61(E) Electronic Signature or Electronic Authentication Technique and Procedure Rules, 2015.",
    },
  ];

  const review = [
    {
      id: 1,
      user_image: "paintingAndCleaning/testimonial_daniel.webp",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NESTATE. It is simply a ..."`,
    },
    {
      id: 2,
      user_image: "paintingAndCleaning/testimonial_daniel.webp",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NESTATE. It is simply a ..."`,
    },
    {
      id: 3,
      user_image: "paintingAndCleaning/testimonial_daniel.webp",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NESTATE. It is simply a ..."`,
    },
    {
      id: 4,
      user_image: "paintingAndCleaning/testimonial_daniel.webp",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NESTATE. It is simply a ..."`,
    },
    {
      id: 5,
      user_image: "paintingAndCleaning/testimonial_daniel.webp",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NESTATE. It is simply a ..."`,
    },
  ];

  const popularServices = [
    {
      id: 1,
      image: "paintingAndCleaning/packers-moversOptimized.png",
      title: "Packers & Movers",
      rating: "4.8",
    },
    {
      id: 2,
      image: "paintingAndCleaning/home-paintingOptimized.png",
      title: "Home Painting",
      rating: "4.9",
    },
    {
      id: 3,
      image: "paintingAndCleaning/home-renovationOptimized.png",
      title: "Home Renovation",
      rating: "4.2",
    },
    {
      id: 4,
      image: "paintingAndCleaning/otherPanel.webp",
      title: "Wall Painting",
      rating: "4.8",
    },
  ];

  return (
    <div className="bg-zinc-100">
      <div>
        <Search />
        <Offer />
        <div className="bg-[#004953] py-10 px-4 mb-1.5">
          <div className="md:px-[140px] max-w-[1280px] mx-auto">
            <SecondOffer titlePosition={"text-center"} />
          </div>
        </div>
        <div className="bg-white md:px-[140px]">
          <Services title={"Home Cleaning Services"} />
        </div>

        {/* Popular Services */}
        <div className="px-6 pb-10 pt-5 bg-white mb-1.5">
          <div className="mb-3.5 text-2xl text-center font-semibold">
            Popular Services
          </div>
          <div className="lg:max-w-[1280px] lg:mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-16 lg:px-[140px]">
              {popularServices.map((item, i) => (
                <div
                  key={i}
                  className="bg-no-repeat h-40 w-full bg-cover rounded-md"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                  }}
                >
                  <div className="h-full rounded-md flex  bg-gradient-to-t from-black to-70% to-transparent">
                    <div className="flex w-full gap-4 p-2 items-end text-white ">
                      <div className="text-white font-semibold w-10/12 text-[15px]">
                        {item.title}
                      </div>
                      <div className="flex bg-black rounded-full px-1 items-center">
                        <div className="text-[10px]">{item.rating}</div>
                        <FaStar className="text-orange-400 text-[9px]" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white mb-1.5 px-6 py-5">
          <VipMembership title="VIP Membership" titlePosition="text-center" />
        </div>

        <InSpotlight />

        <Services title={"Home Repair Services"} />
        <div className="bg-[#004953] py-10 px-4 mb-1.5">
          <div className="md:px-[140px] max-w-[1280px] mx-auto">
            <SecondOffer
              title={"Relocation Simplified"}
              titlePosition={"text-center"}
            />
          </div>
        </div>
        <div className="bg-[#004953] p-4 mb-1.5 md:px-[140px]">
          <div className="max-w-[1280px] mx-auto">
            <Testimonial
              review={review}
              title={"Customer Reviews"}
              scrollBy={400}
              titleColor="text-white"
            />
          </div>
        </div>
        <div className="bg-white md:px-[140px] px-4 py-12">
          <div className="max-w-[1280px] mx-auto">
            <div className={`font-medium md:text-3xl text-lg mb-4 text-center`}>
              Frequently Asked Questions
            </div>
            <FrequentAskedQuestion faq={faq} textColor={"text-teal-600"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingAndCleaning;
