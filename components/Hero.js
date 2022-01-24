import React from "react";

const Hero = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center font-bold font-poppins">
      {/* Add hover effect so that SVG hand waves when hovering over "Hey," */}
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-white hover:text-[#48C5F7] mb-14 cursor-pointer">
        Hey,
      </h1>
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-[#8FFFA8] mb-14">
        I'm Ashwin!
      </h1>
    </div>
  );
};

export default Hero;
