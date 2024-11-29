import React from "react";
import Search from "../components/PaintingAndCleaning/Search";
import Offer from "../components/PaintingAndCleaning/Offer";
import Services from "../components/PaintingAndCleaning/Services";
import FrequentAskedQuestion from "../components/FrequentAskedQuestion";
import Testimonial from "../components/Testimonial";

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

  return (
    <div>
      <div>
        <Search />
        <Offer />
        <Services title={"Home Cleaning Services"} />
        <div>
          <div>Popular Services</div>
          <div>
            <div>
              <img
                src="https://assets.nobroker.in/hs-new/public/Home-Services/packers-moversOptimized.png"
                alt=""
              />
              <div>Packers & Movers</div>
            </div>
          </div>
        </div>
        <Services title={"Home Repair Services"} />
        <div className="bg-[#E2EAF8] p-4 px-[140px]">
          <Testimonial review={review} />
        </div>
        <FrequentAskedQuestion
          faq={faq}
          headingAlign={"text-center"}
          textColor={"text-teal-600"}
        />
      </div>
    </div>
  );
};

export default PaintingAndCleaning;
