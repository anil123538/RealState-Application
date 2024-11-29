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
      <div className="bg-[#F0F4FC]">
        <div className="flex relative w-6/12 items-center mx-auto pt-6 pb-2">
          <CiSearch className="absolute left-2 text-2xl" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search a service"
            className="rounded-full border w-full p-2.5 pl-12"
          />
          <FaMicrophone className="absolute right-2 text-2xl text-black/60" />
        </div>

        <div className="flex px-36 gap-10 justify-between py-6 mb-4">
          <div className="grid grid-cols-4 items-center h-fit">
            {topData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-2 rounded-full"
              >
                <div className="bg-orange-200/70 text-[9px] font-medium px-1 rounded-full">
                  {item.offer}
                </div>
                <img
                  src={item.image}
                  alt=""
                  className="m-0 w-12 rounded-full bg-white"
                />
                <div className="text-xs w-10/12">{item.title}</div>
              </div>
            ))}
          </div>
          <div>
            <img
              src="https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/shimmerLazyLoad.gif"
              alt=""
              className="m-0 w-[250px] h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
