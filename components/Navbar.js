import React from "react";
import Link from "next/link";

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-[#0F0F0F] relative shadow-sm font-jetbrains">
        <div className="pl-8 text-[#48C5F7] hover:text-[#FF4949]">
          <Link href="/">Ashwin Gnanam</Link>
        </div>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block hidden italic">
          <Link href="/">
            <a className="p-4 text-[#48C5F7] hover:text-[#FF4949]">About</a>
          </Link>
          <Link href="/">
            <a className="p-4 text-[#48C5F7] hover:text-[#FF4949]">Portfolio</a>
          </Link>
          <Link href="/">
            <a className="p-4 text-[#48C5F7] hover:text-[#FF4949]">
              Newsletter
            </a>
          </Link>
          <Link href="/">
            <a className="p-4 text-[#48C5F7] hover:text-[#FF4949]">Contact</a>
          </Link>
        </div>
      </nav>
      <div className="flex justify-between items-center h-1 bg-[#FF4949] relative shadow-sm font-mono" />
    </>
  );
};

export default Navbar;
