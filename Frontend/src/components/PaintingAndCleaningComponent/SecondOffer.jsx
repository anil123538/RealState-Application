import React, { useState } from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";

const SecondOffer = ({ offer, title, titlePosition }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalNumber, setModalNumber] = useState(null);

  const toggleModalOpenClose = (id) => {
    setModalNumber(modalNumber === id ? null : id);
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setModalNumber(null);
    setOpenModal(false);
  };
  return (
    <>
      <div className={`${titlePosition} font-medium mb-4 text-white text-3xl`}>
        {title}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {offer.map((item) => (
          <div
            key={item.id}
            className="bg-white flex flex-col md:flex-row items-center justify-evenly px-2 py-3 rounded-lg h-48 gap-3"
            onClick={() => toggleModalOpenClose(item.id)}
          >
            <img src={item.image} className="m-0" alt="" />
            <div className="md:w-1/2 text-center flex flex-col items-center">
              <div className="font-bold md:text-xl text-sm flex item">
                {item.title}
                <img
                  src="paintingAndCleaning/arrow-icon-right.svg"
                  alt=""
                  className="m-0"
                />
              </div>
              <div className="opacity-50 text-sm">Flat 25% off</div>
            </div>
            {modalNumber === item.id ? (
              <Modal onClose={closeModal} isOpen={openModal}>
                <div className="bg-white p-8 rounded-xl">
                  <div className="grid grid-cols-3">
                    {item?.items?.map((item, index) => (
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
        ))}
      </div>
    </>
  );
};

export default SecondOffer;
