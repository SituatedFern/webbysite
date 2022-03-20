import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" bg-black h-screen flex flex-col justify-center items-center font-bold font-poppins">
      <div className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl mb-14">
        <div className=" text-white hover:text-[#48C5F7] relative z-20 group">
          <div className="h-20 lg:h-40 absolute left-0 right-0 flex justify-center items-center -z-10">
            <div className="scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 origin-center">
              <p className="md:block hidden text-white mr-72 lg:mr-[30rem] mb-3 lg:mb-10 group-hover:animate-wave origin-right">
                👋
              </p>
            </div>
          </div>
          <p className=" text-white hover:text-[#48C5F7]">Hey,</p>
        </div>
      </div>
      <Link href="#About">
        <p className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-[#8FFFA8] mb-14 hover:text-[#FF4949] cursor-pointer z-30">
          I'm Ashwin!
        </p>
      </Link>
    </div>
  );
};

export default Hero;
