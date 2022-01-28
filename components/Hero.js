import React from "react";

const Hero = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center font-bold font-poppins">
      {/* Add hover effect so that SVG hand waves when hovering over "Hey," */}
      <div className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl mb-14">
        <div className=" text-white hover:text-[#48C5F7] relative z-20 group">
          <div className="h-20 lg:h-40 absolute left-0 right-0 flex justify-center items-center -z-10">
            {/* to remove wave get rid of "group-hover:animate-wave" */}
            <p className="md:block hidden scale-0 text-white mr-72 lg:mr-[30rem] mb-3 lg:mb-10 group-hover:scale-100 group-hover:animate-wave transition-all duration-150 origin-right">
              👋
            </p>
          </div>
          <p className=" text-white hover:text-[#48C5F7]">Hey,</p>
        </div>
      </div>
      <p className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-[#8FFFA8] mb-14 hover:text-[#FF4949] cursor-pointer">
        I'm Ashwin!
      </p>
    </div>
  );
};

export default Hero;
