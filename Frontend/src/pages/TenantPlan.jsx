import React from "react";
import Subscription from "../components/Subscription";
import Testimonial from "../components/Testimonial";
import FrequentAskedQuestion from "../components/FrequentAskedQuestion";

const TenantPlan = () => {
  const review = [
    {
      id: 1,
      user_image: "home/t1.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 2,
      user_image: "home/t2.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 3,
      user_image: "home/t3.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 4,
      user_image: "home/t4.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 5,
      user_image: "home/t5.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
  ];

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
  return (
    <div>
      <Subscription />

      <div className="container mt-6">
        <h1 className="text-center text-2xl mb-14">HOW ASSISTED PLANS WORK</h1>
        <div className="row align-items-center position-relative">
          <div className="col-lg-4 overflow-hidden d-flex flex-column align-items-center">
            <img src="BuyersPlan/1.png" alt="" srcset="" />
            <div className="line-dashed"></div>
          </div>
          <div className="col-lg-4 ">
            <h1 className="text-danger" style={{ fontSize: "22px" }}>
              {" "}
              LOOKING FOR A HOUSE?
            </h1>
            <p style={{ fontSize: "18px" }}>
              Just get one of our Assisted Plans and make your lives simpler.
            </p>
          </div>
          <div className="col-lg-4"></div>
          <div className="bottom-border"></div>
        </div>
        <div className="row align-items-center  position-relative">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 ">
            <p className="mb-1" style={{ fontSize: "18px" }}>
              Say HELLO to your
            </p>
            <h1 className="" style={{ color: "#004958", fontSize: "22px" }}>
              HOUSE-HUNT ASSISTANT
            </h1>
          </div>
          <div className="col-lg-4 overflow-hidden d-flex flex-column align-items-center">
            <div className="line-dashed"></div>
            <img src="BuyersPlan/2.png" alt="" srcset="" />
            <div className="line-dashed"></div>
          </div>
          <div className="bottom-border"></div>
        </div>
        <div className="row align-items-center  position-relative">
          <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
            <div className="line-dashed"></div>
            <img src="BuyersPlan/3.png" alt="" srcset="" />
            <div className="line-dashed"></div>
          </div>
          <div className="col-lg-4 " style={{ fontSize: "22px" }}>
            <p className="mb-1" style={{ fontSize: "18px" }}>
              Who gather all your requirements and provides you with
            </p>
            <h1 className="" style={{ color: "#004958" }}>
              {" "}
              CITY LEVEL EXPERTISE
            </h1>
          </div>
          <div className="col-lg-4"></div>
          <div className="bottom-border"></div>
        </div>
        <div className="row align-items-center  position-relative">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 ">
            <p className="mb-1" style={{ fontSize: "18px" }}>
              Contacts Owners, Schedule property visits, and
            </p>
            <h1 className="text-danger" style={{ fontSize: "22px" }}>
              {" "}
              Negotiates Rent *
            </h1>
          </div>
          <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
            <div className="line-dashed"></div>
            <img src="BuyersPlan/4.png" alt="" srcset="" />
            <div className="line-dashed"></div>
            <div className="bottom-border"></div>
          </div>
        </div>
        <div className="row align-items-center ">
          <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
            <div className="line-dashed"></div>
            <img src="BuyersPlan/5.png" alt="" srcset="" />
          </div>
          <div className="col-lg-4 ">
            <p className="mb-1" style={{ fontSize: "18px" }}>
              Helping you find best
            </p>
            <h1 className="" style={{ color: "#004958", fontSize: "22px" }}>
              {" "}
              HOUSE FOR YOUR NEEDS
            </h1>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <div className="mb-10">
          <Testimonial
            title={"Our Customers Loved US :"}
            review={review}
            scrollBy={400}
          />
        </div>
        <FrequentAskedQuestion
          title={"Frequently Asked Questions"}
          faq={faq}
          headingAlign={"text-center"}
          textColor={"text-teal-600"}
        />
      </div>
    </div>
  );
};

export default TenantPlan;
