import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import FrequentAskedQuestion from "../components/FrequentAskedQuestion";

const ReferAndEarn = () => {
  const review = [
    {
      id: 1,
      user_image: "referAndEarn/profile.jpg",
      user_name: "Mohamme Kouse",
      star: 5,
      description: `The NESTATE app is very useful. I have also earned money by using the Refer & Earn option. I have also earned 21000 in last 30 days with the Refer & Earn option. The NESTATE company customer care is excellent at handling their customers. So I am giving them a 5-star rating.
  
`,
    },
    {
      id: 2,
      user_image: "referAndEarn/profile2.jpg",
      user_name: "Ayan",
      star: 5,
      description: `Wow! I am really amazed. Refer n Earn is awesome, I really earn by just clicking pictures of To-Let boards. Even many of my friends are also earning by this. The processing of leads is very fast and me and my friends are very happy. This is a great concept`,
    },
  ];

  const faq = [
    {
      id: 1,
      que: "I had submitted my listing, but it has been rejected. Why?",
      ans: "A Refer & Earn entry is not entitled to reward for the following reasons: 1. The house of the Owner was already listed on NESTATE.in 2. The house of the Owner has already been rented out. 3. The contact provided by you belongs to a Broker.",
    },
    {
      id: 2,
      que: "How will I get the reward money?",
      ans: {
        1: "To redeem your reward money:",
        2: "1. Download NESTATE App from App Store: ",
      },
    },
    {
      id: 3,
      que: "Can I get the reward directly in my account?",
      ans: "Yes, you can get the reward directly in your bank account, by setting UPI as preferred payment mode.",
    },
    {
      id: 4,
      que: "I have submitted my listing, but have not received the reward?",
      ans: "Please bear with us for some time as we are verifying your claim. This will be reviewed and we will get back to you ASAP.",
    },
  ];
  return (
    <div>
      <div className="bg-[url(referAndEarn/clickAndEarnbanner.svg)] md:h-72 h-20 w-full bg-no-repeat bg-contain"></div>
      <div className="text-center md:text-3xl opacity-90 font-extralight md:py-8 py-4">
        <p className="text-sm md:text-3xl">
          Click a Pic or Refer owner details to <b>earn upto ₹120 </b>for
        </p>
        <p>every property listing we publish.</p>
      </div>
      <div className="md:text-3xl text-lg font-semibold text-[#004958] md:py-8 py-4 mdfont-extralight text-center">
        Cool! How do I do it ?
      </div>

      <div className="flex flex-col md:flex-row md:justify-around mb-10 items-center">
        <img
          src="referAndEarn\enter-owner-details.png"
          alt=""
          className="m-0 w-28 md:w-fit"
        />
        <div className="md:text-right text-center mt-4">
          <div className="md:text-xl text-sm md:font-extralight font-medium w-4/6 md:w-full mx-auto my-5 md:mb-24">
            Share contact details of the property owner and get rewarded
          </div>
          <button className="p-3 bg-[#004958] text-white">
            Enter Owner Details
          </button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse md:py-8 py-4 justify-around  text-sm md:text-2xl bg-[#f9f9f9] items-center text- md:text-left">
        <div>
          <div className="md:mb-12 my-6">
            <p className="md:font-extralight font-light">
              Alternatively, click and upload a picture of <br /> the 'TO
              LET',or 'FOR SALE' board outside any house, plot or commercial
              property in
            </p>
            <p className="font-medium">
              Bangalore, Mumbai, Pune, Chennai, Gurgaon, <br /> Hyderabad,
              Delhi, Noida, Greater Noida, Ghaziabad, <br /> Faridabad
            </p>
          </div>
          <div className="flex md:block justify-center gap-4">
            <button className="bg-[#004958] text-white font-bold text-sm px-4 py-3 rounded-sm hover:bg-teal-700">
              Upload Photo
            </button>
            <button className="bg-[#004958] text-white font-bold text-sm px-4 py-3 rounded-sm hover:bg-teal-700 md:hidden">
              Take Photo
            </button>
          </div>
        </div>
        <div>
          <img
            src="/referAndEarn\Camera.png"
            alt=""
            className="m-0 w-40 md:w-fit"
          />
        </div>
      </div>

      <div className="md:py-9 py-4 px-4">
        <div className="md:text-3xl text-lg text-[#004958] text-center md:font-extralight font-medium">
          A little extra dough is always welcome
        </div>
        <div className="flex justify-around md:py-9 py-4">
          <img
            src="/referAndEarn/tiltWallet.png"
            alt=""
            className="m-0 w-24 h-20 md:w-fit md:h-fit"
          />

          <div className="text-right">
            <div className="md:text-xl text-left md:font-extralight font-semibold text-sm">
              <p>Our partners are earning additional 25-30K through our</p>
              <p className="mb-5">
                <span className="font-semibold">Refer & Earn </span>
                platform.
              </p>
              <div className="text-right md:block hidden">
                <p className="text-left mb-28">
                  What will <span className="font-semibold">You </span>do with
                  all that extra money ?
                </p>
                <button className="bg-[#004958] text-white md:font-bold text-sm px-4 py-3 rounded-sm hover:bg-teal-700 min-w-fit">
                  I'm In
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden items-center justify-between">
          <p className="text-sm">
            What will <span className="font-semibold">You </span>do with all
            that extra money ?
          </p>
          <button className="bg-[#004958] text-white md:font-bold text-sm px-4 py-3 rounded-sm hover:bg-teal-700 min-w-fit">
            I'm In
          </button>
        </div>
      </div>

      {/* customer stories */}
      <div className="md:w-10/12 p-5 mx-auto">
        <div className="text-lg font-semibold">Customer stories</div>
        <div className="flex gap-14 xl:gap-12 flex-nowrap overflow-x-auto mt-10">
          {review.map((item, index) => (
            <div
              key={index}
              className="bg-[#f3f3f3] p-3 min-w-[300px] xl:min-w-[430px] xl:h-64 h-56 overflow-y-auto mb-2"
            >
              <div className="flex items-center">
                <img
                  src={item.user_image}
                  alt=""
                  className="w-9 h-9 rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <div className="text-[13px]">{item.user_name}</div>
                  <div className="flex">
                    {Array.from({ length: item.star }).map((_, index) => (
                      <img
                        src="https://assets.NESTATE.in/nb-new/public/star.png"
                        alt=""
                        key={index}
                        className="w-4 mr-0"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="font-semibold text-sm">{item.heading}</div>
                <div className="text-[12.5px]">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-3" />
      </div>
      {/* Common questions */}
      <div className="md:w-10/12 mx-auto p-4">
        <FrequentAskedQuestion
          title={"Common Questions"}
          faq={faq}
          textColor={"text-teal-600"}
        />
      </div>
    </div>
  );
};

export default ReferAndEarn;
