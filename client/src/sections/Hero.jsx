// pages/HeroPage.jsx
import React from "react";
import HeroImage from "../assets/HeroImage.png";

export default function HeroPage() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Browse Our Properties
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Find your perfect home among our curated properties. <br />Start browsing
            now!
          </p>
        </div>
      </div>
    </div>
  );
}
