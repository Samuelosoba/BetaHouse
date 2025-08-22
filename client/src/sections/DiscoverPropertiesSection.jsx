import React, { useEffect, useState } from "react";
import DiscoverPropertyCard from "../components/DiscoverPropertiesCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { getPopularProperties } from "../api/property";


const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const DiscoverPropertySection = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPopularProperties();
        setProperties(res.data); 
      } catch (err) {
        console.error("Error fetching popular properties:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const mobileSlides = chunkArray(properties, 1);
  const desktopSlides = chunkArray(properties, 4);

  return (
    <section className="py-10 px-4 relative">
      <h2 className="text-2xl font-bold text-center mb-6">
        Discover Our Popular Properties
      </h2>

      {loading ? (
        <p className="text-center">Loading properties...</p>
      ) : properties.length === 0 ? (
        <p className="text-center">No properties found.</p>
      ) : (
        <>
       
          <div className="block md:hidden">
            <div className="carousel w-full">
              {mobileSlides.map((group, idx) => (
                <div
                  key={idx}
                  id={`mob-slide${idx}`}
                  className="carousel-item relative w-full justify-center"
                >
                  {group.map((property) => (
                    <DiscoverPropertyCard
                      key={property._id}
                      image={`https://betahouse-fbp8.onrender.com/uploads/${property.image}`}
                      title={property.title}
                      price={`₦${Number(property.price).toLocaleString()}`}
                      details={property.details}
                      location={property.location}
                    />
                  ))}

                 
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a
                      href={`#mob-slide${
                        (idx - 1 + mobileSlides.length) % mobileSlides.length
                      }`}
                      className="btn btn-circle bg-green-700 text-white border-none hover:bg-green-800"
                    >
                      <RiArrowLeftSLine size={24} />
                    </a>
                    <a
                      href={`#mob-slide${(idx + 1) % mobileSlides.length}`}
                      className="btn btn-circle bg-green-700 text-white border-none hover:bg-green-800"
                    >
                      <RiArrowRightSLine size={24} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

       
          <div className="hidden md:block">
            <div className="carousel w-full">
              {desktopSlides.map((group, idx) => (
                <div
                  key={idx}
                  id={`desk-slide${idx}`}
                  className="carousel-item relative w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                    {group.map((property) => (
                      <DiscoverPropertyCard
                        key={property._id}
                        image={`https://betahouse-fbp8.onrender.com/uploads/${property.image}`}
                        title={property.title}
                        price={`₦${Number(property.price).toLocaleString()}`}
                        details={property.details}
                        location={property.location}
                      />
                    ))}
                  </div>

               
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
                    <a
                      href={`#desk-slide${
                        (idx - 1 + desktopSlides.length) % desktopSlides.length
                      }`}
                      className="btn btn-circle bg-green-700 text-white border-none hover:bg-green-800"
                    >
                      <RiArrowLeftSLine size={24} />
                    </a>
                    <a
                      href={`#desk-slide${(idx + 1) % desktopSlides.length}`}
                      className="btn btn-circle bg-green-700 text-white border-none hover:bg-green-800"
                    >
                      <RiArrowRightSLine size={24} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default DiscoverPropertySection;
