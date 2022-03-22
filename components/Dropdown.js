import React from "react";
import Link from "next/link";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-gray-600"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link href="#About">
        <a className="p-4">About</a>
      </Link>
      <Link href="#Portfolio">
        <a className="p-4">Portfolio</a>
      </Link>
      <Link href="#Newsletter">
        <a className="p-4">Newsletter</a>
      </Link>
      <Link href="#Footer">
        <a className="p-4">Contact</a>
      </Link>
    </div>
  );
};

export default Dropdown;
