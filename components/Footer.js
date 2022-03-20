import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

library.add(fab);

const Footer = () => {
  return (
    <>
      <div id="Footer" className="flex h-1 bg-[#FF4949] shadow-sm" />
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
            <div className="list-none font-jetbrains text-[35px] mb-2.5">
              <a target="_blank" href="https://github.com/SituatedFern">
                <FontAwesomeIcon
                  className="hover:text-[#48c5f7] hover:scale-150 transition-all duration-150"
                  icon={["fab", "github"]}
                />
              </a>{" "}
              <a
                target="_blank"
                href="https://ca.linkedin.com/in/ashwin-gnanam"
              >
                <FontAwesomeIcon
                  className="hover:text-[#48c5f7] hover:scale-150 transition-all duration-150"
                  icon={["fab", "linkedin-in"]}
                />
              </a>{" "}
              <a target="_blank" href="https://twitter.com/atgnanam">
                <FontAwesomeIcon
                  className="hover:text-[#48c5f7] hover:scale-150 transition-all duration-150"
                  icon={["fab", "twitter"]}
                />
              </a>{" "}
              <a target="_blank" href="https://atgnanam.medium.com/">
                <FontAwesomeIcon
                  className="hover:text-[#48c5f7] hover:scale-150 transition-all duration-150"
                  icon={["fab", "medium-m"]}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
