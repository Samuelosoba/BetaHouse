import React from "react";
import { Outlet } from "react-router";
import AuthImage from "../assets/AuthImage.png";
import Logo from "../assets/Logo.png";

export default function AuthLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden flex-col justify-center lg:flex-row">
      {/* Left Side: Form */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-2">
        <div className="w-full px-6 py-4 h-screen">
          <Outlet />
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full hidden lg:block">
        <img src={AuthImage} className="object-cover h-full w-full" />
        <img
          src={Logo}
          alt="Logo"
          className="absolute top-4 left-4 w-24 md:w-32"
        />
      </div>
    </div>
  );
}
