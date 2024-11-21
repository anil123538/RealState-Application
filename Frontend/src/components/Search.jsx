import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Select from "react-select";

const Search = ({ selectedOption, setSelectedOption }) => {
  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  const cities = [
    { value: "Chennai", label: "Chennai" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Delhi", label: "Delhi" },
  ];
  const [selectedCityOption, setSelectedCityOption] = useState(cities[0]);
  const [selectedPropertyStatusOption, setSelectedPropertyStatusOption] =
    useState(null);
  const [selectedBhkOption, setSelectedBhkOption] = useState(null);
  const [selectedAvailabilityOption, setSelectedAvailabilityOption] =
    useState(null);
  const [selectedPropertyTypeOption, setSelectedPropertyTypeOption] =
    useState(null);
  const bhkType = [
    { value: "1 RK", label: "1 RK" },
    { value: "2 BHK", label: "2 BHK" },
    { value: "3 BHK", label: "3 BHK" },
    { value: "4 BHK", label: "4 BHK" },
    { value: "4+ BHK", label: "4+ BHK" },
  ];

  const propertyStatus = [
    { value: "Under Construction", label: "Under Construction" },
    { value: "Ready", label: "Ready" },
  ];

  const availability = [
    {
      value: "Immediate",
      label: "Immediate",
    },
    {
      value: "Within 15 Days",
      label: "Within 15 Days",
    },
    {
      value: "Within 30 Days",
      label: "Within 30 Days",
    },
    {
      value: "After 30 Days",
      label: "After 30 Days",
    },
  ];

  const propertyType = [
    {
      value: "Office Space",
      label: "Office Space",
    },
    {
      value: "Co-Working",
      label: "Co-Working",
    },
    {
      value: "Restaurant/Cafe",
      label: "Restaurant/Cafe",
    },
    {
      value: "Shop",
      label: "Shop",
    },
    {
      value: "Showroom",
      label: "Showroom",
    },
    {
      value: "Industrial Building",
      label: "Industrial Building",
    },
    {
      value: "Industrial Shed",
      label: "Industrial Shed",
    },
    {
      value: "Gowdown/Warehouse",
      label: "Gowdown/Warehouse",
    },
    {
      value: "Other business",
      label: "Other business",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center md:px-10 pt-10">
        <div className="flex flex-col gap-4 mt-5 mx-4 md:mx-0">
          <h1 className="text-3xl">
            World's Largest NoBrokerage Property Site
          </h1>

          <div className="flex bg-[rgba(252,178,68,0.2)] h-14 gap-2 md:w-fit w-full mx-auto md:p-4 p-2 py-3 text-sm justify-center">
            <div className="flex items-center">
              {selectedOption === "Buy" ? (
                <>
                  <img
                    src="https://assets.nobroker.in/nob-common/HomeInteriorHome.svg"
                    alt=""
                    className="mr-2"
                  />
                  Home Interiors
                </>
              ) : (
                <>
                  <img
                    src="https://assets.nobroker.in/nb-new/public/Home/RAIcon.svg"
                    alt=""
                    className="mr-2"
                  />
                  Rental Agreement
                </>
              )}
            </div>
            |
            <div className="flex items-center">
              {selectedOption === "Buy" ? (
                <>
                  <img
                    src="	https://assets.nobroker.in/nob-common/HomeInteriorDeliveryHome.svg"
                    alt=""
                    className="mr-2"
                  />
                  45-Days Guarantee
                </>
              ) : (
                <>
                  <img
                    src="	https://assets.nobroker.in/nb-new/public/Home/deliveryIcon.svg"
                    alt=""
                    className="mr-2"
                  />
                  Next Day Delivery
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 items-center md:border border-zinc-200 md:w-9/12 mx-auto text-center">
            <div
              className={`px-4 py-3 cursor-pointer ${
                selectedOption === "Buy"
                  ? "border-b-4 border-red-500"
                  : "md:border-r border-zinc-200"
              } `}
              onClick={() => handleSelectedOption("Buy")}
            >
              <Link
                className={`no-underline ${
                  selectedOption === "Buy"
                    ? " text-red-500 no-underline"
                    : "text-black"
                }`}
              >
                Buy
              </Link>
            </div>
            <div
              className={` px-4 py-3 cursor-pointer ${
                selectedOption === "Rent"
                  ? "border-b-4 border-red-500"
                  : "md:border-x border-zinc-200"
              } `}
              onClick={() => handleSelectedOption("Rent")}
            >
              <Link
                className={`no-underline ${
                  selectedOption === "Rent"
                    ? " text-red-500 no-underline"
                    : "text-black"
                }`}
              >
                Rent
              </Link>
            </div>
            <div
              className={` px-4 py-3 cursor-pointer ${
                selectedOption === "Commercial"
                  ? "border-b-4 border-red-500"
                  : "md:border-l border-zinc-200"
              } `}
              onClick={() => handleSelectedOption("Commercial")}
            >
              <Link
                className={`no-underline ${
                  selectedOption === "Commercial"
                    ? " text-red-500 no-underline"
                    : "text-black"
                }`}
              >
                Commercial
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-10/12 xl:w-9/12 flex flex-col">
          <div className="flex md:flex-row flex-col">
            <Select
              defaultValue={selectedCityOption}
              onChange={setSelectedCityOption}
              options={cities}
              className="min-w-fit"
              styles={{
                control: (base) => ({
                  ...base,
                  minHeight: "50px", // Set a fixed height
                  padding: "0 10px", // Add horizontal padding instead
                  border: "1px solid #d1d5db", // Adjust border color
                }),
              }}
            />
            <input
              type="search"
              name="search"
              id="search"
              className="border border-zinc-200 px-4 w-full outline-none"
              placeholder="Search upto 3 localities or landmarks"
            />
            <div className="w-fit bg-[#fd3752] text-white flex items-center text-xl px-12 cursor-pointer hover:bg-[#d03c3c]">
              <BiSearch />
              <button type="submit">Search</button>
            </div>
          </div>

          {/* for Buy */}
          {selectedOption === "Buy" ? (
            <div className="flex flex-col md:flex-row gap-2 border border-zinc-200  p-2.5 items-center text-sm">
              <div className="flex gap-2">
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="full_house"
                    value="full_house"
                  />
                  <label htmlFor="full_house" className="ml-1 cursor-pointer">
                    Full House
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="land_plot"
                    value="land_plot"
                  />
                  <label htmlFor="land_plot" className="ml-1 cursor-pointer">
                    Land/Plot
                  </label>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Select
                  placeholder="BHK Type"
                  options={bhkType}
                  isMulti
                  defaultValue={selectedBhkOption}
                  onChange={setSelectedBhkOption}
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: "12px",
                      padding: "0 10px", // Add horizontal padding instead
                      minWidth: "100px",
                      border: "1px solid #d1d5db", // Adjust border color
                    }),
                  }}
                />

                <Select
                  placeholder="Property Status"
                  options={propertyStatus}
                  defaultValue={selectedPropertyStatusOption}
                  onChange={setSelectedPropertyStatusOption}
                  className="min-w-fit"
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: "12px",
                      padding: "0 10px", // Add horizontal padding instead
                      border: "1px solid #d1d5db", // Adjust border color
                    }),
                  }}
                />
                <div className="border border-[#d1d5db] flex gap-2 px-2.5 py-1.5">
                  <input type="checkbox" name="new_project" id="new_project" />
                  <label for="new_project" className="text-xs">
                    New Builder Projects
                  </label>
                </div>
              </div>
            </div>
          ) : // for Rent
          selectedOption === "Rent" ? (
            <div className="flex md:flex-row flex-col gap-2 border border-zinc-200  p-2.5 items-center text-sm">
              <div className="flex gap-2">
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="full_house"
                    value="full_house"
                  />
                  <label htmlFor="full_house" className="ml-1 cursor-pointer">
                    Full House
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="land_plot"
                    value="land_plot"
                  />
                  <label htmlFor="land_plot" className="ml-1 cursor-pointer">
                    Land/Plot
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="land_type"
                    id="flatmates"
                    value="flatmates"
                  />
                  <label htmlFor="flatmates" className="ml-1 cursor-pointer">
                    Flatmates
                  </label>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Select
                  placeholder="BHK Type"
                  options={bhkType}
                  isMulti
                  defaultValue={selectedBhkOption}
                  onChange={setSelectedBhkOption}
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: "12px",
                      padding: "0 10px", // Add horizontal padding instead
                      minWidth: "100px",
                      border: "1px solid #d1d5db", // Adjust border color
                    }),
                  }}
                />

                <Select
                  placeholder="Availability"
                  options={availability}
                  defaultValue={selectedAvailabilityOption}
                  onChange={setSelectedAvailabilityOption}
                  className="min-w-fit"
                  styles={{
                    control: (base) => ({
                      ...base,
                      fontSize: "12px",
                      padding: "0 10px", // Add horizontal padding instead
                      minWidth: "100px",
                      border: "1px solid #d1d5db", // Adjust border color
                    }),
                  }}
                />
              </div>
            </div>
          ) : // for Commercial
          selectedOption === "Commercial" ? (
            <div className="flex md:flex-row flex-col gap-2 border border-zinc-200  p-2.5 items-center text-sm">
              <div className="flex gap-2">
                <div>
                  <input type="radio" name="land_type" id="rent" value="rent" />
                  <label htmlFor="full_house" className="ml-1 cursor-pointer">
                    Rent
                  </label>
                </div>
                <div>
                  <input type="radio" name="land_type" id="buy" value="buy" />
                  <label htmlFor="buy" className="ml-1 cursor-pointer">
                    Buy
                  </label>
                </div>
              </div>
              <Select
                placeholder="Property Type"
                options={propertyType}
                defaultValue={selectedPropertyTypeOption}
                onChange={setSelectedPropertyTypeOption}
                className="min-w-fit"
                styles={{
                  control: (base) => ({
                    ...base,
                    fontSize: "12px",
                    padding: "0 10px", // Add horizontal padding instead
                    minWidth: "100px",
                    border: "1px solid #d1d5db", // Adjust border color
                  }),
                }}
              />
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-nowrap items-center gap-2 mt-10">
            <hr className="border border-black text-xl w-20" />
            <span>Are you a Property Owner?</span>
            <hr className="border border-black text-xl w-20" />
          </div>
          <button className="px-4 py-2.5 w-fit bg-teal-600 hover:bg-teal-700">
            <Link to="/post-property" className="text-white">
              Post Free Property Ad
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
