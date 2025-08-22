// src/pages/SearchPropertyPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "../components/PropertiesCard";

const SearchPropertyPage = () => {
  const location = useLocation();
  const { results = [], query } = location.state || {};

  return (
    //my search page
    <div className="max-w-7xl mx-auto p-6 my-20">
      <h2 className="text-2xl font-bold mb-6">Search Results</h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((property) => (
            <PropertyCard key={property._id} {...property} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No properties found for your search.</p>
      )}
    </div>
  );
};

export default SearchPropertyPage;
