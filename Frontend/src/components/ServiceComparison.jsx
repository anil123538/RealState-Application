import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const ServiceComparison = ({ serviceComparison }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>Service Comparison</div>
      <div className="text-sm border rounded-md px-2 pb-2">
        <div className="flex">
          <div className="w-[50%] border-zinc-300 border-r content-center">
            Services
          </div>
          <div className="w-[25%] text-center content-center">
            Local Packers & Movers
          </div>
          <div className="p-1 w-[25%] border-l border-zinc-300 text-center content-center">
            Nestate <br /> Packers & Movers
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {serviceComparison.map((item) => (
            <div className="flex border rounded-md">
              <div className="w-[50%] border-r p-4 border-zinc-300">
                {item.service}
              </div>
              <div className="w-[25%]">
                {item.local === "yes" ? (
                  <IoCheckmark className="mx-auto" />
                ) : item.local === "no" ? (
                  <RxCross2 className="mx-auto" />
                ) : (
                  ""
                )}
              </div>
              <div className="w-[25%] border-l border-zinc-300">
                {item.nestate === "yes" ? (
                  <IoCheckmark className="mx-auto" />
                ) : item.local === "no" ? (
                  <RxCross2 className="mx-auto" />
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComparison;
