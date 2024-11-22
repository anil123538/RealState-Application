import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const ReferAndEarn = () => {
  const review = [
    {
      id: 1,
      user_image:
        "https://assets.nobroker.in/images/testimonials/ff80818155ac0fe40155af6ca8df1302_2016.10.06.12.05.00.jpg",
      user_name: "Mohamme Kouse",
      star: 5,
      description: `The NoBroker app is very useful. I have also earned money by using the Refer & Earn option. I have also earned 21000 in last 30 days with the Refer & Earn option. The NoBroker company customer care is excellent at handling their customers. So I am giving them a 5-star rating.
  
`,
    },
    {
      id: 2,
      user_image:
        "https://assets.nobroker.in/images/testimonials/ff8081814dc793fa014dc8d20faf1045_2016.10.06.12.03.04.jpg",
      user_name: "Ayan",
      star: 5,
      description: `Wow! I am really amazed. Refer n Earn is awesome, I really earn by just clicking pictures of To-Let boards. Even many of my friends are also earning by this. The processing of leads is very fast and me and my friends are very happy. This is a great concept`,
    },
  ];

  const [multipleFaqExpanded, setMultipleFaqExpanded] = useState([]);

  const toggleFaq = (index) => {
    if (multipleFaqExpanded.includes(index)) {
      setMultipleFaqExpanded(
        multipleFaqExpanded.filter((item) => item != index)
      );
    } else {
      setMultipleFaqExpanded([...multipleFaqExpanded, index]);
    }
  };

  const faq = [
    {
      id: 1,
      que: "I had submitted my listing, but it has been rejected. Why?",
      ans: "A Refer & Earn entry is not entitled to reward for the following reasons: 1. The house of the Owner was already listed on NoBroker.in 2. The house of the Owner has already been rented out. 3. The contact provided by you belongs to a Broker.",
    },
    {
      id: 2,
      que: "How will I get the reward money?",
      ans: {
        1: "To redeem your reward money:",
        2: "1. Download NoBroker App from App Store: ",
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

      <div className="flex py-8 justify-around text-[22px] bg-[#f9f9f9]">
        <div>
          <div className="mb-12">
            <p className="font-extralight">
              Alternatively, click and upload a picture of <br /> the 'TO
              LET',or 'FOR SALE' board outside any house, plot or commercial
              property in
            </p>
            <p className="font-medium">
              Bangalore, Mumbai, Pune, Chennai, Gurgaon, <br /> Hyderabad,
              Delhi, Noida, Greater Noida, Ghaziabad, <br /> Faridabad
            </p>
          </div>
          <button className="bg-teal-600 text-white font-bold text-sm px-4 py-3 rounded-sm hover:bg-teal-700">
            Upload Photo
          </button>
        </div>
        <div>
          <img src="/referAndEarn\Camera.png" alt="" className="m-0" />
        </div>
      </div>

      <div className="py-9">
        <div className="text-3xl  text-teal-600 text-center font-extralight">
          A little extra dough is always welcome
        </div>
        <div className="flex justify-around py-9">
          <div>
            <img src="/referAndEarn/tiltWallet.png" alt="" className="m-0" />
          </div>
          <div className="text-right">
            <div className="text-xl text-left font-extralight">
              <p>Our partners are earning additional 25-30K through our</p>
              <p className="mb-5">
                <span className="font-semibold">Refer & Earn </span>
                platform.
              </p>
              <p>
                What will <span className="font-semibold">You </span>do with all
                that extra money ?
              </p>
            </div>
            <button className="bg-teal-600 text-white font-bold text-sm px-4 py-3 rounded-sm hover:bg-teal-700">
              I'm In
            </button>
          </div>
        </div>
      </div>

      {/* customer stories */}
      <div className="w-10/12 p-5 mx-auto">
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
                        src="https://assets.nobroker.in/nb-new/public/star.png"
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

      <div className="w-10/12 mx-auto p-5">
        <div className="font-semibold text-lg py-6">Common questions</div>
        <div className="bg-white rounded-xl py-5">
          {faq.map((item, i) => (
            <div key={i}>
              <div
                className="flex justify-between cursor-pointer py-2"
                onClick={() => toggleFaq(i)}
              >
                <div className="flex flex-col w-full">
                  <div
                    className={`font-medium flex justify-between ${
                      multipleFaqExpanded.includes(i) ? "text-teal-600" : ""
                    }`}
                  >
                    <div className="py-2 text-sm">{item.que}</div>
                    <div>
                      <FaPlus
                        className={`${
                          multipleFaqExpanded.includes(i)
                            ? "rotate-45 duration-200 ease-linear"
                            : "duration-200 ease-linear"
                        }`}
                      />
                    </div>
                  </div>
                  {multipleFaqExpanded.includes(i) && (
                    <div className="text-sm font-light">{item.ans}</div>
                  )}
                </div>
              </div>
              <hr className="text-zinc-300 opacity-60 m-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
