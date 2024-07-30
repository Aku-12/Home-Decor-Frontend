import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";
import { listStyle } from "./Config";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("roles");
    
    setIsLoggedIn(false);
    
    navigate("/");
  };

  return (
    <div className="my-32">
      <header className="shadow md:shadow-lg fixed top-0 left-0 right-0 h-[5rem] z-10 flex justify-between items-center bg-[#fff]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
          <Link to="/" className="text-2xl font-bold text-[#333]">
            <div className="flex items-center">
   
              <h2 className="font-bold text-2xl">Furni</h2>
              <h2 className="text-red-500 font-bold text-2xl">ture</h2>
             
            </div>
            </Link>
            <div className="hidden md:flex md:items-center md:w-[70%] xl:w-[65%]">
              <ul className="flex justify-around w-full">
                <li>
                  <Link to="/" className={listStyle}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={listStyle}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/furniture" className={listStyle}>
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className={listStyle}>
                    Cart
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={listStyle}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex gap-10">
              {isLoggedIn ? (
                <button
                  onClick={handleSignOut}
                  className="text-[18px] font-medium bg-orange-project rounded-md px-4 py-2 tracking-wider"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link to="/signin">
                    <button className="text-[18px] font-medium bg-orange-project rounded-md px-4 py-2 tracking-wider">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="text-[18px] bg-orange-project tracking-wider rounded-2xl px-5 py-2 bg-orange-300 text-white">
                      Signup
                    </button>
                  </Link>
                </>
              )}
            </div>
            <div className="md:hidden">
              <Hamburger />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;