import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Header = () => {

  const dispatch = useDispatch();

  const hamburgerMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="nav overflow-hidden bg-black w-full flex justify-between h-16 items-center">
      <div className="nav-left items-center flex">
        <img
        onClick={() => hamburgerMenu()}
          className="w-7 h-7 m-3  hover:bg-slate-800 hover:rounded-full hover:scale-125 transition ease-linear duration-200 cursor-pointer"
          src="https://cdn.iconfinder.com/stored_data/1542692/128/png?token=1708600143-bxBQTj4KS7%2FPZyp3dc13nm1YiQz3scmi%2BmTZsH6tfDU%3D"
          alt="hamburger-menu"
        />
       <a href="/">
        <img
          className="w-28 h-28  ml-2 hover:scale-110 transition ease-linear duration-200  cursor-pointer"
          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube2_colored_svg-512.png"
          alt="youtube-logo"
        />
        </a>
         
      </div>

      <div className="nav-center w-[45%] flex items-center justify-around">
        <input 
        className="w-4/5 h-9 border-2 border-gray-700 rounded-l-full border-r-transparent outline-none text-white bg-black pl-3 "
        type="text" placeholder="Search" />
        <button className="text-2xl -ml-14 border-2  rounded-r-full border-gray-700 bg-[#222222] px-4 outline-none">🔍</button>

        <img
          className="h-7 w-7 -ml-6 font-bold hover:bg-slate-800 hover:rounded-full hover:scale-125 transition ease-linear duration-200  cursor-pointer"
          src="https://cdn.iconfinder.com/stored_data/1542699/128/png?token=1708600322-owL%2BsbL1K16bPMDNn9wcww%2BQtHZ6si5R2Qa%2B3mQ6Uxs%3D"
          alt="mic-button"
        />
      </div>

      <div className="nav-right flex items-center justify-around">
        <img
          className="w-8 h-8  mr-4 hover:bg-slate-800 hover:rounded-full hover:scale-125 transition ease-linear duration-200  cursor-pointer"
          src="https://cdn.iconfinder.com/stored_data/1542754/128/png?token=1708602102-r3w5A5nZq8mJgiLh7FMGcj0EZ1h7628wim9fYg2SVhY%3D"
          alt="camera"
        />
        <img
          className="w-6 h-6 mr-4  hover:bg-slate-800 hover:rounded-full hover:scale-125 transition ease-linear duration-200  cursor-pointer"
          src="https://cdn.iconfinder.com/stored_data/1542841/128/png?token=1708604692-J2L%2BiREHSKZAXU%2BazVku43vF5QW%2F68P3yjJ3%2Fr1ukwM%3D"
          alt="bell-icon"
        />
        <img className="h-6 w-6 mr-4  hover:bg-slate-800 hover:rounded-full hover:scale-125 transition ease-linear duration-200  cursor-pointer"
        src="https://cdn.iconfinder.com/stored_data/1542859/128/png?token=1708605061-FyBro8HzrB8pVeQDRTv4i7nz93eLiWP2AgcHn%2FMc7Mk%3D" alt="profile-icon" />
      </div>
    </div>
  );
};

export default Header;
