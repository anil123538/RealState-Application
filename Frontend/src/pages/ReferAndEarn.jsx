import React from "react";

const ReferAndEarn = () => {
  return (
    <div>
      <div>
        <div className="bg-[url(referAndEarn/clickAndEarnbanner.svg)] h-72 w-full bg-no-repeat"></div>
        <div className="text-center text-3xl opacity-90 font-extralight py-8">
          <p>
            Click a Pic or Refer owner details to <b>earn upto ₹120 </b>for
          </p>
          <p>every property listing we publish.</p>
        </div>
        <div className="text-3xl text-teal-600 py-8 font-extralight text-center">
          Cool! How do I do it ?
        </div>

        <div className="flex justify-around mb-10">
          <img
            src="referAndEarn\enter-owner-details.png"
            alt=""
            className="m-0"
          />
          <div className="text-right">
            <div className="text-xl font-extralight mb-24">
              Share contact details of the property owner and get rewarded
            </div>
            <button className="p-3 bg-teal-600 text-white">
              Enter Owner Details
            </button>
          </div>
        </div>

        <div className="flex py-8 justify-around text-2xl font-extralight">
          <div>
            <p>
              Alternatively, click and upload a picture of <br /> the 'TO
              LET',or 'FOR SALE' board outside any house, plot or commercial
              property in
            </p>
            <p className="font-bold">
              Bangalore, Mumbai, Pune, Chennai, Gurgaon, Hyderabad, Delhi,
              Noida, Greater Noida, Ghaziabad, Faridabad
            </p>
          </div>
          <div>
            <img src="/referAndEarn\Camera.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
