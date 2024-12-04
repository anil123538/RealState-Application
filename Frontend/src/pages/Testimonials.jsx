import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const review = [
    {
      id: 1,
      user_image: "/testimonials/avatar.jpg",
      user_name: "Prameet",
      status: "tennant",
      star: 5,
      heading: "Helps us to find good properties",
      description: `Getting a roommate through NESTATE was a cakewalk for me. I ve been in Mumbai for the last 6 years & have done a lot of house hunting. Looking for a room-mate was always challenging. This time NESTATE made it very simple & the assistance i received right from placing the ad till the end was magnificent. Thanks NESTATE.`,
    },
    {
      id: 2,
      user_image: "/testimonials/avatar.jpg",
      user_name: "Prameet",
      status: "tennant",
      star: 5,
      heading: "Helps us to find good properties",
      description: `Getting a roommate through NESTATE was a cakewalk for me. I ve been in Mumbai for the last 6 years & have done a lot of house hunting. Looking for a room-mate was always challenging. This time NESTATE made it very simple & the assistance i received right from placing the ad till the end was magnificent. Thanks NESTATE.`,
    },
    {
      id: 3,
      user_image: "/testimonials/avatar.jpg",
      user_name: "Prameet",
      status: "tennant",
      star: 5,
      heading: "Helps us to find good properties",
      description: `Getting a roommate through NESTATE was a cakewalk for me. I ve been in Mumbai for the last 6 years & have done a lot of house hunting. Looking for a room-mate was always challenging. This time NESTATE made it very simple & the assistance i received right from placing the ad till the end was magnificent. Thanks NESTATE.`,
    },
    {
      id: 4,
      user_image: "/testimonials/avatar.jpg",
      user_name: "Prameet",
      status: "tennant",
      star: 5,
      heading: "Helps us to find good properties",
      description: `Getting a roommate through NESTATE was a cakewalk for me. I ve been in Mumbai for the last 6 years & have done a lot of house hunting. Looking for a room-mate was always challenging. This time NESTATE made it very simple & the assistance i received right from placing the ad till the end was magnificent. Thanks NESTATE.`,
    },
    {
      id: 5,
      user_image: "/testimonials/avatar.jpg",
      user_name: "Prameet",
      status: "tennant",
      star: 5,
      heading: "Helps us to find good properties",
      description: `Getting a roommate through NESTATE was a cakewalk for me. I ve been in Mumbai for the last 6 years & have done a lot of house hunting. Looking for a room-mate was always challenging. This time NESTATE made it very simple & the assistance i received right from placing the ad till the end was magnificent. Thanks NESTATE.`,
    },
  ];
  return (
    <div className="bg-neutral-200">
      <img
        src="/testimonials/testimonial_bg.jpg"
        alt=""
        className="w-full m-0"
      />
      <div className="p-5">
        <h3 className="text-center">
          NESTATE Reviews - See What Our Valuable Customers Say
        </h3>

        <div className="flex gap-4 flex-nowrap overflow-x-scroll behavior mt-10 scroll-smooth">
          {[...review, ...review].map((item, index) => (
            <div key={index} className="bg-white p-3 min-w-[430px] h-64 mb-2">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={item.user_image}
                    alt=""
                    className="w-11 h-11 rounded-full"
                  />
                  <span className="absolute left-[6px] top-9 flex text-xs items-center gap-1 text-white bg-zinc-600 w-fit rounded-md px-1">
                    {item.star}
                    <FaStar className="text-yellow-600" />
                  </span>
                </div>
                <div>
                  <div className="font-medium">{item.user_name}</div>
                  <div className="text-xs"> {item.status}</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-sm">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
