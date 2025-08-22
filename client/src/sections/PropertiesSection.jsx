import React, { useState, useEffect } from "react";
import PropertyCard from "../components/PropertiesCard";
import { getAllProperties } from "../api/property";

const pageSize = 9;

export default function PropertiesSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await getAllProperties();
         console.log("FULL RESPONSE:", res.data); 
        setProperties(res.data);
        console.log("IMAGE VALUE:", properties.image); 
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);
  

  if (loading)
    return <p className="text-center py-10">Loading properties...</p>;

  const totalPages = Math.ceil(properties.length / pageSize);

  const paginatedProperties = properties.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">
          Showing {paginatedProperties.length} of {properties.length} results
        </h1>
        <select className="select select-bordered w-32 text-sm">
          <option>Default</option>
          <option>Price (High to Low)</option>
          <option>Price (Low to High)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProperties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          <i className="ri-arrow-left-s-line text-lg"></i>
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            className={`w-7 h-7 flex items-center justify-center rounded-sm ${
              currentPage === idx + 1 ? "text-white bg-green-400" : "text-black"
            }`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          <i className="ri-arrow-right-s-line text-lg"></i>
        </button>
      </div>
    </div>
  );
}
