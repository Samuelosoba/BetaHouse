// pages/PropertiesPage.jsx
import React, { useState } from "react";
import Image from "../assets/ImageProperty.png";
import PropertyCard from "../components/PropertiesCard";

const propertiesData = [
  // Dummy data (ideally from API or DB)
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  {
    image: Image,
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    bedrooms: 6,
    bathrooms: 3,
    price: "₦3,340,000,000",
    isFeatured: true,
    isForSale: true,
  },
  // ...Add more properties
];

const pageSize = 9;

export default function PropertiesSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(propertiesData.length / pageSize);

  const paginatedProperties = propertiesData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">
          Showing {paginatedProperties.length} of {propertiesData.length}{" "}
          results
        </h1>
        <select className="select select-bordered w-32 text-sm">
          <option>Default</option>
          <option>Price (High to Low)</option>
          <option>Price (Low to High)</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProperties.map((property, idx) => (
          <PropertyCard key={idx} {...property} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          className=""
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          <i className="ri-arrow-left-s-line text-lg"></i>
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={`w-7 h-7 flex gap-2 items-center justify-center rounded-sm  ${
              currentPage === idx + 1 ? "text-white bg-green-400" : "text-black"
            }`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className=""
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          <i className="ri-arrow-right-s-line text-lg"></i>
        </button>
      </div>
    </div>
  );
}
