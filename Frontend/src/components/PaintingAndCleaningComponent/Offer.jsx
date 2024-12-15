import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";

const Offer = ({ offerData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalNumber, setModalNumber] = useState(null);

  const toggleModalOpenClose = (id) => {
    setModalNumber(id);
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setModalNumber(null);
    setOpenModal(false);
  };

  return (
    <>
      <div className="flex flex-col py-5 mb-1.5 bg-white">
        <div className="xl:max-w-[1280px] md:px-[140px] xl:px-[140px] xl:mx-auto">
          <div className="text-center text-3xl font-medium">Offers for you</div>
          <div className="flex flex-nowrap gap-4 mt-4 mx-4 md:mx-0 overflow-x-auto no-scrollbar">
            <div className="min-w-56 lg:min-w-80 bg-[url(/paintingAndCleaning/backgroundCar.png)] rounded-lg">
              <div
                className={`bg-no-repeat bg-right p-4`}
                style={{
                  backgroundImage: `url(/paintingAndCleaning/newVIPIconWithCircle.png)`,
                  backgroundSize: "30%",
                }}
              >
                <div className="w-9/12 flex flex-col gap-2">
                  <div className="text-white/50 text-sm">VIP MEMBERSHIP</div>
                  <div className=" text-[#ffeaa6] font-bold text-lg">
                    Get upto 15% discount on home services
                  </div>
                  <button className="text-white text-xs bg-[#ffffff40] px-2 py-1 rounded-full w-fit cursor-pointer shadow-md">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            <div className="min-w-56 lg:min-w-80 bg-[#dbf3ed] rounded-lg">
              <div
                className={`bg-no-repeat p-4 text-[#276743]`}
                style={{
                  backgroundImage: `url(/paintingAndCleaning/painting-offer.webp)`,
                  backgroundPosition: "right center",
                  backgroundSize: "40%",
                }}
              >
                <div className="w-8/12 flex flex-col gap-2">
                  <div className="text-xs">Festival Sale</div>
                  <div className="font-bold text-xl">
                    Flat 25% off on Home Painting
                  </div>
                  <button
                    className="text-xs bg-white px-2 py-1 rounded-full w-fit cursor-pointer shadow-md"
                    onClick={() => toggleModalOpenClose(1)}
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>

            <div className="min-w-56 lg:min-w-80 bg-[#dbeef4] rounded-lg">
              <div
                className={`bg-no-repeat p-4 text-[#257c98]`}
                style={{
                  backgroundImage: `url(/paintingAndCleaning/cleaning-offer.webp)`,
                  backgroundPosition: "right center",
                  backgroundSize: "40%",
                }}
              >
                <div className="w-8/12 flex flex-col gap-2">
                  <div className="text-xs">Lowest rates</div>
                  <div className="font-bold text-xl">
                    Upto 60% off on Home Cleaning
                  </div>
                  <button
                    className="text-xs bg-white px-2 py-1 rounded-full w-fit cursor-pointer shadow-md"
                    onClick={() => toggleModalOpenClose(2)}
                  >
                    Book More
                  </button>
                </div>
              </div>
            </div>

            <div className="min-w-56 lg:min-w-80 bg-[#f0f6d6] rounded-lg">
              <div
                className={`bg-no-repeat p-4 text-[#257c98]`}
                style={{
                  backgroundImage: `url(/paintingAndCleaning/painting-offer.webp)`,
                  backgroundPosition: "right center",
                  backgroundSize: "40%",
                }}
              >
                <div className="w-8/12 flex flex-col gap-2">
                  <div className="text-xs">Same day delivery</div>
                  <div className="font-bold text-xl">
                    Flat 25% off on Rental agreement
                  </div>
                  <Link to={"/rental-agreement"}>
                    <button className="text-xs bg-white px-2 py-1 rounded-full w-fit cursor-pointer shadow-md">
                      Create Agreement
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="min-w-56 lg:min-w-80 bg-[#f2edfc] rounded-lg">
              <div
                className={`bg-no-repeat p-4 text-[#55389b]`}
                style={{
                  backgroundImage: `url(/paintingAndCleaning/cleaning-offer.webp)`,
                  backgroundPosition: "right center",
                  backgroundSize: "40%",
                }}
              >
                <div className="w-8/12 flex flex-col gap-2">
                  <div className="text-xs">bonanza</div>
                  <div className="font-bold text-xl">
                    Upto 60% off on Packers & Movers
                  </div>
                  <button
                    className="text-xs bg-white px-2 py-1 rounded-full w-fit cursor-pointer shadow-md"
                    onClick={() => toggleModalOpenClose(3)}
                  >
                    Estimate Moving Cost
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <Modal isOpen={openModal} onClose={closeModal}>
          <div className="bg-white p-4 rounded-xl">
            <div className="grid grid-cols-3">
              {offerData[modalNumber - 1]?.items.map((item, index) => (
                <div>
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
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Offer;
