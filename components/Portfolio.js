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
            title="The Dangers of AI (and how to avoid them)"
            date="September 2020"
            desc="Artificial Intelligence has scary implications for the world at large. AI is not the same as it is portrayed in movies like The Terminator or Wall-E, and those are not the real reasons you should be scared of it. From social media bots to audio and video deep fakes that will make you question reality, let’s look at the more sinister ways that Artificial Intelligence is being used."
            image="/images/IntroToAiArticle.jpg"
            alt="robot playing piano"
            link="https://atgnanam.medium.com/the-dangers-of-ai-and-how-to-avoid-them-8486f0d8aeb8"
          />
          <Card
            title="Why Arnold Schwarzenegger’s position on climate change is so unique — and why we need more of it"
            date="February 2021"
            desc="This article proves that Arnold Schwarzenegger’s 2014 article titled “I Don’t Give a **** If We Agree About Climate Change” is even more relevant today. More importantly, this is an excellent approach to selling people on why a carbon neutral society is the only viable option. Schwarzenegger uses his ideas, voice, and diction to make the reader understand what he is speaking about and keep them engaged with his writing."
            image="/images/ArnoldSchwarzeneggerArticle.jpg"
            alt="Overhead shot of the woods"
            link="https://atgnanam.medium.com/why-arnold-schwarzeneggers-position-on-climate-change-is-so-unique-and-why-we-need-more-of-it-17296ad7173"
          />
          <Card
            title="Modero: Building Better Intersections with AI and Electromagnetism"
            date="April 2021"
            desc="In the United States alone, there are more than 2.5 million intersection accidents annually. This accounts for 40% of all car crashes. Even though there are many road safety laws and technologies designed to protect us, there are still two people who die in the U.S. everyday from people who do not stop at red lights. With the computer vision and AI fields increasing so rapidly and overlapping with so many other sectors, it is baffling that there are no scalable solutions to this problem yet."
            image="/images/ModeroArticle.jpg"
            alt="Overhead shot of an Intersection"
            link="https://atgnanam.medium.com/modero-building-better-intersections-with-ai-and-electromagnetism-891b62997c1"
          />
          <Card
            title="An Intro to AI - Article"
            date="June 2021"
            desc="Before we start learning about the different types and applications of AI, we need to learn what AI is. IBM describes Artificial Intelligence as “any human-like intelligence exhibited by a computer, robot, or other machine”. AI can be easily explained as three definitions: Machine Learning, Deep Learning, and General Artificial Intelligence."
            image="/images/AnIntroToAIArticle.jpg"
            alt="Neon lights that read 'Data has a better idea'"
            link="https://atgnanam.medium.com/an-intro-to-ai-af7fbbfd65c7"
          />
          <Card
            title="An Intro to AI - Video"
            date="October 2020"
            desc="A brief explanation of my journey with AI, the different types of neural networks, and their applications."
            image="/images/IntroToAIVideo.jpg"
            alt="Neon lights with title"
            link="https://youtu.be/EEC2hrgizqU"
          />
          <Card
            title="This Website!!!"
            date="March 2022"
            desc="I have been learning Reactjs, Nextjs, and Tailwind css for several months so that I could build this website from the ground up."
            image="/images/WebsiteCapture.jpg"
            alt="Capture of this website's UI"
            link="/"
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
            image="https://source.unsplash.com/random"
            alt=""
            link=""
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
            image="https://source.unsplash.com/random"
            alt=""
            link=""
          />
          <Card
            title="Project Name"
            date="November 2020"
            desc="This is a brief description of the project and what I did."
            image="https://source.unsplash.com/random"
            alt=""
            link=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
