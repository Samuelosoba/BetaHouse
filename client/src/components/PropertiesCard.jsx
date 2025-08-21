// components/PropertyCard.jsx
import React from "react";
import { FaBed, FaBath, FaHeart, FaShareAlt } from "react-icons/fa";

export default function PropertyCard({
  image,
  title,
  location,
  bedrooms,
  bathrooms,
  price,
  isFeatured,
  isForRent,
  isForSale,
}) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 right-2 flex justify-between items-center w-[95%]">
          {isFeatured && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
              Featured
            </span>
          )}
          {(isForSale || isForRent) && (
            <span className="bg-gray-400 text-xs text-white px-2 py-1 rounded">
              {isForSale ? "For Sale" : "For Rent"}
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-md">{title}</h2>
        <p className="text-sm text-gray-500">{location}</p>

        <div className="flex gap-4 text-sm text-gray-600 my-4">
          <span className="flex items-center gap-1">
            <FaBed /> {bedrooms} Bedrooms
          </span>
          <span className="flex items-center gap-1">
            <FaBath /> {bathrooms} Bathrooms
          </span>
        </div>

        <div className="flex items-center justify-between mt-8 text-gray-500 text-sm">
          <p className="text-lg text-black font-bold">{price}</p>
          <FaHeart className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
