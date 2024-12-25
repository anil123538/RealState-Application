import React, { useState } from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import { FaCheck, FaChevronRight, FaPlus } from "react-icons/fa";
import { PiShareFatThin, PiStamp } from "react-icons/pi";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { LiaGreaterThanSolid } from "react-icons/lia";

const RentalAgreement = () => {
  const selectARentAgreement = [
    {
      id: 1,
      text: "Rental Agreement + Police Intimation",
      bgImage: "https://assets.nobroker.in/nob-common/pkgWithRaUpload.webp",
      offer: "Upto ₹100 off",
    },
    {
      id: 2,
      text: "Rental Agreement with Biometric",
      bgImage: "https://assets.nobroker.in/nob-common/pkgWithRaMh.webp",
      offer: "Upto ₹100 off",
    },
    {
      id: 3,
      text: "Rental Agreement with E-Stamp & Notary",
      bgImage: "https://assets.nobroker.in/nob-common/pkgWithEstamp.webp",
      offer: "Upto ₹100 off",
    },
  ];

  const availableAddOns = [
    {
      id: 1,
      image: "https://assets.nobroker.in/nob-common/extraVisit.webp",
      heading: "Extra Visit",
      desc: "Book additional biometric appointments in",
      bgColor: "#ffeff3",
    },
    {
      id: 2,
      image: "https://assets.nobroker.in/nob-common/techAssistance.webp",
      heading: "Tech Assistance",
      desc: "For distant registration via a biometric device",
      bgColor: "#f2f3ff",
    },
    {
      id: 3,
      image:
        "https://assets.nobroker.in/nob-common/legalIDVerificationAddon.webp",
      heading: "Tenant Verification",
      desc: "Verify your tenant's Identity Instantly.",
      bgColor: "#fff5e2",
    },
    {
      id: 4,
      image: "https://assets.nobroker.in/nob-common/legalDeliveryAddon.webp",
      heading: "Standard Delivery",
      desc: "Hard copy delivery of your agreement",
      bgColor: "rgb(255, 236, 226)",
    },
    {
      id: 5,
      image: "https://assets.nobroker.in/nob-common/powerOfAttorneyImg.svg",
      heading: "Power Of Attorney",
      desc: "Drafting of Power Of Attorney.",
      bgColor: "rgb(242, 246, 253)",
    },
  ];

  const howItWorks = [
    {
      id: 1,
      bgNumber: "",
      image: "rentalAgreement/fillDetail.webp",
      heading: "Fill Details Online",
      desc: "Customise our template agreement as per your requirement and submit the draft",
    },
    {
      id: 2,
      bgNumber: "",
      image: "rentalAgreement/lsDelivery.webp",
      heading: "Stamping & Printing",
      desc: "We print the agreement on a legal stamp paper",
    },
    {
      id: 3,
      bgNumber: "",
      image: "rentalAgreement/stamping.webp",
      heading: "Agreement is Delivered!",
      desc: "We deliver the printed agreement to you in 3-4 days",
    },
  ];

  const compareAgreement = [
    {
      id: 1,
      heading: "Upload your Draft",
      details: {
        1: "Agreement printed with legal E-Stamp",
        2: "Upload agreement with your own clauses",
        3: "Hardcopy Delivery with Same Day Delivery",
        4: "Agreement Delivery available for both Tenant/ Owner",
        5: "Starting @ ₹399 + Stamp Paper",
      },
    },
    {
      id: 2,
      heading: "E-Stamped Agreement",
      details: {
        1: "Agreement printed with legal E-Stamp",
        2: "NoBroker Draft with custom clauses",
        3: "Hardcopy Delivery with Same Day Delivery",
        4: "Agreement Delivery available for both Tenant/Owner",
        5: "Starting @ ₹399 + Stamp Paper",
      },
    },
    {
      id: 3,
      heading: "Paperless Rental Agreement with Aadhar E-Sign",
      details: {
        1: "Agreement printed with legal E-Stamp",
        2: "NoBroker Draft with custom clauses",
        3: "Paperless, remote and secure Aadhar eSign",

        4: "Get agreement digital copy Instantly, legally valid in court of law",
        5: "Go paperless and Save ₹100!",
      },
    },
  ];

  const discountCoupons = [
    {
      id: 1,
      image:
        "https://assets.nobroker.in/hs-new/public/LegalServiceNew/nbDiscount.svg",
      disPercent: "10% NB cash discount",
      upto: "Upto ₹250",
    },
    {
      id: 2,
      image:
        "https://assets.nobroker.in/hs-new/public/LegalServiceNew/hdfcCoupon.png",
      disPercent: "5% HDFC bank",
      upto: "Upto ₹1500",
    },
    {
      id: 3,
      image:
        "https://assets.nobroker.in/hs-new/public/LegalServiceNew/amazonCoupon.png",
      disPercent: "₹100 Amazon pay discount",
      upto: "On spend of ₹2000",
    },
  ];

  const otherLegalServices = [
    {
      id: 1,
      image: "rentalAgreement/backgroundVerification.webp",
      text: "Tenant verification",
    },
    { id: 2, image: "rentalAgreement/affidavit.webp", text: "Affidavit" },
    {
      id: 3,
      image: "rentalAgreement/backgroundVerification.webp",
      text: "Tenant verification Tenant verification",
    },
    { id: 4, image: "rentalAgreement/affidavit.webp", text: "Affidavit" },
  ];

  const customerReviews = [
    {
      id: 1,
      profile: "CA",
      name: "Chandan Agarwal",
      review: `" I used them for rental agreement services recently. My experience was very good. I spoke to Kavya as my relationship manager and she was very responsive. I was also very impressed with the field person (Tarique Shaikh) who came to home for biometric verification. He was professional, came on time & was very patient/pleasent to talk to."

`,
    },
    {
      id: 2,
      profile: "CA",
      name: "Chandan Agarwal",
      review: `" I used them for rental agreement services recently. My experience was very good. I spoke to Kavya as my relationship manager and she was very responsive. I was also very impressed with the field person (Tarique Shaikh) who came to home for biometric verification. He was professional, came on time & was very patient/pleasent to talk to."

`,
    },
  ];

  const faq = [
    {
      id: 1,
      que: "Do I need to visit any government office?",
      ans: "Not even once. We will conduct the whole process for you online / at your home.",
    },
    {
      id: 2,
      que: "How much will it cost?",
      ans: "Please click here to know the charges. Apart from our convenience fee, the charges typically include stamp duty, registration charges, etc.",
    },
    {
      id: 3,
      que: "Landlord and tenant are in different locations?",
      ans: "You can use the Aadhar eSign based digital signature service.",
    },
    {
      id: 4,
      que: "Is Aadhar e-sign valid?",
      ans: "Yes, Aadhaar eSign based digital signatures are a legally accepted and secure manner of electronically signing documents, under effect of Gazette Notification No. 2015 Jan -GSR 61(E) Electronic Signature or Electronic Authentication Technique and Procedure Rules, 2015.",
    },
  ];
  const [selected, setSelected] = useState(2);
  const [multipleFaqExpanded, setMultipleFaqExpanded] = useState([]);
  const [clickAddOns, setClickAddOns] = useState(null);
  const [addOnsModelOpen, setAddOnsModelOpen] = useState(null);
  const [legalServiceMouseEnter, setLegalServiceMouseEnter] = useState(null);

  const toggleClickAddOn = (id) => {
    setClickAddOns(clickAddOns === id ? null : id);
    setAddOnsModelOpen(!addOnsModelOpen);
  };

  const toggleFaq = (index) => {
    if (multipleFaqExpanded.includes(index)) {
      setMultipleFaqExpanded(
        multipleFaqExpanded.filter((item) => item != index)
      );
    } else {
      setMultipleFaqExpanded([...multipleFaqExpanded, index]);
    }
  };

  const toggleLegalServiceMouseEnter = (index) => {
    setLegalServiceMouseEnter(legalServiceMouseEnter === index ? null : index);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#1f235b] from-[450px] to-[#f0f0f0] to-[400px] py-10">
        <div className="w-[98%] xl:w-9/12 mx-auto">
          {/* online rent Agreement */}
          <div className=" h-[450px] text-white">
            <div className="w-[92%] mx-auto py-10">
              <div>
                <div className="text-3xl mb-2">
                  Online Rent Agreement in Mumbai
                </div>
                <span className="opacity-80">
                  Now available in 150+ cities in india
                </span>

                <div className="bg-white/10 w-fit p-2 rounded-md flex  gap-32 mt-4">
                  <div className="flex">
                    <img
                      src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/renew.svg"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <div>Renew Your Agreement</div>
                        <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>
                      </div>
                      <div className="text-sm opacity-80">
                        Renew your existing agreement
                      </div>
                    </div>
                  </div>
                  <img
                    src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/leftAero.svg"
                    alt=""
                    className="m-0"
                  />
                </div>
              </div>
              <div className="pt-10">
                <div className="flex whitespace-nowrap items-center">
                  <div className="uppercase w-fit">select a rent agreement</div>
                  <hr className="border w-full ml-2" />
                </div>
                <div className="flex gap-3 mt-2">
                  {selectARentAgreement.map((item) => (
                    <div
                      className={`rounded-3xl bg-white text-black w-1/3 h-80 flex flex-col justify-between py-4`}
                      style={{
                        backgroundImage: `url(${item.bgImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "top right",
                        backgroundSize: "120px",
                      }}
                    >
                      <div className="text-2xl font-medium w-2/3 px-3">
                        {item.text}
                      </div>
                      <div className="flex bg-gradient-to-r from-green-200/40 p-2 justify-between">
                        <div className="flex w-full items-center">
                          <img
                            src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/offuptoIcon.svg"
                            alt=""
                            className="mx-2 w-6"
                          />
                          <div className="text-green-700 font-medium text-xl">
                            {item.offer}
                          </div>
                        </div>
                        <img
                          src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/leftAeroPkg.svg"
                          alt=""
                          className="m-0 w-6"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SELECT A RENT AGREEMENT */}
          <div className="flex justify-center gap-2 mt-44 text-sm">
            <div className="flex items-center gap-2">
              <PiStamp className="text-3xl text-orange-800" />
              <div className="opacity-80">Mahrashtra Govt. Registered</div>
              <div className="h-[80%] border border-black/40"></div>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineSafety className="text-3xl text-orange-800" />
              <div className="opacity-80">Legally Valid Agreement</div>
              <div className="h-[80%] border border-black/40"></div>
            </div>
            <div className="flex items-center gap-2">
              <PiShareFatThin className="text-3xl text-orange-800" />
              <div className="opacity-80">Share form with tenant/Owner</div>
            </div>
          </div>

          {/* Available Add ons */}
          <div className="p-8 bg-white rounded-2xl w-11/12 mx-auto my-10">
            <div className="font-semibold text-3xl mb-8">Available Add ons</div>
            <div className="grid grid-cols-3 gap-4 flex-wrap">
              {availableAddOns.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer"
                  onClick={() => toggleClickAddOn(item.id)}
                >
                  <div
                    className="rounded-xl items-center flex justify-center"
                    style={{ backgroundColor: `${item.bgColor}` }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="h-[80%] w-[80%] m-0"
                    />
                  </div>
                  <div className="font-medium text-lg mt-2">{item.heading}</div>
                  <div className="opacity-80">{item.desc}</div>

                  {clickAddOns === item.id ? (
                    <Modal
                      isOpen={addOnsModelOpen}
                      onClose={() => setAddOnsModelOpen(false)}
                    >
                      {availableAddOns
                        .filter((item) => item.id === clickAddOns)
                        .map((item) => (
                          <div
                            key={item.id}
                            className="cursor-pointer bg-white p-4 w-80 rounded-2xl"
                          >
                            <div className="font-medium text-lg mt-2">
                              {item.heading}
                            </div>
                            <hr />
                            <div
                              className="rounded-xl items-center flex justify-center"
                              style={{ backgroundColor: `${item.bgColor}` }}
                            >
                              <img
                                src={item.image}
                                alt=""
                                className="h-[80%] w-[80%] m-0"
                              />
                            </div>
                            <div className="opacity-80 flex">
                              <RxDotFilled className="text-2xl" />
                              {item.desc}
                            </div>
                          </div>
                        ))}
                    </Modal>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="p-8 bg-white rounded-2xl w-11/12 mx-auto">
            <div className="font-semibold text-3xl mb-8">How it works</div>
            <div className="grid grid-cols-3 gap-4 flex-wrap">
              {howItWorks.map((item) => (
                <div key={item.id}>
                  <div className="rounded-xl items-center flex justify-center">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[80%] w-[80%] m-0"
                    />
                  </div>
                  <div className="font-medium text-lg mt-2">{item.heading}</div>
                  <div className="opacity-80">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Select to Compare Agreement */}
      <div className="text-white text-center py-10 bg-[#121a45]">
        <div className="w-[90%] mx-auto">
          <div className="font-medium text-3xl">
            Select to Compare Agreement
          </div>
          <div
            className={`grid grid-cols-3 xl:w-9/12 mx-auto text-left opacity-70 text-xl mt-10`}
          >
            {compareAgreement.map((item) => (
              <div
                key={item.id}
                className={`cursor-pointer focus:bg-white p-3 rounded-xl text-lg ${
                  selected === item.id ? "bg-white/30" : null
                }`}
                onClick={() => setSelected(item.id)}
              >
                <div className="mb-2">{item.heading}</div>
                {Object.values(item.details).map((itemDetail, index) => (
                  <div className="flex align-middle gap-2" key={index}>
                    <FaCheck className="mt-1" />
                    {itemDetail} helo
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <button className="px-20 py-3 border border-white border-opacity-80 rounded-md">
              Preview
            </button>
            <button className="px-20 py-3 bg-white font-medium text-lg rounded-md text-black flex items-center gap-2">
              Proceed <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f0f0] pb-10">
        <div className=" xl:w-9/12 mx-auto w-[98%] flex flex-col gap-8">
          {/* Discount Coupons */}
          <div className="bg-white rounded-xl p-8 w-[90%] mt-10 mx-auto">
            <div className="text-3xl font-semibold">Discount Coupons</div>
            <div className="text-sm">Apply Coupon at the summary Screen</div>
            <div className="flex justify-between gap-4 mt-10">
              {discountCoupons.map((item) => (
                <div className="border border-zinc-300 shadow-md p-4 w-full rounded-xl">
                  <div className="bg-zinc-200 w-fit p-1 rounded-md">
                    <img src={item.image} alt="" className="m-0" />
                  </div>
                  <hr className="m-2 text-zinc-300" />
                  <div>
                    <div className="font-semibold text-lg">
                      {item.disPercent}
                    </div>
                    <div className="opacity-70">{item.upto}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NoBroker Promise */}
          <div className="bg-white rounded-xl p-8 w-[90%] mx-auto">
            <div className="text-3xl font-semibold">NoBroker Promise</div>
            <div className="flex justify-between mt-10">
              <div className="flex flex-col gap-10">
                <div className="flex gap-2">
                  <div>
                    <img
                      src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/lowestPrice.svg"
                      alt=""
                      className="m-0"
                    />
                  </div>
                  <div>
                    <div className="text-lg text-blue font-semibold">
                      Guaranteed Lowest Prices
                    </div>
                    <div>
                      Best-in-class legal documentation at lowest prices.
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <img
                      src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/legallyValid.svg"
                      alt=""
                      className="m-0"
                    />
                  </div>
                  <div>
                    <div className="text-lg text-blue font-semibold">
                      Legally Valid
                    </div>
                    <div>
                      Make genuine documents which are legally valid in court of
                      law.
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <img
                      src="https://assets.nobroker.in/hs-new/public/LegalServiceNew/convenient.svg"
                      alt=""
                      className="m-0"
                    />
                  </div>
                  <div>
                    <div className="text-lg text-blue font-semibold">
                      100% Convenience. 0% Stress.
                    </div>
                    <div>
                      Get delighted with super fast documentation at the
                      convenience of your home.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="rentalAgreement/nBPromise.webp"
                  alt=""
                  className="m-0 w-80"
                />
              </div>
            </div>
          </div>

          {/* Other legal services that we offer */}
          <div className="bg-white rounded-xl px-8 py-12 w-[90%] mx-auto">
            <div className="font-semibold text-3xl">
              Other legal services that we offer
            </div>
            <div className="flex gap-8 overflow-x-scroll flex-nowrap mt-10">
              {[...otherLegalServices, ...otherLegalServices].map(
                (item, index) => (
                  <Link>
                    <div
                      className="text-center flex flex-col gap-2 items-center"
                      key={index}
                    >
                      <div
                        className="border border-black flex items-center justify-center w-40 h-40 rounded-full"
                        onMouseEnter={() => toggleLegalServiceMouseEnter(index)}
                        onMouseLeave={() => toggleLegalServiceMouseEnter(index)}
                      >
                        <div className="relative hover:transform hover:scale-125 ease-linear duration-200">
                          <img
                            src={item.image}
                            alt=""
                            className="m-0 w-32 h-32 mt-1 items-center rounded-full"
                          />
                          {legalServiceMouseEnter === index && (
                            <div className="absolute top-1/3 right-1/3">
                              <LiaGreaterThanSolid className="text-white text-4xl font-semibold" />
                            </div>
                          )}
                        </div>
                      </div>
                      <div>{item.text}</div>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="bg-white rounded-xl px-8 py-12 w-[90%] mx-auto">
            <div className="text-3xl font-medium">Customer Reviews</div>
            <div className="flex gap-2 items-center">
              <div className="flex text-2xl">
                <BiStar />
                <BiStar />
                <BiStar />
                <BiStar />
                <BiStar />
              </div>
              <div className="opacity-80">4.5 rating out of 4,500 Reviews</div>
            </div>
            <div className="flex gap-4 mt-10 overflow-x-auto overscroll-none">
              {[...customerReviews, ...customerReviews, ...customerReviews].map(
                (item, index) => (
                  <div
                    key={index}
                    className="min-w-80 border border-zinc-300 mb-4 shadow-md rounded-xl p-6"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-3 py-2.5 bg-green-300 rounded-full">
                        {item.profile}
                      </div>
                      <div>{item.name}</div>
                      <img
                        src="https://assets.nobroker.in/hs-new/public/Common/verifiedImg.svg"
                        alt=""
                      />
                    </div>
                    <div>{item.review}</div>
                  </div>
                )
              )}
            </div>

            <div></div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="bg-white rounded-xl px-8 py-12 w-[90%] mx-auto">
            <div className="font-semibold text-3xl mb-4">
              Frequently Asked Questions
            </div>
            {faq.map((item, i) => (
              <div key={i}>
                <div
                  className="flex justify-between cursor-pointer py-4"
                  onClick={() => toggleFaq(i)}
                >
                  <div className="flex flex-col gap-4 w-full">
                    <div
                      className={`text-xl font-medium flex justify-between ${
                        multipleFaqExpanded.includes(i) ? "text-blue" : ""
                      }`}
                    >
                      {item.que}
                      <div>
                        <FaPlus
                          className={`${
                            multipleFaqExpanded.includes(i)
                              ? "rotate-45 duration-300 ease-linear"
                              : "duration-300 ease-linear"
                          }`}
                        />
                      </div>
                    </div>
                    {multipleFaqExpanded.includes(i) && (
                      <div className="text-sm">{item.ans}</div>
                    )}
                  </div>
                </div>
                <hr className="text-zinc-300" />
              </div>
            ))}
          </div>

          {/* final text */}
          <div className="bg-white rounded-xl px-8 py-12 w-[90%] mx-auto text-sm">
            <h2 className="text-2xl font-normal">
              Creation of Rental Agreements in Bangalore
            </h2>
            <p>
              Otherwise known for its traffic, Bangalore is home to many
              startups and IT companies. As a result, the demand for commercial
              and residential space is high. Seeking job opportunities, a number
              of people travel to Bangalore and become a part of it. Though
              finding a job is relatively easy, the tough part is to get through
              the rental processing, especially understanding the nuances of a
              registered rental agreement in Bangalore, including understanding
              the rent agreement stamp paper value. <br />
              Just when you put the term ‘rental agreement in Bangalore’ across,
              individuals see it as a task of great hassle. However, it is
              necessary for you to get proper information about the online
              registration of the rental agreement and its processing in
              Bangalore, including the stamp paper value. Below we address some
              of the frequently asked questions that will make it easier for you
              to get through the process.
            </p>
            <h2 className="text-2xl font-normal">
              What are the Different Types of Rental Agreements in Bangalore?
            </h2>
            <p>
              A number of landlords make the processing of the rental agreement
              a complicated process for the tenants so that they do not have to
              create a rental document and avoid paying tax. However, there are
              many benefits that a rental agreement brings with it for the
              tenant. So, you should always insist on the creation of one.{" "}
              <br />
              Basically, there are two types of rental agreements:
            </p>
            <p>
              Rental Agreement <br />
              Lease Agreement
            </p>
            <p>
              An Online Bangalore rental agreement offers the right to tenancy
              to the tenant for a short period of time (typically 11 months).
              Once the duration ends, the period can be automatically renewed at
              latest rental agreement charges in Bangalore. The cycle continues
              until the landlord or the tenant wishes to end it with mutual
              consent.
            </p>
            <p>
              The tenant has to pay monthly rent and a one-time deposit. In most
              cases the deposit is refundable.
            </p>
            <p>
              pAs opposed to a rental agreement, a lease agreement is for a
              longer time period of 12 months or more. When any rental property
              exceeds the timeframe of 1 year, a number of laws apply to it. As
              a result, the legal documents for the same have to be framed very
              carefully, including considering the appropriate rent agreement
              stamp paper value.
            </p>
            <p>
              As the time duration of the tenancy is longer, the deposit is
              high, which is paid when the tenant vacates the property. Unlike
              the Bangalore rental agreement rules, the lease agreement is
              terminated after the lease expires. This means that the contract
              does not renew on its own. Both the tenant and the owner needs to
              go through the entire process to renew the agreement.
            </p>
            <p>
              Till the new lease agreement is made, the tenant has to pay the
              rent on a daily or weekly basis.
            </p>
            <h2 className="text-2xl font-normal">
              How Much Security Deposit Can be Charged by a Landlord?
            </h2>
            <p>
              The government of India allows the landlord to collect a security
              deposit from the tenant before he moves in. The security deposit
              should not be more than a total of two or three month’s rent.{" "}
              <br />
              As per the Bangalore rental agreement rules, In case a tenant
              damages the property and absconds it, the owner can use the
              security deposit to cover the expense on the repair works.
              However, when the tenant is in the flat, and some kind of
              maintenance or repair work is needed, the owner cannot use the
              security deposit. He has to pay it from his pocket.
            </p>
            <p>
              However, this has to be taken in writing while creating your
              rental agreement to avoid any conflict in future. Also, it is
              crucial to discuss with your owner about the refund. Some of the
              owners require tenants to look for their replacement, and only
              then they release the deposit.
            </p>
            <h2 className="text-2xl font-normal">
              What are some of the Pointers to Discuss with your Landlord before
              the Creation of a Rental Agreement in Bangalore?
            </h2>
            <p>
              Having the critical issues resolved before moving in and taking
              the same in writing helps keep away potential conflicts in the
              future. Below are some of the aspects you need to iron out:
            </p>
            <h2 className="text-2xl font-normal">Length of the Tenancy:</h2>
            <p>
              You might have a bond signed at your office for 2 years and you
              are required to stay at this place for the same period. In such a
              case, it is important that you put forward your request before the
              owner. If the owner has any concerns regarding the length of the
              period, he will mention it to you. This way, you can come to a
              mutual ground and decide the length of the tenancy.
            </p>
            <h2 className="text-2xl font-normal">
              Rent Amount and Security Deposit:
            </h2>
            <p>
              In most cases, the rent amount and security deposit are
              non-negotiable. However, you can try to get it reduced as much as
              possible before you move in. Also, the owner can’t ask for a
              security deposit that exceeds the rent amount of more than three
              months. Hence, you can discuss the same and come to a conclusion.{" "}
              <br />
              At this point, you should also discuss the scenario when the
              rental agreement Bangalore expires and the tenant continues to
              stay till he finds a new place.
            </p>
            <h2 className="text-2xl font-normal">Number of People:</h2>
            <p>
              Usually, there is no limit on the number of people, when the
              tenant brings his family to the property. However, in case you are
              a bachelor, the owner may restrict the number of tenants. In some
              cases, he may even levy restrictions on the opposite gender to
              enter the property.
            </p>
            <h2 className="text-2xl font-normal">
              Access of the Landlord to the Property:
            </h2>
            <p>
              This clause applies when the landlord is living in the same
              apartment/building as that of the tenant. Usually, there is a
              separate door in buildings to give the tenants the privacy they
              require. However, in the apartments, access to doors and some
              utilities may be common for tenants as well as the owner. In such
              a case, the tenant should ask and understand the access of the
              landlord to the property.
            </p>
            <h2 className="text-2xl font-normal">
              Repair. Maintenance or Damage Cost:
            </h2>
            <p>
              Your rental property may need a plaster or paint and your
              agreement is about to expire in two months. You would not want to
              spend maintenance on the property you are anyways vacating. This
              calls for a healthy discussion with the landlord before moving in.
              Make a list of the utilities and decide who pays for what. <br />
              Also, if you think the building needs any repair prior to the
              lock-in period, you can get it sorted by the owner.
            </p>
            <p>
              There are some other clauses with regards to food habits, late
              coming, drinking, smoking, pet ownership, etc., which you can
              discuss if at all it apply to you.
            </p>
            <h2 className="text-2xl font-normal">
              What are the Stamp Duty and Registration Charges in Bangalore for
              Tenancy Agreement?
            </h2>
            <p>
              Karnataka is the first state to replace conventional stamping with
              stamping completely. You need to notarize your rental agreement,
              even though it is for a period of 11 months, as a fraud-deterrent
              measure. <br />
              As per the law in Karnataka, the maximum stamp duty that can be
              collected is not more than Rs. 500 for the processing of a rental
              agreement. However, it is calculated as follows:
            </p>
            <p>
              pTenancy period equal to 10 years or less: 1% of the annual rent +
              deposit <br />
              Tenancy period of more than 10 years: 2% of annual rent + deposit
            </p>
            <p>
              Besides the stamp duty, the registration of the rental agreement
              registration is 1 % of the annual agreement + deposit. A number of
              people do not take the stamp duty and registration seriously.
              However, Bangalore rental agreement rules enables numerous rights
              for the tenants and landlords and can save them from any type of
              fraud from the other party.
            </p>

            <h2 className="text-2xl font-normal">
              What are the Legal Requirements for the Creation of a Rental
              Agreement?
            </h2>
            <p>
              Every state in India has its personal laws when it comes to legal
              requirements. In the state of Karnataka, the following are the
              legal requisites for the creation of a rental agreement:
            </p>
            <p>
              The rental property should be either used for residential or
              commercial purposes. The purpose of use has to be specified in the
              rental document. <br />
              Every aspect has to be written in the agreement, no matter how
              unimportant it may sound. <br />
              The agreement has to be created as a draft first to check for any
              edits and then printed on rental agreement Bangalore stamp paper
              value of a minimum of Rs. 100.
            </p>
            <p>
              The tenant and the owner must decide who is paying for the stamp
              duty and registration of the rental agreement. They have to pay 1%
              of the yearly rent and deposit, or Rs. 500 (whichever is lower in
              value). <br />
              The owner should take care of the rental property before handing
              it over on rent to the tenant. If the property needs painting or
              any type of repair work, the owner must undertake it.
            </p>
            <p>
              The tenant must bring to light if there is any type of damage to
              appliances or the property before vacating the rental property.
              All the documents presented during the creation of the rental
              property should be original. The biometric verification should be
              done. The registration process also needs two witnesses, their
              original identity proofs and their biometric impressions.
              <br />
              The owner must give the tenant a copy of the rental agreement in
              Bangalore to present it as legal address proof during the lock-in
              period. If the tenant moves out of the property during the lock-in
              period, the owner may decide whether or not to release the
              security deposit paid by the tenant.
            </p>
            <p>
              These were some of the important aspects to consider before
              renting a property. If you wish to get through the online
              registration for the rent agreement process, you can simply log in
              to the NoBroker portal and get doorstep delivery of your bangalore
              rent agreement template.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalAgreement;
