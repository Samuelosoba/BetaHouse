import React from "react";
import DiscoverPropertyCard from "../components/DiscoverPropertiesCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

// Demo property data
const properties = [
  {
    id: 1,
    image: "https://via.placeholder.com/600x400",
    title: "Semi Detached Duplex",
    price: "₦1,430,000,000",
    details: "8 bed | 3 bath | 720 sq ft",
    location: "Victoria Island, Lagos",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/600x400",
    title: "Special Duplex",
    price: "₦670,000,000",
    details: "3 bed | 3 bath | 720 sq ft",
    location: "Victoria Island, Lagos",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/600x400",
    title: "Split-Level House",
    price: "₦340,000,000",
    details: "6 bed | 3 bath | 720 sq ft",
    location: "Victoria Island, Lagos",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/600x400",
    title: "Twin Duplex",
    price: "₦290,000,000",
    details: "3 bed | 3 bath | 720 sq ft",
    location: "Victoria Island, Lagos",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/600x400",
    title: "Luxury Villa",
    price: "₦850,000,000",
    details: "5 bed | 4 bath | 1000 sq ft",
    location: "Ikoyi, Lagos",
  },
];

// Utility: chunk properties into groups (1 for mobile, 4 for desktop)
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const DiscoverPropertySection = () => {
  // For responsive design, DaisyUI carousel doesn’t auto-detect screen size,
  // so we create two carousels (mobile vs desktop) and show/hide with Tailwind.

  // Small screen: 1 property per slide
  const mobileSlides = chunkArray(properties, 1);
  // Medium+ screen: 4 properties per slide
  const desktopSlides = chunkArray(properties, 4);

  return (
    <section className="py-10 px-4 relative">
      <h2 className="text-2xl font-bold text-center mb-6">
        Discover Our Popular Properties
      </h2>

      {/* Mobile Carousel (1 per slide) */}
      <div className="block md:hidden">
        <div className="carousel w-full">
          {mobileSlides.map((group, idx) => (
            <div
              key={idx}
              id={`mob-slide${idx}`}
              className="carousel-item relative w-full justify-center"
            >
              {group.map((property) => (
                <DiscoverPropertyCard key={property.id} {...property} />
              ))}

              {/* Buttons */}
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

      {/* Desktop Carousel (4 per slide) */}
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
                  <DiscoverPropertyCard key={property.id} {...property} />
                ))}
              </div>

              {/* Buttons */}
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
    </section>
  );
};

export default DiscoverPropertySection;
