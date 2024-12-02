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
      <div className="bg-[#F0F4FC] mb-1.5">
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

        <div className="flex md:flex-row flex-col md:px-[140px] py-6 justify-between max-w-[1280px] mx-auto">
          <div className="grid grid-cols-4 items-center h-fit">
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
                <div className="text-xs w-10/12">{item.title}</div>
              </div>
            ))}
          </div>
          <div className="mx-auto pt-5 md:pt-0 w-full md:w-auto px-4 ">
            <img
              src="https://assets.NESTATE.in/hs-new/public/Home/newServicesIcons/shimmerLazyLoad.gif"
              alt=""
              className="m-0 w-full md:w-[350px] h-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
