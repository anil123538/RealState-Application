import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

const Search = () => {
  const topData = [
    {
      id: 1,
      image: "/paintingAndCleaning/image.png",
      title: "Home Cleaning",
      offer: "upto 60% Off*",
    },
    {
      id: 1,
      image: "/paintingAndCleaning/image.png",
      title: "Home Cleaning",
      offer: "Lowest Quote*",
    },
    { id: 1, image: "/paintingAndCleaning/image.png", title: "Home Cleaning" },
    { id: 1, image: "/paintingAndCleaning/image.png", title: "Home Cleaning" },
    { id: 1, image: "/paintingAndCleaning/image.png", title: "Home Cleaning" },
    { id: 1, image: "/paintingAndCleaning/image.png", title: "Home Cleaning" },
    { id: 1, image: "/paintingAndCleaning/image.png", title: "Home Cleaning" },
    { id: 1, image: "/paintingAndCleaning/image.png", title: "Home Cleaning" },
  ];

  return (
    <div>
      <div className="bg-[#004953] mb-1.5">
        <div className="flex relative md:w-6/12 items-center mx-auto pt-6 px-4 md:px-0">
          <CiSearch className="absolute md:left-2 left-6 text-2xl" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search a service"
            className="rounded-full border w-full p-2.5 pl-12"
          />
          <FaMicrophone className="absolute md:right-2 right-6 text-2xl text-black/60" />
        </div>

        <div className="flex md:flex-row flex-col md:px-[140px] py-6 justify-between 2xl:max-w-[1280px] gap-4 items-center mx-auto">
          <div className="grid grid-cols-4 gap-8 px-4 md:px-0 md:gap-1 items-center h-fit">
            {topData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center md:gap-4 rounded-full md:p-2"
              >
                <div className="bg-orange-200/70 text-[9px] font-medium px-1 rounded-full absolute">
                  {item.offer}
                </div>
                <img
                  src={item.image}
                  alt=""
                  className="m-0 w-14 rounded-full bg-white"
                />
                <div className="text-xs text-white w-10/12">{item.title}</div>
              </div>
            ))}
          </div>
          <video
            src="videos/Diwali_cleaning.mp4"
            alt="video"
            autoPlay
            loop
            controls="play"
            className="w-full p-4 md:w-6/12 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
