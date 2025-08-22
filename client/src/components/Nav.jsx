import React, { useState, useEffect } from "react";
import Logo from "../assets/react.svg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-black text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-28 md:w-32" />

        {/* Hamburger - Mobile Only */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#properties" className="hover:underline">
              Properties
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#blogs" className="hover:underline">
              Blogs
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Desktop Right Side: User OR Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              {/* Avatar from daisyUI */}
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.firstname}+${user.lastname}`}
                    alt="Profile"
                  />
                </div>
              </div>
              <span className="font-medium">
                {user.firstname} {user.lastname}
              </span>
            </div>
          ) : (
            <>
              <button className="px-5 py-2 border border-white rounded-md">
                Sign in
              </button>
              <button className="px-5 py-2 rounded-md bg-[#3D9970]">
                Sign up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#properties" className="hover:underline">
                Properties
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#blogs" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="mt-4 flex flex-col space-y-2">
            {user ? (
              <div className="flex items-center space-x-2 text-white">
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.firstname}+${user.lastname}`}
                      alt="Profile"
                    />
                  </div>
                </div>
                <span>
                  {user.firstname} {user.lastname}
                </span>
              </div>
            ) : (
              <>
                <button className="w-full px-4 py-2 border border-white rounded-md">
                  Sign in
                </button>
                <button className="w-full px-4 py-2 rounded-md bg-[#3D9970]">
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
