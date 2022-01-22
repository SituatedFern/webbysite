import React from "react";
import Link from "next/link";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link href="/">
        <a className="p-4">About</a>
      </Link>
      <Link href="/">
        <a className="p-4">Portfolio</a>
      </Link>
      <Link href="/">
        <a className="p-4">Newsletter</a>
      </Link>
      <Link href="/">
        <a className="p-4">Contact</a>
      </Link>
    </div>
  );
};

export default Dropdown;
