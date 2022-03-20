import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-gray-900 mb-10 cursor-pointer">
      <img
        src="https://source.unsplash.com/random"
        alt=""
        className="w-full"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-sky-500 text-xl mb-2">Project Name</div>
        <ul>
          <li>
            <strong>November 2020 </strong>
          </li>
          <li>
            <strong>Downloads: </strong>
            300
          </li>
          <li>
            <strong>Likes </strong>
            400
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
