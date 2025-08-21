import React from "react";
import { RiMapPinLine } from "react-icons/ri";

const DiscoverPropertyCard = ({ image, title, price, details, location }) => {
  return (
    <div
      className="relative w-full h-80 rounded-xl overflow-hidden shadow-md bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-4 text-white z-10">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-green-400 font-bold">{price}</p>
        <p className="text-sm">{details}</p>
        <div className="flex items-center text-sm mt-2">
          <RiMapPinLine className="mr-1" /> {location}
        </div>
      </div>
    </div>
  );
};

export default DiscoverPropertyCard;
