import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const footerData = [
    {
      id: 1,
      flatsForSale: "Flats for Sale in Bangalore",
      propertiesForSale: "Properties for Sale in Bangalore",
      independentFloor: "Independent Floor for Sale in Bangalore",
      flatData: [
        { id: 1, name: "Flats for Sale in Koramangala" },
        { id: 2, name: "Flats for Sale in Marathahalli" },
        { id: 3, name: "Flats for Sale in HSR Layout" },
        { id: 4, name: "Flats for Sale in Whitefield" },
        { id: 5, name: "Flats for Sale in Indira Nagar" },
        { id: 6, name: "Flats for Sale in Bellandur" },
        { id: 7, name: "Flats for Sale in Chandra Layout" },
        { id: 8, name: "Flats for Sale in J. P. Nagar" },
        { id: 9, name: "Flats for Sale in BTM Layout" },
        { id: 10, name: "Flats for Sale in Jayanagar" },
        { id: 11, name: "Flats for Sale in Bangalore Below 45 Lakhs" },
        { id: 12, name: "Flats for Sale in Bangalore Below 50 Lakhs" },
        { id: 13, name: "Flats For Sale Below 60 Lakhs in Bangalore" },
        { id: 14, name: "Flats For Sale Below 70 Lakhs in Bangalore" },
        { id: 15, name: "Flats For Sale Below 80 Lakhs in Bangalore" },
        { id: 16, name: "Flats For Sale Below 90 Lakhs in Bangalore" },
      ],
      propertyData: [
        {
          id: 1,
          name: "Properties For Sale In Koramangala",
        },
        {
          id: 2,
          name: "Properties For Sale In Yelahanka",
        },
      ],
    },

    {
      id: 2,
      flatsForSale: "Flats for Sale in Mumbai",
      propertiesForSale: "Properties for Sale in Mumbai",
      independentFloor: "Independent Floor for Sale in Mumbai",
      flatData: [
        { id: 1, name: "House For Sale In Mumbai" },
        { id: 2, name: "Flats for Sale in Andheri West" },
        { id: 3, name: "Flats for Sale in Andheri East" },
        { id: 4, name: "Flats for Sale in Malad West" },
        { id: 5, name: "Flats for Sale in Navi Mumbai" },
        { id: 6, name: "Flats for Sale in Powai" },
        { id: 7, name: "Flats for Sale in Thane West" },
        { id: 8, name: "Flats for Sale in Mira Road East" },
        { id: 9, name: "Flats for Sale in Kharghar" },
        { id: 10, name: "Flats for Sale in Kandivali East" },
        { id: 11, name: "Flats for Sale in Bandra West" },
        { id: 12, name: "Flats For Sale Below 60 Lakhs In Mumbai" },
        { id: 13, name: "Flats For Sale Below 70 Lakhs In Mumbai" },
        { id: 14, name: "Flats For Sale Below 80 Lakhs In Mumbai" },
        { id: 15, name: "Flats For Sale Below 90 Lakhs In Mumbai" },
        { id: 16, name: "Flats For Sale Below 1 Cr In Mumbai" },
        { id: 17, name: "Flats For Sale Below 2 Cr In Mumbai" },
      ],
      propertyData: [
        {
          id: 1,
          name: "Properties For Sale In Kharghar",
        },
        {
          id: 2,
          name: "Properties For Sale In Bandra",
        },
      ],
    },
    {
      id: 3,
      flatsForSale: "Flats for Sale in Chennai",
      propertiesForSale: "Properties for Sale in Chennai",
      independentFloor: "Independent Floor for Sale in Chennai",
      flatData: [
        { id: 1, name: "House for Rent in Chennai" },
        { id: 2, name: "House For Rent in Kolathur" },
        { id: 3, name: "House For Rent in Velachery" },
        { id: 4, name: "Flats for Sale in Velachery" },
        { id: 5, name: "Flats for Sale in Thiruvanmiyur" },
        { id: 6, name: "Flats for Sale in Madipakkam" },
        { id: 7, name: "Flats for Sale in Thoraipakkam" },
        { id: 8, name: "Flats for Sale in Sholinganallur" },
        { id: 9, name: "Flats for Sale in Medavakkam" },
        { id: 10, name: "Flats for Sale in Mylapore" },
        { id: 11, name: "Flats for Sale in Adyar" },
        { id: 12, name: "Flats for Sale in T Nagar" },
        { id: 13, name: "Flats for Sale in Perungudi" },
        { id: 14, name: "Flats for Sale in Chennai Below 45 Lakhs" },
        { id: 15, name: "Flats for Sale in Chennai Below 50 Lakhs" },
        { id: 16, name: "Flats For Sale Below 60 Lakhs In Chennai" },
        { id: 17, name: "Flats For Sale Below 70 Lakhs In Chennai" },
        { id: 18, name: "Flats For Sale Below 80 Lakhs In Chennai" },
        { id: 19, name: "Flats For Sale Below 90 Lakhs In Chennai" },
      ],
      propertyData: [
        { id: 1, name: "Properties For Sale In Shalimar Bagh" },
        { id: 2, name: "Properties For Sale In Velachery" },
      ],
    },
    {
      id: 4,
      flatsForSale: "Flats for Sale in Pune",
      propertiesForSale: "Properties for Sale in Pune",
      independentFloor: "Independent Floor for Sale in Pune",
      flatData: [
        { id: 1, name: "Flats for Sale in Wakad" },
        { id: 2, name: "Flats for Sale in Kharadi" },
        { id: 3, name: "Flats for Sale in Baner" },
        { id: 4, name: "Flats for Sale in Hadapsar" },
        { id: 5, name: "Flats for Sale in Aundh" },
        { id: 6, name: "Flats for Sale in Kothrud" },
        { id: 7, name: "Flats for Sale in Pimple Saudagar" },
        { id: 8, name: "Flats for Sale in Viman Nagar" },
        { id: 9, name: "Flats for Sale in Pimpri" },
        { id: 10, name: "Flats for Sale in Hinjewadi" },
        { id: 11, name: "Flats for Sale in Pune Below 45 Lakhs" },
        { id: 12, name: "Flats for Sale in Pune Below 50 Lakhs" },
        { id: 13, name: "Flats For Sale Below 60 Lakhs In Pune" },
        { id: 14, name: "Flats For Sale Below 70 Lakhs In Pune" },
        { id: 15, name: "Flats For Sale Below 80 Lakhs In Pune" },
        { id: 16, name: "Flats For Sale Below 90 Lakhs In Pune" },
      ],
      propertyData: [
        { id: 1, name: "Properties For Sale In Hadapsar" },
        { id: 2, name: "Properties For Sale In Kondhwa" },
      ],
    },
    {
      id: 5,
      flatsForSale: "Flats for Sale in Guragon",
      propertiesForSale: "Properties for Sale in Guragon",
      independentFloor: "Independent Floor for Sale in Guragon",
      flatData: [
        { id: 1, name: "1 BHK Flats in Gurgaon" },
        { id: 2, name: "2 BHK Flats in Gurgaon" },
        { id: 3, name: "3 BHK Flats in Gurgaon" },
        { id: 4, name: "4 BHK Flats in Gurgaon" },
        { id: 5, name: "4+ BHK in Gurgaon" },
        { id: 6, name: "Fully Furnished Flats in Gurgaon" },
        { id: 7, name: "Semi Furnished Flats in Gurgaon" },
        { id: 8, name: "Unfurnished Flats in Gurgaon" },
        { id: 9, name: "Independent Floor for Sale in Gurgaon" },
        { id: 10, name: "Independent Houses For Sale in Gurgaon" },
        { id: 11, name: "Flats For Sale Below 60 Lakhs In Gurgaon" },
        { id: 12, name: "Flats For Sale Below 70 Lakhs In Gurgaon" },
        { id: 13, name: "Flats For Sale Below 80 Lakhs In Gurgaon" },
        { id: 14, name: "Flats For Sale Below 90 Lakhs In Gurgaon" },
      ],
      propertyData: [
        { id: 1, name: "Properties for Sale in Gurgaon" },
        { id: 2, name: "Properties For Sale In Sector 31" },
        { id: 3, name: "Properties For Sale In Sector 4" },
      ],
    },
    {
      id: 6,
      flatsForSale: "Flats for Sale in Hyderabad",
      propertiesForSale: "Properties for Sale in Hyderabad",
      independentFloor: "Independent Floor for Sale in Hyderabad",
      flatData: [
        { id: 1, name: "Flats for Sale in Banjara Hills" },
        { id: 2, name: "Flats for Sale in Jubilee Hills" },
        { id: 3, name: "Flats for Sale in Madhapur" },
        { id: 4, name: "Flats for Sale in Kukatpally Housing Board Colony" },
        { id: 5, name: "Flats for Sale in Hitech City" },
        { id: 6, name: "Flats for Sale in Gachibowli" },
        { id: 7, name: "Flats for Sale in Kukatpally" },
        { id: 8, name: "Flats for Sale in Whitefields" },
        { id: 9, name: "Flats for Sale in Himayath Nagar" },
        { id: 10, name: "Flats for Sale in Sanath Nagar" },
        { id: 11, name: "Flats for Sale in Hyderabad Below 45 Lakhs" },
        { id: 12, name: "Flats for Sale in Hyderabad Below 50 Lakhs" },
        { id: 13, name: "Flats For Sale Below 60 Lakhs In Hyderabad" },
        { id: 14, name: "Flats For Sale Below 70 Lakhs In Hyderabad" },
        { id: 15, name: "Flats For Sale Below 80 Lakhs In Hyderabad" },
        { id: 16, name: "Flats For Sale Below 90 Lakhs In Hyderabad" },
      ],
      propertyData: [
        { id: 1, name: "Properties for Sale in Hyderabad" },
        { id: 2, name: "Properties For Sale In Gachibowli" },
        { id: 3, name: "Properties For Sale In Kondapur" },
      ],
    },
    {
      id: 7,
      flatsForSale: "Flats for Sale in Delhi",
      propertiesForSale: "Properties for Sale in Delhi",
      independentFloor: "Builder Floor for Sale in Delhi",
      flatData: [
        { id: 1, name: "Flats for Sale in Vasant Vihar" },
        { id: 2, name: "Flats for Sale in Safdarjung Enclave" },
        { id: 3, name: "Flats for Sale in Hauz Khas" },
        { id: 4, name: "Flats for Sale in Greater Kailash" },
        { id: 5, name: "Flats for Sale in Connaught Place" },
        { id: 6, name: "Flats for Sale in Gulmohar Park" },
        { id: 7, name: "Flats for Sale in Green Park Extension" },
        { id: 8, name: "Flats for Sale in East of Kailash" },
        { id: 9, name: "Flats for Sale in Panchsheel Park" },
        { id: 10, name: "Flats for Sale in Lajpat Nagar I" },
        { id: 11, name: "Flats for Sale in Delhi Below 45 Lakhs" },
        { id: 12, name: "Flats for Sale in Delhi Below 50 Lakhs" },
        { id: 13, name: "Flats For Sale Below 60 Lakhs In Delhi" },
        { id: 14, name: "Flats For Sale Below 70 Lakhs In Delhi" },
        { id: 15, name: "Flats For Sale Below 80 Lakhs In Delhi" },
        { id: 16, name: "Flats For Sale Below 90 Lakhs In Delhi" },
      ],
      propertyData: [
        { id: 1, name: "Properties For Sale In Hauz Khas" },
        { id: 2, name: "Properties For Sale In Janakpuri" },
        { id: 3, name: "Builder Floor for Sale in Delhi" },
        { id: 4, name: "Builder Floor for Sale in Faridabad" },
        { id: 5, name: "Builder Floor for Sale in Ghaziabad" },
      ],
    },
    {
      id: 8,
      flatsForSale: "Flats for Sale in Noida",
      propertiesForSale: "Properties for Sale in Noida",
      independentFloor: "Builder Floor for Sale in Noida",
      flatData: [
        { id: 1, name: "Flats For Sale In Noida Sector 62" },
        { id: 2, name: "Flats For Sale In Noida Sector 50" },
        { id: 3, name: "Flats For Sale In Sector 137 Noida" },
        { id: 4, name: "Flats For Sale In Sector 75 Noida" },
        { id: 5, name: "Flats For Sale In Sector 76 Noida" },
        { id: 6, name: "Flats For Sale In Kendriya Vihar Sector 51 Noida" },
        { id: 7, name: "Flats For Sale In Noida Sector 18" },
        { id: 8, name: "Flats For Sale In Sector 107 Noida" },
        { id: 9, name: "Flats For Sale In Sector 128 Noida" },
        { id: 10, name: "Flats For Sale In Sector 150 Noida" },
        { id: 11, name: "Flats for Sale in Greater Noida" },
        { id: 12, name: "Flats For Sale Below 70 Lakhs In Noida" },
        { id: 13, name: "Flats For Sale Below 80 Lakhs In Noida" },
        { id: 14, name: "Flats For Sale Below 90 Lakhs In Noida" },
      ],
      propertyData: [
        { id: 1, name: "Properties For Sale In Noida Extension" },
        { id: 2, name: "Properties For Sale In Sector 12 Noida" },
        { id: 3, name: "Properties for Sale in Greater Noida" },
      ],
    },
  ];

  const noBrokerServiceForSell = [
    { id: 1, service: "Property Legal Services" },
    { id: 2, service: "Interiors" },
    { id: 3, service: "Sale Agreement" },
    { id: 4, service: "NoBroker For NRI's" },
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

  const noBrokerServiceForRent = [
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
        {path != "/testimonials" ? (
          <>
            <div className="flex text-center bg-zinc-100 cursor-pointer overflow-auto sm:overflow-auto">
              <div className="p-4 w-full bg-zinc-300 ">
                Properties & Flats for Sale
              </div>
              <div className="p-4 w-full">Flats for Rent</div>
              <div className="p-4 w-full">PG / Hostels</div>
              <div className="p-4 w-full">Flatmates</div>
              <div className="p-4 w-full">Miscellaneous</div>
              <div className="p-4 w-full">Commercial</div>
              <div className="p-4 w-full">New Projects & Plots</div>
              <div className="p-4 w-full">Independent Houses & Villas</div>
            </div>
            <div className="md:grid md:grid-cols-5 mx-6 my-2 flex overflow-auto">
              {footerData.map((item) => (
                <div className="p-4" key={item.id}>
                  <h2 className="mb-2 text-sm">{item.flatsForSale}</h2>
                  <div className="flex flex-col text-[11px] gap-2 font-light">
                    {item.flatData &&
                      item.flatData.map((names) => (
                        <span key={names.id}>{names.name}</span>
                      ))}
                  </div>
                  <h2 className="my-2 text-sm">{item.propertiesForSale}</h2>
                  <div className="flex flex-col text-[11px] gap-2 font-light">
                    {item.propertyData &&
                      item.propertyData.map((item) => (
                        <span key={item.id}>{item.name}</span>
                      ))}
                  </div>

                  <h2 className="my-2 text-sm">{item.independentFloor}</h2>
                </div>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
        <hr />
        {/* no broker service */}
        <div className="px-10 py-8">
          <div>
            <h2 className="font-semibold text-xl opacity-70 pb-6">
              NoBroker services
            </h2>
          </div>
          <div className="flex justify-between gap-8 flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
              <h3 className="mb-4">Buy</h3>
              <div className="flex gap-4 flex-wrap">
                {noBrokerServiceForSell.map((item) => (
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
                {noBrokerServiceForRent.map((item) => (
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
            <button className="bg-slate-800/80 text-white px-4 py-1 rounded-md text-[13px] mt-2">
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
            <button className="bg-slate-800/80 text-white px-4 py-1 rounded-md text-[13px] mt-2">
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
            <img
              src="https://assets.nobroker.in/nb-new/public/Common/android_download.svg"
              alt=""
            />
            <img
              src="https://assets.nobroker.in/nb-new/public/Common/IOS_download.svg"
              alt=""
            />
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
            &copy; 2013-24 NoBroker Technologies Solution Pvt. Ltd.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
