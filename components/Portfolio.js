import React from "react";
import Card from "./Card";

const About = () => {
  return (
    <div className=" bg-black flex flex-col font-poppins text-white">
      <p className="font-bold text-xl mt-10 mb-14 ml-14 text-[#FF4949]">
        Portfolio:
      </p>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mb-28">
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
