import { useEffect, useState } from "react";

const Highlight = ({ data, click }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  return (
    <div className="shadow-md md:my-0 my-4 relative flex overflow-hidden w-full">
      <span className="h-full w-1 bg-green absolute left-0 top-0"></span>
      <div
        className="flex transition-transform duration-500 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((o, index) => {
          const { img, title } = o;
          return (
            <div
              key={index}
              onClick={click}
              className="flex p-3 gap-2 flex-shrink-0 w-full cursor-pointer" style={{height: "90px"}}
            >
              <div className="w-3/12">
                <img src={img} alt="dhamaka" style={{width: "50px"}} />
              </div>
              <div className="text-sm w:9/12" style={{marginLeft: "-25px"}}>
                <h3 className="font-semibold text-base">{title}</h3>
                <button className="text-xs capitalize text-blue">
                  view all offers
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Highlight;
