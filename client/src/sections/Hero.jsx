// pages/HeroPage.jsx
import React from "react";
import HeroImage from "../assets/HeroImage.png";
import HeroSearch from "../components/HeroSearch";

export default function HeroPage({ onSearch }) {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-12">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-12">
            Browse Our Properties
          </h1>
          <p className="text-base hidden lg:block  mb-8 sm:mb-10 leading-relaxed">
            Find your perfect home among our curated properties.
            <br className="" />
            Start browsing now!
          </p>

         
          <div className="w-full max-w-2xl mx-auto mt-24 lg:mt-24">
            <HeroSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
