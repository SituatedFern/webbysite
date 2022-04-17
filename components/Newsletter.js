import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import db from "./firebase";
import Modal from "./Modal";
import BadModal from "./BadModal";
import validator from 'validator';

function About() {
  const [emailError, setEmailError] = useState('')

  const validateEmail = (e) => {
    var email = e.target.value
    setEmailError(false)
    if (validator.isEmail(email)) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }

  const saveAnswer = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, {});

    console.log({ formData });

    if (emailError == true) {
      addDoc(collection(db, "Subscribers"), formData);
    }

    
    event.target.reset();
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [showBadModal, setShowBadModal] = useState(false);

  const openBadModal = () => {
    setShowBadModal((prev) => !prev);
  };

  return (
    <div
      id="Newsletter"
      className="min-h-screen bg-black flex flex-col items-center justify-center"
    >
      <p className="text-2xl md:text-5xl text-white font-bold font-poppins mb-20">
        Sign Up For My Newsletter!
      </p>
      <form
        onSubmit={saveAnswer}
        action=""
        className="text-gray-600 text-md md:text-3xl space-y-10"
      >
        <div className="flex items-center font-jetbrains space-x-3">
          <label htmlFor="name">My name is </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Thorin Oakenshield"
            className="flex-grow bg-transparent border-b-4 border-gray-900 p-2 outline-none text-white focus:border-gray-300"
          />
        </div>

        <div className="flex items-center font-jetbrains space-x-3">
          <label htmlFor="email">My email is </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="thorino@hobbit.com"
          className={`switch ${emailError ? "flex-grow bg-transparent border-b-4 border-gray-900 p-2 outline-none text-white focus:border-green-300": "flex-grow bg-transparent border-b-4 border-gray-900 p-2 outline-none text-white focus:border-gray-300"}`}
          onChange={(e) => validateEmail(e)}
          />
        </div>
        <span>{emailError}</span>
        <div className="text-right font-jetbrains">
          <button
            onClick={emailError ? openModal : openBadModal}
            className="bg-[#FF4949] text-black py-4 px-8"
          >
            Submit
          </button>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <BadModal showBadModal={showBadModal} setShowBadModal={setShowBadModal} />
        </div>
      </form>
    </div>
  );
}
export default About;
