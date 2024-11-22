import React from "react";
import { Link } from "react-router-dom";

const CheckEligibility = ({ selectedOption }) => {
  const buyData = [
    {
      id: 1,
      image: "home/builder_project.png",
      text: "Builder Projects",
      condition: "New",
    },
    {
      id: 2,
      image: "home/sale_agreement.png",
      text: "Sale Agreement",
      condition: "New",
    },
    {
      id: 3,
      image: "home/home_loan.png",
      text: "Home Loan",
      condition: "",
    },
    {
      id: 4,
      image: "home/property_legal_services.png",
      text: "Property Legal Services",
      condition: "",
    },
    {
      id: 5,
      image: "home/home_interiors.svg",
      text: "Home Interiors",
      condition: "Sale is live!",
    },
    {
      id: 6,
      image: "home/NoBroker_for_nris.png",
      text: "NoBroker For NRIs",
      condition: "",
    },
  ];

  const rentData = [
    {
      id: 1,
      image: "home/packers_&_movers.png",
      text: "Packers & Movers",
      condition: "Lowest Price",
    },
    {
      id: 2,
      image: "home/pay_rent.png",
      text: "Pay rent",
      condition: "New Offers",
    },
    {
      id: 3,
      image: "home/rental_agreement_1.png",
      text: "Rental Agreement",
      condition: "Flat 30% off",
    },
    {
      id: 4,
      image: "https://assets.nobroker.in/nb-new/public/Home/ClicknEarn.svg",
      text: "Click & Earn",
      condition: "",
    },
    {
      id: 5,
      image: "home/painting_&_cleaning.png",
      text: "starPainting & Cleaning",
      condition: "New",
    },
    {
      id: 6,
      image: "home/NoBroker_for_nris.png",
      text: "NoBroker For NRIs",
      condition: "",
    },
  ];

  const whyUseNoBroker = [
    {
      id: 1,
      image: "home/avoid_brokers.png",
      heading: "Avoid Brokers",
      text: "We directly connect you to verified owners to save brokerage",
    },
    {
      id: 2,
      image: "home/free_listing.png",
      heading: "Free Listing",
      text: "Easy listing process. Also using WhatsApp",
    },
    {
      id: 3,
      image: "home/shortlist_without_visit.png",
      heading: "Shortlist without Visit",
      text: "Extensive Information makes it easy",
    },
    {
      id: 4,
      image: "home/rental_agreement_2.png",
      heading: "Rental Agreement",
      text: "Assistance in creating Rental agreement & Paper work",
    },
  ];

  return (
    <div className="">
      <div className="text-sm mt-4">
        {selectedOption === "Buy" || selectedOption === "Rent" ? (
          <div className="bg-[#384d6c] p-3.5 flex items-center justify-center gap-2.5">
            <img src="home/check_eligibility.png" alt="" className="mr-0" />
            <div className="text-white font-extralight">
              <span>Do you know how much </span>
              <span className="font-bold">loan </span>
              <span>you can get? Get maximum with </span>
              <span className="font-bold">NoBroker</span>
            </div>
            <button className="bg-white px-2 py-1.5 rounded-md text-xs">
              Check Eligibility
            </button>
          </div>
        ) : selectedOption === "Commercial" ? (
          <div className="bg-[#384d6c] p-3.5 flex items-center justify-center gap-2.5">
            <img
              src="https://assets.nobroker.in/static/img/icon/homeCreditCard_icon.png"
              alt=""
              className="mr-0"
            />
            <div className="text-white">
              <span>Earn rewards upto </span>
              <span className="font-bold">R.30,000 </span>
              <span>when you pay rent with </span>
              <span className="font-bold">credit card</span>
            </div>
            <button className="bg-white px-2 py-1.5 rounded-md text-xs">
              <Link to="/PayRent">Pay Rent Now</Link>
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex justify-between items-end overflow-x-auto gap-4 px-20">
        {(selectedOption === "Buy" ? buyData : rentData).map((item) => (
          <Link
            to={`/${item.text.toLowerCase().replaceAll(" ", "-")}`}
            key={item.id}
          >
            <div className="flex flex-col md:justify-center items-center text-center p-2 cursor-pointer !border md:!border-0 rounded-tl-2xl rounded-br-2xl">
              {item.condition && (
                <span className="text-[11px] bg-orange-200/50 px-2 py-1 rounded-2xl mb-1 w-fit">
                  {item.condition}
                </span>
              )}
              <img
                src={item.image}
                alt=""
                className="mr-0 w-[60px] h-[60px] hover:scale-110 transition duration-300"
              />
              <span className="mt-3 text-xs font-light">{item.text}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="py-10">
        <div className="flex flex-nowrap items-center justify-center gap-4">
          <hr className="w-full opacity-40" />
          <h2 className="text-[30px] opacity-60">Why&nbsp;use&nbsp;NoBroker</h2>
          <hr className="w-full opacity-40" />
        </div>
        <div>
          <div className="flex flex-row justify-between gap-4 mt-8">
            {whyUseNoBroker.map((item) => (
              <Link key={item.id}>
                <div className="flex flex-col gap-2 items-center text-center">
                  <img
                    src={item.image}
                    alt=""
                    className="mr-0 w-auto h-auto hover:scale-125 transition duration-300"
                  />
                  <div className="">{item.heading}</div>
                  <span className="text-xs font-light w-8/12">{item.text}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 py-10">
        <div>
          <div className="grid grid-cols-4 items-center text-center">
            <hr className="opacity-20" />
            <div className="text-3xl col-span-2 opacity-50">
              NoBroker Business Assit Plan For Builders
            </div>
            <hr className="opacity-20" />
          </div>
          <div className="flex items-center justify-center gap-10 mt-10">
            <img src="home/builder_assist.png" alt="Builder Assist" />
            <div>
              <div className="mb-10 opacity-70">
                Get in touch with us to Sell or Rent Your Projects
              </div>
              <button className="bg-red-500 text-white p-3">Enquire Now</button>
              <hr className="m-0 opacity-10" />
              <div className="text-xs">
                For Builder Enquiries: +91 91080 50400
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="flex items-center justify-between gap-4">
          <hr className="w-full opacity-20" />
          <div className="min-w-fit text-3xl opacity-70">
            We Make A Difference
          </div>
          <hr className="w-full opacity-20" />
        </div>

        <div className="flex justify-center items-center gap-14 mt-10">
          <div className="flex flex-col items-center gap-2">
            <div className="border-2 border-red-500 text-red-500 text-4xl h-[170px] w-[170px] rounded-full text-center leading-[170px]">
              R130 cr+
            </div>
            <div className="text-xl">Brokerage saved monthly</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="border-2 border-red-500 text-red-500 text-4xl h-[170px] w-[170px] rounded-full flex items-center text-center justify-center">
              30 lakh +
            </div>
            <div className="text-xl">Customers Connected Monthly</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="border-2 border-red-500 text-red-500 text-4xl h-[170px] w-[170px] rounded-full flex items-center text-center justify-center">
              2 lakh +
            </div>
            <div className="text-xl">New Listings Monthly</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEligibility;
