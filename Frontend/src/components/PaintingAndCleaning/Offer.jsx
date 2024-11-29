import React from "react";

const Offer = () => {
  return (
    <>
      <div className="flex flex-col px-[140px] py-5">
        <div className="text-center text-3xl font-medium">Offers for you</div>
        <div className="flex gap-4 mx-10 mt-4">
          <div className="w-full bg-[url(/paintingAndCleaning/backgroundCar.png)] rounded-lg">
            <div
              className={`bg-no-repeat bg-right px-4 py-1`}
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
                <button className="text-white text-xs bg-[#ffffff40] px-2 py-1 rounded-full w-fit">
                  Know More
                </button>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#dbf3ed] rounded-lg">
            <div
              className={`bg-no-repeat px-4 py-1 text-[#276743]`}
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
                <button className="text-xs bg-white px-2 py-1 rounded-full w-fit">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#dbeef4] rounded-lg">
            <div
              className={`bg-no-repeat px-4 py-1 text-[#257c98]`}
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
                <button className="text-xs bg-white px-2 py-1 rounded-full w-fit">
                  Book More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#dae4f7] grid grid-cols-2 gap-3 py-10 px-[140px]">
        <div className="bg-white flex items-center justify-evenly px-2 py-3 rounded-lg h-48">
          <img
            src="https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/painting_hs.svg"
            alt=""
          />
          <div className="w-1/2 text-center flex flex-col items-center">
            <div className="font-bold text-xl">Festive Painting</div>
            <img
              src="https://assets.nobroker.in/hs-new/public/Home-Services/arrow-icon-right.svg"
              alt=""
            />
            <div className="opacity-50 text-sm">Flat 25% off</div>
          </div>
        </div>
        <div className="bg-white flex items-center justify-evenly gap-4 px-2 py-3 rounded-lg h-48">
          <img
            src="https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/cleaning_hs.svg"
            alt=""
          />
          <div className="w-1/2  text-center flex flex-col items-center">
            <div className="font-bold text-xl">Deep Cleaning</div>
            <img
              src="https://assets.nobroker.in/hs-new/public/Home-Services/arrow-icon-right.svg"
              alt=""
            />
            <div className="opacity-50 text-sm">Upto 60% off</div>
          </div>
        </div>
        <div className="bg-white flex items-center justify-evenly gap-4 px-2 py-4 rounded-lg col-span-2">
          <img
            src="https://assets.nobroker.in/hs-new/public/Home/newServicesIcons/repair_hs.png"
            alt=""
          />
          <div>
            <div className="font-bold text-xl">Home Repairs</div>
            <img
              src="https://assets.nobroker.in/hs-new/public/Home-Services/arrow-icon-right.svg"
              alt=""
              className="m-0"
            />
            <div className="opacity-50 text-sm">Starting @ ₹99</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
