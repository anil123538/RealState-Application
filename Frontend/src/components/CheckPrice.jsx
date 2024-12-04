import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckPrice = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [startDate, setStartDate] = useState();

  const handleSelection = (id) => {
    setSelectedButton(id);
  };

  const cities = [
    { id: 1, city: "Kathmandu" },
    { id: 2, city: "Pokhara" },
    { id: 3, city: "Lalitpur" },
    { id: 4, city: "Bhaktapur" },
    { id: 5, city: "Janakpur" },
  ];

  return (
    <div className="bg-[#f3f1f1] rounded-t-xl p-4">
      <div>
        <div className="font-medium mb-5">Where are you going to relocate?</div>
        <div className="flex gap-1 justify-between p-2 h-12 bg-zinc-200 w-full rounded-xl text-zinc-500">
          <div
            className={`items-center flex text-sm p-4 ${
              selectedButton === 1
                ? "bg-[#5d4990] rounded-md  text-white"
                : null
            }`}
            onClick={() => handleSelection(1)}
          >
            Within City
          </div>
          <div
            className={`items-center flex text-sm p-4 ${
              selectedButton === 2
                ? "bg-[#5d4990] rounded-md  text-white"
                : null
            }`}
            onClick={() => handleSelection(2)}
          >
            Between Cities
          </div>
          <div
            className={`w-fit flex flex-col items-center gap-4 px-4 py-2 overflow-hidden text-sm  ${
              selectedButton === 3
                ? "bg-[#5d4990] rounded-md  text-white"
                : null
            } `}
            onClick={() => handleSelection(3)}
          >
            {/* Text elements that will be animated */}
            <div
              style={{
                width: "100%",
                animation: "slideDown 5s linear infinite",
                textAlign: "center",
              }}
            >
              Movers Only
            </div>
            <div
              style={{
                width: "100%",
                animation: "slideDown 5s linear infinite",
                textAlign: "center",
              }}
            >
              City Tempo
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                animation: "slideDown 5s linear infinite",
              }}
            >
              Rent Truck
            </div>
          </div>
        </div>

        <div className="w-full mb-6">
          <div className="mb-2">Select City</div>
          <select
            name="city"
            id="city"
            className="w-full p-2 rounded-md border border-black/30"
          >
            {cities.map((item) => (
              <option value={item.city}>{item.city}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-sm">Search your Locality</div>
          <div className="flex flex-col gap-6 text-sm mb-4">
            <div className="relative">
              <input
                type="search"
                name=""
                id=""
                placeholder="Shifting From"
                className="p-2 pl-8 w-full rounded-md border border-black/30"
              />
              <MdOutlineLocationOn className="absolute top-1.5 left-1 text-2xl" />
            </div>

            <div className="relative">
              <input
                type="search"
                name=""
                id=""
                placeholder="Shifting To"
                className="p-2 pl-8 w-full rounded-md border border-black/30"
              />
              <MdOutlineLocationOn className="absolute top-1.5 left-1 text-2xl" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-sm">Select Shifting Date</div>

            <DatePicker
              wrapperClassName="w-full"
              showIcon
              width={"100%"}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Shifting Date"
              className="pl-8 w-full rounded-md border border-black/30"
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="shifting_date" id="shifting_date" />
            <label htmlFor="shifting_date">
              I’m flexible on my shifting date
            </label>
          </div>
        </div>
      </div>
      <button className="bg-[#ff5800] px-4 py-2 w-full rounded-md text-white mt-4">
        Check Price
      </button>

      {/* Add animation style */}
      <style>
        {`
          @keyframes slideDown {
            0% {
              transform: translateY(-550%); /* Start with all text off-screen */
            }
            40% {
              transform: translateY(-250%); /* Move the first text into view */
            }
            80% {
              transform: translateY(-25%); /* Move the second text into view */
            }
            100% {
              transform: translateY(-20%); /* Move the third text into view */
            }
          }
        `}
      </style>
    </div>
  );
};

export default CheckPrice;
