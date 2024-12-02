import React from "react";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";

const HomeTestimonial = () => {
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

  return (
    <>
      <div className="bg-[#004953] py-10 items-center md:flex hidden flex-col">
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
        <div className="w-11/12">
          <Testimonial review={review} scrollBy={800} />
        </div>

        <hr className="border-2 border-white w-11/12 mt-4 mb-10" />
        <div className=" underline cursor-pointer text-sm">
          <Link to="/testimonials" className="text-white underline text-[13px]">
            More Testimonials
          </Link>
        </div>
      </div>

      <div className="md:flex hidden items-center justify-around p-10">
        <div>
          <img
            src="home/homeAppPromotion.png"
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
