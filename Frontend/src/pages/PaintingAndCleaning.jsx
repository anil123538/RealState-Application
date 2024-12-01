import React from "react";
import Search from "../components/PaintingAndCleaning/Search";
import Offer from "../components/PaintingAndCleaning/Offer";
import Services from "../components/PaintingAndCleaning/Services";
import FrequentAskedQuestion from "../components/FrequentAskedQuestion";
import Testimonial from "../components/Testimonial";
import { FaStar } from "react-icons/fa";

import VipMembership from "../components/PaintingAndCleaning/VipMembership";
import SecondOffer from "../components/PaintingAndCleaning/Secondoffer";

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

  const popularServices = [
    {
      id: 1,
      image:
        "https://assets.nobroker.in/hs-new/public/Home-Services/packers-moversOptimized.png",
      title: "Packers & Movers",
      rating: "4.8",
    },
    {
      id: 2,
      image:
        "https://assets.nobroker.in/hs-new/public/Home-Services/home-paintingOptimized.png",
      title: "Home Painting",
      rating: "4.9",
    },
    {
      id: 3,
      image:
        "https://assets.nobroker.in/hs-new/public/Home-Services/home-renovationOptimized.png",
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
        <SecondOffer />
        <Services title={"Home Cleaning Services"} />

        {/* Popular Services */}
        <div className="px-6 pb-10 pt-5 bg-white mb-1.5">
          <div className="mb-3.5 text-2xl text-center font-semibold">
            Popular Services
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-16 lg:px-[140px]">
              {popularServices.map((item) => (
                <div
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

        <VipMembership />
        <Services title={"Home Repair Services"} />
        <SecondOffer title={"Relocation Simplified"} />
        <div className="bg-[#E2EAF8] p-4 mb-1.5 md:px-[140px]">
          <Testimonial review={review} scrollBy={400} />
        </div>
        <div className="bg-white md:px-[108px]">
          <FrequentAskedQuestion
            faq={faq}
            headingAlign={"text-center"}
            textColor={"text-teal-600"}
          />
        </div>
      </div>
    </div>
  );
};

export default PaintingAndCleaning;
