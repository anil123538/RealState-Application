import React, { useState } from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";

const InSpotlight = () => {
  const data = [
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
  ];

  const [openModal, setOpenModal] = useState(false);

  const toggleModalOpenClose = () => {
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className="text-3xl font-semibold text-center">In Spotlight</div>
      <div className="flex gap-12 items-center justify-center mt-10 mx-auto 2xl:max-w-[1280px]">
        <video
          src="videos/Diwali_cleaning.mp4"
          alt="video"
          autoPlay
          loop
          controls="play"
          className="w-5/12 2xl:w-7/12 rounded-lg"
        />
        <div className="flex flex-col gap-8 w-1/3">
          <div className="">
            <div className="text-3xl mb-2">Get Free Instant Quote</div>
            <div className="text-2xl opacity-80 ">
              Get guaranteed lowest priced quote for your shifting instantly
            </div>
          </div>
          <button
            className="text-white text-2xl w-fit bg-[#004953] px-8 py-4 rounded-md"
            onClick={() => toggleModalOpenClose()}
          >
            Check Price
          </button>
        </div>
        {openModal ? (
          <Modal onClose={closeModal} isOpen={openModal}>
            <div className="bg-white p-8 rounded-xl">
              <div className="grid grid-cols-3">
                {data?.map((item, index) => (
                  <Link to={`/${item.title}`} key={index}>
                    <div className="grid flex-col items-center text-center md:gap-4 rounded-full md:p-2">
                      <div className="bg-orange-200/70 text-[9px] font-medium px-1 rounded-full absolute">
                        {item.offer}
                      </div>
                      <div className="rounded-full w-fit mx-auto bg-zinc-100 p-3 cursor-pointer">
                        <img src={item.image} alt="" className="m-0 w-8" />
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
        ) : null}
      </div>
    </div>
  );
};

export default InSpotlight;
