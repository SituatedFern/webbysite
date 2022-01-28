import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex h-1 bg-[#FF4949] shadow-sm" />
      <footer className="p-10 bg-[#0F0F0F] text-white">
        <div className="flex flex-wrap">
          <div className="w-1/2 p-2">
            <h4 className="text-lg sm:text-base text-white mb-9 font-poppins relative">
              Contact
            </h4>
            <ul className="list-none font-jetbrains">
              <li className="mb-2.5">
                <a href="/">+1 416 896 2340</a>
              </li>
              <li className="mb-2.5">
                <a href="/">atgnanam@outlook.com</a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 p-2">
            <h4 className="text-lg sm:text-base text-white mb-9 font-poppins relative">
              Find me on:
            </h4>
            <ul className="list-none font-jetbrains">
              <li className="mb-2.5">
                <a href="/">FAQ</a>
              </li>
              <li className="mb-2.5">
                <a href="/">shipping</a>
              </li>
              <li className="mb-2.5">
                <a href="/">returns</a>
              </li>
              <li className="mb-2.5">
                <a href="/">order status</a>
              </li>
              <li className="mb-2.5">
                <a href="/">payment options</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
