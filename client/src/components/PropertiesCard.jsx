// components/PropertyCard.jsx
import React from "react";
import { FaBed, FaBath, FaHeart, FaShareAlt } from "react-icons/fa";

export default function PropertyCard({
  image,
  title,
  location,
 details,
  price,
  isFeatured,
  isForRent,
  isForSale,
}) {
  // Format price with commas
  const formattedPrice = new Intl.NumberFormat().format(price);

  // Decide label (For Sale / For Rent / Both)
  const getListingType = () => {
    if (isForSale && isForRent) return "For Sale & Rent";
    if (isForSale) return "For Sale";
    if (isForRent) return "For Rent";
    return "";
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white">
      <div className="relative">
        <img
          src={`http://localhost:4400/uploads/${image}`}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute top-2 left-2 right-2 flex justify-between items-center w-[95%]">
          {isFeatured && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
              Featured
            </span>
          )}
          {(isForSale || isForRent) && (
            <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded">
              {getListingType()}
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-md">{title}</h2>
        <p className="text-sm text-gray-500">{location}</p>

        <div className="flex gap-4 text-sm text-gray-600 my-4">
          <span className="flex items-center gap-1">
            <FaBed /> {details.bedrooms} Bedrooms
          </span>
          <span className="flex items-center gap-1">
            <FaBath /> {details.bathrooms} Bathrooms
          </span>
        </div>

        <div className="flex items-center justify-between mt-8 text-gray-500 text-sm">
          <p className="text-lg text-black font-bold">₦{formattedPrice}</p>
          <FaHeart className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
