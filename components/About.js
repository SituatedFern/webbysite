import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className=" bg-black h-screen flex flex-col font-bold font-poppins text-white"
    >
      <p className="text-3xl mt-10 mb-5 ml-14 text-[#FF4949]">About Me:</p>
      <img
        src={"/images/pfp.jpg"}
        className="h-44 w-44 md:h-64 md:w-64 lg:w-96 lg:h-96 mx-auto mb-10 mt-24 rounded-full border-solid border-sky-500 border-8"
      ></img>
      <p className="mx-14 font-jetbrains text-sm md:text-lg">
        I am a tech enthusiast, full time Linux user, and an Innovator at The
        Knowledge Society. I have been interested in programming and technology
        for as long as I can remember.I am in my second year at The Knowledge
        Society (TKS). At TKS, I learn about emerging technologies and
        participate in hackathons, some involving large organizations, like the
        UN, IKEA, and the Pathcheck Foundation. I have been with A Few Good Men
        choir for over five years. I have really enjoyed meeting new people,
        learning how to read music, and improve my vocal range. I write articles
        and newsletters about my activites and things that I am interested in.
      </p>
    </div>
  );
};

export default About;
