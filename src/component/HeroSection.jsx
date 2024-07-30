import React from "react";
import ornament from "../assets/images/ornament.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-screen">
      <section className="relative top-[10rem]">
        <div className="w-[85%] mx-auto grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="max-w-lg w-full mx-auto md:order-2">
            <img
              src={ornament}
              alt="Ornament image"
              className="w-full object-cover object-center h-full md:rounded-3xl"
            />
          </div>
          <div className="text-center flex flex-col gap-4 md:order-1 md:text-left md:justify-center md:items-start">
            <h1 className="text-2xl md:text-4xl">
              Perfect Harmony: Comfort & Style
            </h1>
            <p className="font-light text-lg md:mb-5">
              Explore furniture that harmoniously combines comfort and style to
              elevate your home
            </p>
            <div className="flex w-[100%]">
              <button className="py-2 px-4 rounded-lg border-[1px] border-black w-[50%] mx-auto md:mx-0 text-lg max-w-[176px]">
                <Link to="/furniture">
                Explore our offers
                </Link>
              </button>
              <button className="w-[50%] mx-auto md:mx-0 text-lg max-w-[176px]">
                <Link to="/youtube.com">Watch Video</Link>
               
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
