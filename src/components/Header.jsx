import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_KEY } from "./utils/constants";
import { cacheResults } from "./utils/searchApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faVideoCamera,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMicrophone,
  faUser,
  faBars,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuerry, setSearchQuerry] = useState("");

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuerry]) {
        setSuggestions(searchCache[searchQuerry]); // If result existed in cache then show or..
      } else {
        getSearchSuggestions(); // Make an api call for results.
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuerry]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_KEY + searchQuerry);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log(json);

    dispatch(
      cacheResults({
        [searchQuerry]: json[1],
      })
    ); //If the result is not present then update the Cache.
  };

  const hamburgerMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="nav overflow-hidden bg-black w-full flex justify-between h-16 items-center">
      <div className="nav-left items-center flex">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl ml-2 mr-2 transition ease-out duration-150 hover:scale-110 cursor-pointer  text-white"
          onClick={() => hamburgerMenu()}
        />

        <a href="/">
          <img
            className="w-28 h-28  ml-2 hover:scale-110 transition ease-linear duration-200  cursor-pointer"
            src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube2_colored_svg-512.png"
            alt="youtube-logo"
          />
        </a>
        <h1 className="text-white text-2xl"></h1>
      </div>

      <div className="nav-center w-[45%] flex items-center justify-around">
        <input
          onChange={(e) => setSearchQuerry(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          value={searchQuerry}
          className="w-4/5 h-9 border-2 border-gray-700 rounded-l-full border-r-transparent outline-none text-white bg-black pl-3 "
          type="text"
          placeholder="Search"
        />
        <button className="text-2xl -ml-14 border-2  rounded-r-full border-gray-700 bg-[#222222] px-4 outline-none">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#ffffff" }}
            className="bg-transparent text-xl"
          />
        </button>

        {showSuggestion && (
          <div className="text-white ml-2 rounded-xl font-semibold absolute top-12 mt-4 w-[33vw] left-96">
            <ul className="rounded-xl mb-1 flex w-full flex-col cursor-default">
              {suggestions.map((sugg) => (
                <li
                  key={sugg}
                  className="mb-2 pl-8 hover:bg-slate-800 p-1 transition ease-in duration-150"
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: "#ffffff" }}
                    className="bg-transparent text-xl mr-3"
                  />
                  {sugg}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <FontAwesomeIcon
            icon={faMicrophone}
            className="text-[24px] mt-1 mr-3 transition ease-out duration-150 hover:scale-110 cursor-pointer  text-white"
          />
        </div>
      </div>

      <div className="nav-right flex items-center justify-around">
        <FontAwesomeIcon
          icon={faVideoCamera}
          className="text-[21px] mr-6 transition ease-out duration-150 hover:scale-110 cursor-pointer  text-white"
        />

        <FontAwesomeIcon
          icon={faBell}
          className="text-[21px] mr-6 transition ease-out duration-150 hover:scale-110 cursor-pointer  text-white"
        />
        <FontAwesomeIcon
          icon={faUser}
          className="text-[21px] mr-6 transition ease-out duration-150 hover:scale-110 cursor-pointer  text-white"
        />
      </div>
    </div>
  );
};

export default Header;
