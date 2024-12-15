import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import Modal from "../Modal";
import { Link } from "react-router-dom";

const Search = () => {
  const topData = [
    {
      id: 1,
      image: "home/painting_&_cleaning.png",
      title: "Home Cleaning",
      offer: "upto 60% Off*",
      insideTitle: [
        {
          id: 1,
          title: "Full House Cleaning",
          image: "home/painting_&_cleaning.png",
        },
        { id: 2, title: "Kitchen Cleaning", image: "home/kitchen.png" },
        { id: 3, title: "Sofa Cleaning", image: "home/cleaning.png" },
        { id: 4, title: "Weekly Cleaning", image: "home/mop.png" },
        { id: 5, title: "Bathroom Cleaning", image: "home/toilet.png" },
      ],
    },
    {
      id: 2,
      image: "/home/packers_&_movers.png",
      title: "Packers & Movers",
      offer: "Lowest Quote*",
      insideTitle: [
        {
          id: 1,
          title: "Within City",
          image: "home/distance.png",
        },
        { id: 2, title: "Between Cities", image: "home/distance.png" },
        {
          id: 3,
          title: "Vehicle Shifting",
          image: "home/truck-carrying-car.png",
        },
        { id: 4, title: "City Tempo", image: "home/truck.png" },
      ],
    },
    {
      id: 3,
      image: "/home/paint-roller.png",
      title: "Painting",
      offer: "Flat 25% off",
      insideTitle: [
        {
          id: 1,
          title: "Painting",
          image: "home/paint-roller.png",
        },
        { id: 2, title: "One Wall Painting", image: "home/painting.png" },
      ],
    },
    {
      id: 4,
      image: "/home/rent-payment-diwali.png",
      offer: "Flat 25% off",
      title: "Rental Agreement",
    },
    {
      id: 5,
      image: "/home/electrician.png",
      title: "Electrician, Plumber & Carpenter",
      insideTitle: [
        {
          id: 1,
          title: "Plumbing",
          image: "home/plumbing.png",
        },
        { id: 2, title: "Electrician", image: "home/electrician.png" },
        { id: 2, title: "Carpentry", image: "home/carpenter.png" },
      ],
    },
    {
      id: 6,
      image: "/home/renovation.png",
      title: "Interior and Renovation",
      insideTitle: [
        {
          id: 1,
          title: "Home Interiors",
          image: "home/renovation.png",
        },
        { id: 2, title: "Home Renovation", image: "home/painting.png" },
      ],
    },
    {
      id: 7,
      image: "/home/air-conditioner.png",
      title: "AC Service & Repair",
      offer: "Upto 30% off*",
    },
    {
      id: 8,
      image: "/home/legal.png",
      title: "Legal Services",
      insideTitle: [
        {
          id: 1,
          title: "Buyer Legal",
          image: "home/legal.png",
        },
        { id: 2, title: "Tenant Verification", image: "home/painting.png" },
      ],
    },
  ];

  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [modalNumber, setModalNumber] = useState(null);

  const toggleServiceModal = (id) => {
    setModalNumber(modalNumber === id ? null : id);
    setServiceModalOpen(!serviceModalOpen);
  };

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
          <div className="grid grid-cols-4 gap-8 px-4 md:px-0 md:gap-1 h-fit">
            {topData.map((item, i) => (
              <div key={i} onClick={() => toggleServiceModal(i)}>
                {item.title === "Rental Agreement" ||
                item.title === "AC Service & Repair" ? (
                  <Link
                    to={`${
                      item.title === "Rental Agreement"
                        ? "/rental-agreement"
                        : item.title === "AC Service & Repair"
                        ? "/ac-service-and-repait"
                        : null
                    }`}
                    className="flex flex-col items-center text-center md:gap-4 rounded-full md:p-2"
                  >
                    <div className="bg-orange-200/70 text-[9px] font-medium px-1 rounded-full absolute">
                      {item.offer}
                    </div>
                    <div className="rounded-full bg-white p-3 cursor-pointer">
                      <img
                        src={item.image}
                        alt=""
                        className="m-0 w-8 mx-auto"
                      />
                    </div>
                    <div className="text-[11px] text-white w-10/12">
                      {item.title}
                    </div>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center text-center md:gap-4 rounded-full md:p-2">
                    <div className="bg-orange-200/70 text-[9px] font-medium px-1 rounded-full absolute">
                      {item.offer}
                    </div>
                    <div className="rounded-full bg-white p-3 cursor-pointer">
                      <img
                        src={item.image}
                        alt=""
                        className="m-0 w-8 mx-auto"
                      />
                    </div>
                    <div className="text-[11px] text-white w-10/12">
                      {item.title}
                    </div>
                  </div>
                )}
                {modalNumber === i && (
                  <Modal
                    onClose={() => setServiceModalOpen(false)}
                    isOpen={serviceModalOpen}
                  >
                    <div className="bg-white p-8 rounded-xl">
                      <div>{item.title}</div>
                      <div className="grid grid-cols-3">
                        {item?.insideTitle?.map((item, index) => (
                          <Link to={`/${item.title}`} key={index}>
                            <div className="grid flex-col items-center text-center md:gap-4 rounded-full md:p-2">
                              <div className="bg-orange-200/70 text-[9px] font-medium px-1 rounded-full absolute">
                                {item.offer}
                              </div>
                              <div className="rounded-full w-fit mx-auto bg-zinc-100 p-3 cursor-pointer">
                                <img
                                  src={item.image}
                                  alt=""
                                  className="m-0 w-8"
                                />
                              </div>
                              <div className="text-[11px] w-10/12 mx-auto">
                                {item.title}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Modal>
                )}
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
