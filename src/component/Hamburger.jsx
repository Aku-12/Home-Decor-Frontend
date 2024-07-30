import React, { useState } from "react";
import hamburger from "../assets/images/hamburger.png";
import close from "../assets/images/close.png";
import { listStyle } from "./Config";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <img
          className="w-9 md:hidden cursor-pointer"
          src={isMenuOpen ? close : hamburger}
          alt={isMenuOpen ? "close menu" : "open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && (
          <div className="absolute left-2 right-20 top-16 bg-white bg-opacity-90 shadow-md z-50">
            <ul className="flex flex-col items-center space-y-2 py-6">
              <li>
                <Link className={listStyle} to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link className={listStyle} to="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link className={listStyle} to="/furniture" onClick={() => setIsMenuOpen(false)}>
                  Furniture
                </Link>
              </li>
              <li>
                <Link className={listStyle} to="/cart" onClick={() => setIsMenuOpen(false)}>
                  Cart
                </Link>
              </li>
              <li>
                <Link className={listStyle} to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
                  <button className="px-6 py-2 text-lg font-medium rounded-md tracking-wider bg-blue-500 text-white">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <button className="px-6 py-2 text-lg font-medium rounded-md tracking-wider bg-green-500 text-white">
                    Signup
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Hamburger;
