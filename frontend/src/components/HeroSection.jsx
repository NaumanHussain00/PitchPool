import React from "react";
import Header from "./Header";

const HeroSection = () => {
  return (
    <div className="">
      <Header />
      <section className=" py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">    
            Smart Funding Start <br />
            <span className="italic text-[#a6a7b2]">here</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-800 text-lg mb-10">
             A digital platform that empowers founders to develop bold ideas, attract smart investment, and scale impactful businesses globally.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#aeddb6] text-black px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#afdfb7] transition">
              See Pitches
            </button>
            {/* <button className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:border-gray-400 transition">
              📍 Available Now
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
