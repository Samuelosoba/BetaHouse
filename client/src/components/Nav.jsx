// components/Navbar.jsx
import React from "react";
import Logo from "../assets/logo.png"; // your logo path

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-transparent text-white">
      <img src={Logo} alt="Logo" className="w-30" />
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            Properties
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            Blogs
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="flex space-x-6">
        <button className="px-5 py-2  border border-white rounded-md">
          Sign in
        </button>
        <button className="px-5 py-2  rounded-md bg-[#3D9970]">Sign up</button>
      </div>
    </nav>
  );
}
