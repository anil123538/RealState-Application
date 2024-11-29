import React from "react";

const Services = ({ title }) => {
  const service = [
    {
      id: 1,
      image: "/paintingAndCleaning/BathroomCleaning.webp",
      title: "Bathroom Cleaning",
    },
    {
      id: 2,
      image: "/paintingAndCleaning/KitchenCleaning.webp",
      title: "Kitchen Cleaning",
    },
    {
      id: 3,
      image: "/paintingAndCleaning/PremiumHouseCleaning.webp",
      title: "Premium Cleaning",
    },
    {
      id: 4,
      image: "/paintingAndCleaning/SofaCleaning.webp",
      title: "Sofa Cleaning",
    },
    {
      id: 5,
      image: "/paintingAndCleaning/FullHouseCleaning.webp",
      title: "Full House Cleaning",
    },
  ];
  return (
    <div className="p-5">
      <div className="font-semibold text-2xl text-center mb-4">{title}</div>
      <div className="flex items-center justify-center gap-4">
        {service.map((item) => (
          <div className="flex flex-col items-center gap-2">
            <img
              src={item.image}
              alt=""
              className="m-0  border p-1 rounded-full border-[#fa3a57] w-20"
            />
            <div className="text-sm">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
