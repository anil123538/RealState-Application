import React from "react";

const Offer = () => {
  return (
    <>
      <div className="flex flex-col md:px-[140px] py-5 mb-1.5 bg-white">
        <div className="2xl:max-w-[1280px] 2xl:mx-auto">
          <div className="text-center text-3xl font-medium">Offers for you</div>
          <div className="flex flex-nowrap gap-4 mt-4 mx-4 overflow-x-auto no-scrollbar">
            <div className="min-w-56 bg-[url(/paintingAndCleaning/backgroundCar.png)] rounded-lg">
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

            <div className="min-w-56 bg-[#dbf3ed] rounded-lg">
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

            <div className="min-w-56 bg-[#dbeef4] rounded-lg">
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

            <div className="min-w-56 bg-[url(/paintingAndCleaning/backgroundCar.png)] rounded-lg">
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

            <div className="min-w-56 bg-[#dbf3ed] rounded-lg">
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

            <div className="min-w-56 bg-[#dbeef4] rounded-lg">
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
      </div>
    </>
  );
};

export default Offer;
