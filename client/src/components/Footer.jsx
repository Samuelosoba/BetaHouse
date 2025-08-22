import React from "react";
import Logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
      
        <div className="space-y-4">
         <img src={Logo} alt="" className="w-30" />
          <p className="text-sm mb-4">
            Discover, rent, and find your ideal home hassle-free with BetaHouse.
            Take control of your rental journey today!
          </p>
          <div className="text-sm space-y-2">
            <p>
              <i className="ri-map-pin-line mr-2"></i>95 Tinubu Estate, Lekki,
              Lagos
            </p>
            <p>
              <i className="ri-phone-line mr-2"></i>+234 675 8935 675
            </p>
            <p>
              <i className="ri-mail-line mr-2"></i>support@rentbetahouse.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Properties
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4 className="text-lg font-semibold mb-4">More</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Agents
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Affordable Houses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ’s
              </a>
            </li>
          </ul>
        </div>

        {/* Popular Search */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Popular Search</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Apartment for sale
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Apartment for rent
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                3 bedroom flat
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bungalow
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 text-center text-sm py-4 bg-green-950">
        <p>Copyright 2023 Betahouse | Designed by Michael.fig</p>
        <p>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
