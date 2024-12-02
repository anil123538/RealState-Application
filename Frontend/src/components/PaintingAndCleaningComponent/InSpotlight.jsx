import React from "react";

const InSpotlight = () => {
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
          className="w-5/12 2xl:w-8/12 rounded-lg"
        />
        <div className="flex flex-col gap-8 w-1/3">
          <div className="w-3/4">
            <div className="text-3xl mb-2">Get Free Instant Quote</div>
            <div className="text-2xl opacity-80 ">
              Get guaranteed lowest priced quote for your shifting instantly
            </div>
          </div>
          <button className="text-white text-2xl w-fit bg-[#004953] px-8 py-4 rounded-md">
            Check Price
          </button>
        </div>
      </div>
    </div>
  );
};

export default InSpotlight;
