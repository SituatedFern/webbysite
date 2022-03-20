import React from "react";

const Card = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-gray-900 mb-10 cursor-pointer">
      <img
        src="https://source.unsplash.com/random"
        alt=""
        className="w-full"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-sky-500 text-xl mb-2">{props.title}</div>
        <ul>
          <li className="mb-2">
            <strong>{props.date}</strong>
          </li>
          <li className="font-jetbrains">{props.desc}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
