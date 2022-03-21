import React from "react";
import { useState } from "react";
import db from "./firebase";

// function About() {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();

//   const Push = () => {
//     db.ref("user")
//       .set({
//         name: name,
//         email: email,
//       })
//       .catch(alert);
//   };

  return (
    <div
      id="Newsletter"
      className="min-h-screen bg-black flex flex-col items-center justify-center"
    >
      <p className="text-2xl md:text-5xl text-white font-bold font-poppins mb-20">
        Sign Up For My Newsletter!
      </p>
      <form action="" className="text-gray-600 text-md md:text-3xl space-y-10">
        <div className="flex items-center font-jetbrains space-x-3">
          <label for="name">My name is </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Thorin Oakenshield"
            className="flex-grow bg-transparent border-b-4 border-gray-900 p-2 outline-none text-white focus:border-gray-300"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center font-jetbrains space-x-3">
          <label for="email">My email is </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="thorino@hobbit.com"
            className="flex-grow bg-transparent border-b-4 border-gray-900 p-2 outline-none text-white focus:border-gray-300"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="text-right font-jetbrains">
          //add in button: onClick={Push}
          <button  className="bg-[#FF4949] text-black py-4 px-8">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default About;
