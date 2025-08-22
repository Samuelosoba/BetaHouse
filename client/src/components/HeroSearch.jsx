import React, { useState } from "react";
import axios from "axios";
import PropertyCard from "./PropertiesCard";
import { useNavigate } from "react-router-dom";

const HeroSearch = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate(); // ✅ useNavigate hook

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4400/api/properties/search",
        {
          params: {
            title: type,
            location,
            bedrooms,
          },
        }
      );

      setProperties(res.data || []);

      // ✅ Navigate to /properties with search query (optional)
      navigate("/search-properties", {
        state: {
          results: res.data,
          query: { type, location, bedrooms },
        },
      });
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div className="w-full px-4 py-10 bg-white shadow-lg rounded-lg max-w-7xl mx-auto -mt-20 relative z-10">
      {/* Search Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow-md">
        <div>
          <label className="text-xs text-gray-500 uppercase">Location</label>
          <input
            type="text"
            placeholder="e.g. Gbagada"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mt-1 text-black"
          />
        </div>

        <div>
          <label className="text-xs text-gray-500 uppercase">
            Property Type
          </label>
          <input
            type="text"
            placeholder="e.g. Duplex, Flat"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mt-1 text-black"
          />
        </div>

        <div>
          <label className="text-xs text-gray-500 uppercase">Bedrooms</label>
          <input
            type="number"
            min={0}
            value={bedrooms}
            onChange={(e) => setBedrooms(Number(e.target.value))}
            className="w-full border border-gray-300 p-2 rounded mt-1 text-black"
          />
        </div>

        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
          >
            Find Property
          </button>
        </div>
      </div>

      {/* Optional: Local Result Display */}
      {properties.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-center sm:text-left">
            Search Results
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} {...property} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSearch;
