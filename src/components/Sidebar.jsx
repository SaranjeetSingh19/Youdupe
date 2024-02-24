import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="bg-black text-white w-44 border-black fixed pt-4 font-medium">
      <div className="sec-1 text-center w-32 ">
        <ul className="text-sm">
          <li className="mb-2  outline-none cursor-pointer hover:bg-gray-800 transition ease-linear duration-200 p-1 rounded-full text-center  bg-transparent">
           <Link to="/">Home</Link>
          </li>
          <li className="mb-2  cursor-pointer hover:bg-gray-800 transition ease-linear duration-200 p-1 rounded-full text-center  bg-transparent">
            Shorts
          </li>
          <li className="mb-2  cursor-pointer hover:bg-gray-800 transition ease-linear duration-200 border-b border-gray-400 p-1 rounded-full text-center  bg-transparent">
            Subscriptions
          </li>
        </ul>
      </div>
      <div className="sec-2 mt-3 text-center w-32">
        <h1 className="text-base mb-2.5 font-semibold -ml-24">You</h1>
        <ul className="text-sm">
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200  p-1 ">
            Your channel
          </li>
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200  p-1 ">
            History
          </li>
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200  p-1 ">
            Your videos
          </li>
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent    cursor-pointer hover:bg-gray-800 transition ease-linear duration-200 p-1  border-b border-gray-400 ">
            Watch later
          </li>
        </ul>
      </div>
      <div className="sec-3 mt-3">
        <h1 className="text-base mb-2.5 font-semibold">Explore</h1>
        <ul className="text-sm text-center w-32">
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200  p-1 ">
            Trending
          </li>
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200  p-1 ">
            Shopping
          </li>
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200  p-1 ">
            Music
          </li>
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200 p-1  ">
            Films
          </li>
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200  p-1 ">
            Live
          </li>
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200    border-b border-gray-400 p-1">
            Gaming
          </li>
        </ul>
      </div>
      <div className="sec-4 mt-3">
        <ul className="text-sm w-32">
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200 p-1">
            Settings
          </li>
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200  p-1">
            Report history
          </li>
          <li className="mb-2  text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200  p-1">
            Help
          </li>
          <li className="mb-2  border-b border-gray-400 text-hover rounded-full text-center  bg-transparent   cursor-pointer hover:bg-gray-800 transition ease-linear duration-200  p-1">
            Send feedback
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
