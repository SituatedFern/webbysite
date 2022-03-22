import React from "react";
import Link from "next/link";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-[#0F0F0F]"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link href="#About">
        <a className="p-4 font-jetbrains italic text-[#FF4949]">About</a>
      </Link>
      <Link href="#Portfolio">
        <a className="p-4 font-jetbrains italic text-[#FF4949]">Portfolio</a>
      </Link>
      <Link href="#Newsletter">
        <a className="p-4 font-jetbrains italic text-[#FF4949]">Newsletter</a>
      </Link>
      <Link href="#Footer">
        <a className="p-4 font-jetbrains italic text-[#FF4949]">Contact</a>
      </Link>
    </div>
  );
};

export default Dropdown;
