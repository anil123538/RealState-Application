import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { defaultCountries, PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const LoginSignup = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="flex justify-center items-center z-10 bg-white">
        <div className="flex md:flex-row flex-col h-[500px] relative shadow-md shadow-slate-400">
          {/* <RxCross1 className="absolute right-4 top-4 cursor-pointer text-xl" /> */}
          <div className="hidden md:flex flex-col gap-2 bg-slate-100 p-6 md:justify-center w-[42%] text-sm">
            <img
              src="https://assets.NESTATE.in/nb-new/public/Signup/signupHome.png"
              alt=""
              width="30%"
            />
            <div className="font-bold">Login / Sign up</div>
            <div className="flex items-center opacity-80 text-xs">
              <IoMdCheckmark /> Zero Brokerage.
            </div>
            <div className="flex items-center opacity-80 text-xs">
              <IoMdCheckmark /> Thousands of new listings daily.
            </div>
            <div className="flex items-center opacity-80 text-xs">
              <IoMdCheckmark /> 100 Cr+ Brokerage saved monthly.
            </div>
          </div>

          <div className="md:hidden flex flex-row-reverse md:justify-between gap-8 px-4 pt-4">
            <img
              src="https://assets.NESTATE.in/nb-new/public/Signup/signupHome.png"
              alt=""
              className="mr-0 w-20 h-20"
            />
            <div>
              <h2>Login / Sign up</h2>
              <span className="text-sm">
                Zero Brokerage. Thousands of new listings daily. 100 Cr+
                Brokerage saved monthly.
              </span>
            </div>
          </div>
          <div className="flex flex-col md:h-auto h-full justify-between p-4 md:p-8 md:mt-4 md:w-7/12">
            <div className="flex flex-col gap-4">
              <div className="mb-0 text-lg font-medium">
                Enter phone to continue
              </div>
              <div>
                <PhoneInput
                  defaultCountry="np"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputStyle={{ width: "100%" }}
                />
              </div>
              <button
                type="submit"
                className="bg-[#ff5800] hover:bg-red-600 text-white w-full px-4 py-2 rounded-md"
              >
                Continue
              </button>
            </div>
            <div className="text-center">
              <span className="text-xs">By continuing, you agree to our </span>
              <span className="hover:underline font-bold text-xs cursor-pointer">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
