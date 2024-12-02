import React from "react";

const SecondOffer = ({ title }) => {
  const offer = [
    {
      id: 1,
      image:
        "https://assets.NESTATE.in/hs-new/public/Home/newServicesIcons/painting_hs.svg",
      title: "Festive Painting",
      offer: "Flat 25% off",
    },
    {
      id: 2,
      image:
        "https://assets.NESTATE.in/hs-new/public/Home/newServicesIcons/cleaning_hs.svg",
      title: "Deep Cleaning",
      offer: "Upto 60% off",
    },
  ];
  return (
    <div className="bg-[#dae4f7] py-10 px-4 mb-1.5">
      <div className="text-center font-medium mb-4 text-3xl">{title}</div>
      <div className="grid grid-cols-2 gap-3 md:px-[140px]">
        {offer.map((item) => (
          <div
            key={item.id}
            className="bg-white flex flex-col md:flex-row items-center justify-evenly px-2 py-3 rounded-lg h-48 gap-3"
          >
            <img src={item.image} className="m-0" alt="" />
            <div className="md:w-1/2 text-center flex flex-col items-center">
              <div className="font-bold md:text-xl text-sm flex item">
                {item.title}
                <img
                  src="https://assets.NESTATE.in/hs-new/public/Home-Services/arrow-icon-right.svg"
                  alt=""
                  className="m-0"
                />
              </div>
              <div className="opacity-50 text-sm">Flat 25% off</div>
            </div>
          </div>
        ))}

        <div className="bg-white flex items-center justify-evenly gap-4 px-2 py-4 rounded-lg col-span-2">
          <img
            src="https://assets.NESTATE.in/hs-new/public/Home/newServicesIcons/repair_hs.png"
            alt=""
          />
          <div>
            <div className="font-bold text-sm md:text-xl flex">
              Home Repairs
              <img
                src="https://assets.NESTATE.in/hs-new/public/Home-Services/arrow-icon-right.svg"
                alt=""
                className="m-0"
              />
            </div>
            <div className="opacity-50 text-sm">Starting @ ₹99</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondOffer;
