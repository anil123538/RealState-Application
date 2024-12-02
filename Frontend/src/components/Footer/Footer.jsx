import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const NESTATEServiceForSell = [
    { id: 1, service: "Property Legal Services" },
    { id: 2, service: "Interiors" },
    { id: 3, service: "Sale Agreement" },
    { id: 4, service: "NESTATE For NRI's" },
    { id: 5, service: "New Builder Project" },
    { id: 6, service: "Home Loan EMI Calculator" },
    { id: 7, service: "Home Loan Balance Transfer" },
    { id: 8, service: "Home Loan Eligibility Calculator" },
    { id: 9, service: "Apply Home Loan" },
    { id: 10, service: "Compare Home Loan Interest" },
    { id: 11, service: "Property Buyers Forum" },
    { id: 12, service: "Property Buyers Guide" },
    { id: 13, service: "Property Seller Guide" },
    { id: 14, service: "Home Loan Guide" },
    { id: 15, service: "Home Loan Queries" },
    { id: 16, service: "Home Renovation Guide" },
    { id: 17, service: "Home Renovation Queries" },
    { id: 18, service: "Interior Design Tips" },
    { id: 19, service: "Interior Design Queries" },
    { id: 20, service: "NRI Real Estate Guide" },
    { id: 21, service: "NRI Real Estate Queries" },
    { id: 22, service: "Real Estate Vastu Guide" },
    { id: 23, service: "Personal Loan Guide" },
    { id: 24, service: "Personal Loan Queries" },
    { id: 25, service: "Bill Payment Guide" },
    { id: 26, service: "Real Estate Legal Guide" },
    { id: 27, service: "Real Estate Legal Queries" },
  ];

  const NESTATEServiceForRent = [
    { id: 1, service: "Rental Agreement" },
    { id: 2, service: "Pay Rent" },
    { id: 3, service: "Refer and Earn" },
    { id: 4, service: "Packers and Movers" },
    { id: 5, service: "Property Management in India" },
    { id: 6, service: "Home Services Questions" },
    { id: 7, service: "Rent Services Questions" },
    { id: 8, service: "Rent Calculator" },
    { id: 9, service: "Property Rental Guide" },
    { id: 10, service: "Landlord Guide" },
    { id: 11, service: "Tenant Guide" },
    { id: 12, service: "Packers and Movers Guide" },
    { id: 13, service: "Packers and Movers Queries" },
    { id: 14, service: "Home Services" },
    { id: 15, service: "Home Services Queries" },
    { id: 16, service: "Painting Services" },
    { id: 17, service: "Home Painting Guide" },
    { id: 18, service: "Home Painting Queries" },
    { id: 19, service: "Cleaning Services" },
    { id: 20, service: "Kitchen Cleaning Services" },
    { id: 21, service: "Sofa Cleaning Services" },
    { id: 22, service: "Bathroom Cleaning Services" },
    { id: 23, service: "Full House Cleaning Services" },
    { id: 24, service: "Home Cleaning Guide" },
    { id: 25, service: "Home Cleaning Queries" },
    { id: 26, service: "AC Services" },
    { id: 27, service: "Carpentry Services" },
    { id: 28, service: "Carpentry Services Queries" },
    { id: 29, service: "Electrician Services" },
    { id: 30, service: "Electrician Services Queries" },
    { id: 31, service: "Plumbing Services" },
    { id: 32, service: "Plumbing Services Queries" },
  ];

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <footer className="my-4">
        {/* NESTATE service */}
        <div className="px-10 py-8">
          <div>
            <h2 className="font-semibold text-xl opacity-70 pb-6">
              NESTATE services
            </h2>
          </div>
          <div className="flex justify-between gap-8 flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
              <h3 className="mb-4">Buy</h3>
              <div className="flex gap-4 flex-wrap">
                {NESTATEServiceForSell.map((item) => (
                  <span
                    className="bg-[#e8e8e8] px-2 py-1 text-xs opacity-80"
                    key={item.id}
                  >
                    {item.service}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <h3 className="mb-4">Rent</h3>
              <div className="flex gap-4 flex-wrap">
                {NESTATEServiceForRent.map((item) => (
                  <span
                    className="bg-[#e8e8e8] px-2 py-1 text-xs opacity-80"
                    key={item.id}
                  >
                    {item.service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around bg-[#4646461c] p-6 border-y border-black/20 flex-col md:flex-row items-center">
          {/* left side */}
          <div className="flex flex-col items-center md:border-r border-b md:border-b-0 md:w-1/2 border-black/20 gap-2 pb-4">
            <div className="font-medium opacity-80 text-[17px]">
              Find Property
            </div>
            <div className="text-xs font-light">
              Select from thousands of options, without brokerage.
            </div>
            <button className="bg-[#004958] text-white px-4 py-1 rounded-md text-[13px] mt-2">
              Find Now
            </button>
          </div>
          {/* right side */}
          <div className="flex flex-col items-center md:w-1/2 gap-2 pt-4">
            <div className="font-medium opacity-80 text-[17px]">
              List Your Property
            </div>
            <div className="text-xs font-light">
              For Free. Without any brokerage.
            </div>
            <button className="bg-[#004958] text-white px-4 py-1 rounded-md text-[13px] mt-2">
              Free Posting
            </button>
          </div>
        </div>

        <div className="flex sm:flex-nowrap justify-center p-8 sm:gap-12 gap-2 flex-wrap opacity-80 text-[#464646]">
          <Link to="/about-us">About Us</Link>
          <Link>Careers</Link>
          <Link>Terms & Conditions</Link>
          <Link>Privacy Policy</Link>
          <Link>Testimonials</Link>
          <Link>Sitemap</Link>
          <Link>FAQs</Link>
        </div>
        <div className="mx-[20%] mb-9">
          <hr className="opacity-10" />
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex sm:gap-4 gap-0">
            <img src="footer/android_download.svg" alt="" className="m-0" />
            <img src="footer/IOS_download.svg" alt="" className="m-0" />
          </div>
          <div className="flex text-xl sm:gap-10 gap-2">
            <Link className="bg-[#4646461c] p-2 rounded-full">
              <FaFacebook />
            </Link>
            <Link className="bg-[#4646461c] p-2 rounded-full">
              <FaTwitter />
            </Link>
            <Link className="bg-[#4646461c] p-2 rounded-full">
              <FaInstagram />
            </Link>
            <Link className="bg-[#4646461c] p-2 rounded-full">
              <FaLinkedin />
            </Link>
            <Link className="bg-[#4646461c] p-2 rounded-full">
              <TfiYoutube />
            </Link>
          </div>

          <div className="text-[13px] font-light">
            &copy; 2013-24 NESTATE Technologies Solution Pvt. Ltd.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
