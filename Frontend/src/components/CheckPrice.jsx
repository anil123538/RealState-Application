import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CheckPrice = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [startDate, setStartDate] = useState();
  const [selected, setSelected] = useState("first");
  console.log("🚀 ~ CheckPrice ~ selected:", selected);

  const handleSelection = (id, relocation) => {
    setSelectedButton(id);
    setSelected(relocation);
  };

  const cities = [
    { id: 1, city: "Kathmandu" },
    { id: 2, city: "Pokhara" },
    { id: 3, city: "Lalitpur" },
    { id: 4, city: "Bhaktapur" },
    { id: 5, city: "Janakpur" },
  ];
  return (
    <>
      <div>
        <div className="font-medium mb-5">Where are you going to relocate?</div>
        <div className="flex gap-1 justify-between text-center p-2 h-10 md:h-16 xl:h-12 bg-zinc-100 w-full rounded-xl text-zinc-500">
          <div
            className={`items-center flex text-sm p-4 cursor-pointer ${
              selectedButton === 1 ? "bg-[#5d4990] rounded-md text-white" : null
            }`}
            onClick={() => handleSelection(1, "first")}
          >
            Within City
          </div>
          <div
            className={`items-center flex text-sm p-4 cursor-pointer ${
              selectedButton === 2
                ? "bg-[#5d4990] rounded-md  text-white"
                : null
            }`}
            onClick={() => handleSelection(2, "second")}
          >
            Between Cities
          </div>
          <div
            className={`w-fit flex flex-col items-center gap-8 px-4 py-2 overflow-hidden text-sm cursor-pointer ${
              selectedButton === 3
                ? "bg-[#5d4990] rounded-md  text-white"
                : null
            } `}
            onClick={() => handleSelection(3, "third")}
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

        {selected === "first" || selected === "third" ? (
          <div className="w-full mt-4">
            <div className="mb-2 text-xs">Select City</div>
            <select
              name="city"
              id="city"
              className="w-full p-2 rounded-md border border-black/30 text-sm"
            >
              {cities.map((item) => (
                <option value={item.city}>{item.city}</option>
              ))}
            </select>
          </div>
        ) : null}

        {selected === "first" ? (
          <div className="flex flex-col gap-2 mt-6">
            <div className="text-xs">Search your Locality</div>
            <div className="flex flex-col gap-6 text-sm mb-4">
              <div className="relative">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Shifting From"
                  className="p-2 pl-8 w-full text-sm rounded-md border border-black/30"
                />
                <MdOutlineLocationOn className="absolute top-1.5 left-1 text-2xl" />
              </div>

              <div className="relative">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Shifting To"
                  className="p-2 pl-8 w-full text-sm rounded-md border border-black/30"
                />
                <MdOutlineLocationOn className="absolute top-1.5 left-1 text-2xl" />
              </div>
            </div>
          </div>
        ) : null}

        {selected === "second" ? (
          <div className="flex flex-col gap-2 mt-4">
            <div className="text-xs">Search your Locality</div>
            <div className="flex flex-col gap-6 text-sm mb-4">
              <div className="relative">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search Source City"
                  className="p-2 pl-8 w-full text-sm rounded-md border border-black/30"
                />
                <MdOutlineLocationOn className="absolute top-1.5 left-1 text-2xl" />
              </div>

              <div className="relative">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search Destination City"
                  className="p-2 pl-8 w-full text-sm rounded-md border border-black/30"
                />
                <MdOutlineLocationOn className="absolute top-1.5 left-1 text-2xl" />
              </div>
            </div>
          </div>
        ) : null}

        {selected === "third" ? (
          <div className="flex flex-col gap-2 mt-6">
            <div className="text-xs">Search your Locality</div>
            <div className="flex flex-col gap-6 text-sm mb-4">
              <div className="relative">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Pickup from"
                  className="p-2 pl-8 w-full text-sm rounded-md border border-black/30"
                />
                <MdOutlineLocationOn className="absolute top-1.5 left-1 text-2xl" />
              </div>

              <div className="relative">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Drop at"
                  className="p-2 pl-8 w-full text-sm rounded-md border border-black/30"
                />
                <MdOutlineLocationOn className="absolute top-1.5 left-1 text-2xl" />
              </div>
            </div>
          </div>
        ) : null}

        {selected === "first" || selected === "second" ? (
          <div>
            <div className="flex flex-col gap-2">
              <div className="text-xs font-medium">Select Shifting Date</div>

              <DatePicker
                wrapperClassName="w-full"
                showIcon
                width={"100%"}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Shifting Date"
                className="pl-8 w-full rounded-md border text-sm border-black/30"
              />
            </div>

            <div className="flex items-center gap-2 text-sm my-4">
              <input type="checkbox" name="shifting_date" id="shifting_date" />
              <label htmlFor="shifting_date">
                I’m flexible on my shifting date
              </label>
            </div>
          </div>
        ) : null}
      </div>
      <button className="bg-[#ff5800] px-4 py-2 w-full rounded-md text-white">
        Check Price
      </button>

      {/* Add animation style */}
      <style>
        {`
          @keyframes slideDown {
            0% {
              transform: translateY(-750%); /* Start with all text off-screen */
            }
            60% {
              transform: translateY(-230%); /* Move the first text into view */
            }
            88% {
            transform: translateY(-30%);
              md:transform: translateY(20%); /* Move the second text into view */
            }
            100% {
              transform: translateY(-10%);
              md:transform: translateY(10%); /* Move the third text into view */
            }
          }
        `}
      </style>
    </>
  );
};

export default CheckPrice;
