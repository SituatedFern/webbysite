import React from "react";
import Link from "next/link";

const Card = (props) => {
  return (
    <Link href={props.link} passHref>
      <div className="max-w-full md:max-w-sm rounded overflow-hidden shadow-none md:shadow-lg shadow-gray-900 mb-10 cursor-pointer">
        <img src={props.image} alt={props.alt} className="w-full"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-sky-500 text-xl mb-2">
            {props.title}
          </div>
          <ul>
            <li className="mb-2">
              <strong>{props.date}</strong>
            </li>
            <li className="font-jetbrains">{props.desc}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Card;
