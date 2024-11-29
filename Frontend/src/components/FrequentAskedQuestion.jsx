import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const FrequentAskedQuestion = ({ faq, headingAlign, textColor }) => {
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

  return (
    <div>
      <div className="bg-white rounded-xl px-8 py-12 md:w-[90%] mx-auto">
        <div className={`font-medium md:text-3xl text-lg mb-4 ${headingAlign}`}>
          Frequently Asked Questions
        </div>
        {faq.map((item, i) => (
          <div key={i}>
            <div
              className="flex justify-between cursor-pointer py-2"
              onClick={() => toggleFaq(i)}
            >
              <div className="flex flex-col w-full">
                <div
                  className={`font-medium flex justify-between ${
                    multipleFaqExpanded.includes(i) ? `${textColor}` : ""
                  }`}
                >
                  <div className="py-2 text-sm md:text-base">{item.que}</div>
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
                  <div className="text-xs md:text-sm">{item.ans}</div>
                )}
              </div>
            </div>
            <hr className="text-zinc-300 opacity-60 m-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentAskedQuestion;
