import React from "react";
import { BiStar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
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

  const homeServicesOne = [
    {
      id: 1,
      bg_image: "home/cleaning-diwali.png",
      title: "Home Cleaning",
    },
    {
      id: 2,
      bg_image: "home/painting-diwali.png",
      title: "Home Painting",
    },
  ];

  const homeServicesTwo = [
    {
      id: 1,
      bg_image: "home/pnm-diwali.png",
      title: "Packers & Movers",
    },
    {
      id: 2,
      bg_image: "home/ra-diwali.png",
      title: "Rental Agreement",
    },
    {
      id: 3,
      bg_image: "home/plumbin-diwali.png",
      title: "Plumbing & Carpentry",
    },
    {
      id: 4,
      bg_image: "home/rent-payment-diwali.png",
      title: "Rent Payment",
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

  const assistedPlans = [
    {
      id: 1,
      image:
        "https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg",
      text: "Dedicated Property expert to guide you",
    },
    {
      id: 2,
      image:
        "https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg",
      text: "Guaranteed property or 100% refund",
    },
    {
      id: 3,
      image:
        "https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg",
      text: "Receive instant property alerts",
    },
    {
      id: 4,
      image:
        "https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg",
      text: "Explore More",
    },
  ];

  const legalServices = [
    {
      id: 1,
      image:
        "https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg",
      title: "Rental Agreement",
    },
    {
      id: 2,
      image:
        "https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg",
      title: "Tenant Verification",
    },
    {
      id: 3,
      image:
        "https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg",
      title: "Sale Agreement",
    },
    {
      id: 4,
      image:
        "https://assets.nobroker.in/nb-new/public/Home/nb_dynamic_grid_new_v5_new.svg",
      title: "Property Legal Service",
    },
  ];

  return (
    <>
      <div className="hidden md:block">
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
            <h2 className="text-[30px] opacity-60">
              Why&nbsp;use&nbsp;NoBroker
            </h2>
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
                    <span className="text-xs font-light w-8/12">
                      {item.text}
                    </span>
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
                <button className="bg-red-500 text-white p-3">
                  Enquire Now
                </button>
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

      {/* mobile view */}
      <div className="flex p-4 flex-col gap-4">
        <div className="flex justify-between">
          <div>Home Services</div>
          <div className="text-teal-600 text-xs">See All &gt;</div>
        </div>
        <div>
          <div className=" flex justify-between gap-4">
            {homeServicesOne.map((item) => (
              <div
                key={item.id}
                className={`bg-no-repeat w-48 rounded-br-3xl rounded-tl-3xl rounded-tr-lg rounded-bl-lg mx-auto bg-cover h-24`}
                style={{
                  backgroundImage: `url(${item.bg_image})`,
                }}
              >
                <div className="h-full bg-gradient-to-r from-white from-20% to-white/20 to-70% border border-[#562c0c56] rounded-br-3xl rounded-tl-3xl rounded-tr-lg rounded-bl-lg p-2 flex items-center">
                  <div className="text-sm font-semibold w-7/12">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className=" flex justify-between gap-4 overflow-x-scroll ">
            {[...homeServicesTwo, ...homeServicesTwo].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-1.5 border border-[#562c0c56] rounded-br-3xl rounded-tl-3xl rounded-tr-lg rounded-bl-lg min-w-[84px]"
              >
                <img
                  src={item.bg_image}
                  alt={item.title}
                  className="mx-auto rounded-br-3xl rounded-tl-3xl rounded-tr-lg rounded-bl-lg"
                />

                <div className="text-[11px] text-center">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        <span className="text-[11px] text-center text-[#99837A] flex items-center justify-center gap-1">
          3 Lacs + Services booked in last 3 months | 4.5
          <BiStar className="mb-1" />
        </span>
      </div>

      <div className="bg-[#f2f2f2]">
        <div className="p-4">
          <div className="bg-[url(https://assets.nobroker.in/merchandise/media/instacash-home-banner-new.webp)] bg-cover px-4 pt-4 flex flex-col gap-2 w-full">
            <div className="font-semibold">
              Get Upto <span className="text-teal-600">₹ 5Lakhs</span>
            </div>
            <div className="text-xs font-medium">Instant Cash!</div>
            <button className="bg-teal-600 font-semibold text-sm text-white p-2 w-fit rounded-md">
              Withdraw Now
            </button>
            <div className="flex text-[10px]">
              Safe. Secure. Quick |
              <img
                src="https://assets.nobroker.in/nb-new/public/Home/newHomeIcons/pcids.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between p-4 bg-white my-1">
          <div className="flex flex-col gap-3">
            <div className="font-medium text-sm">Packers & Movers</div>
            <div className="text-xs">
              Guaranteed on-time, safe delivery at great prices
            </div>
            <img
              src="https://assets.nobroker.in/nb-new/public/Home/RevampIcons/lowestPrice.png"
              alt=""
              className="w-24"
            />
            <div className="flex items-center gap-1 text-teal-600 font-semibold text-sm">
              Explore <BsArrowRight />
            </div>
          </div>
          <div className="bg-[url(https://assets.nobroker.in/nb-new/public/Home/extraservicesprite_v1.svg)] bg-cover px-4 pt-4 flex flex-col gap-2 w-40 bg-[--208px_-51px]"></div>
        </div>

        <div className="bg-[#EAE9F5] px-4 my-1">
          <div className="pt-5 font-medium">Assisted Plans</div>
          <div className="flex gap-3 overflow-x-auto pb-5 mt-4">
            {assistedPlans.map((item) => (
              <div className="flex flex-col justify-between rounded-lg p-3 gap-2 min-w-40 bg-white">
                <img src={item.image} alt="" className="w-10" />
                <div className="text-[11px]">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white my-1">
          <div className="font-medium">Legal Services</div>
          <div className="grid grid-cols-4 gap-2 mt-5">
            {legalServices.map((item) => (
              <div className="flex flex-col items-center text-center gap-3">
                <img src={item.image} alt="" className="w-10 m-0" />
                <div className="text-xs font-medium">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white my-10">
          <div>{}</div>
        </div>
      </div>
    </>
  );
};

export default CheckEligibility;
