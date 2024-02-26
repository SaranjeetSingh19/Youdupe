import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "./utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [setParams] = useSearchParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtubeVids();
  }, []);

  const youtubeVids = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  const res = videos.filter((vido) => {
    return vido.id === setParams.get("v");
  });
  console.log(res);

  function timeSince(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  }
  const myDate = res[0]?.snippet?.publishedAt;
  const timeText = timeSince(myDate);
  console.log(timeText);

  function formatViews(numViews) {
    // Handle negative numbers
    if (numViews < 0) {
      throw new Error("Number of views cannot be negative.");
    }

    const roundToTwoDecimals = (num) => Number(num.toFixed(2));

    // Base units
    const units = ["", "K", "M", "B", "T", "P", "E"];

    // Calculate the largest unit applicable
    const maxUnitIndex = Math.floor(Math.log10(numViews) / 3);

    // Calculate the number without suffix
    const baseNumber = roundToTwoDecimals(
      numViews / Math.pow(1000, maxUnitIndex)
    );

    // Display the formatted number with suffix
    return `${baseNumber}${units[maxUnitIndex]}`;
  }

  const numViews = res[0]?.statistics?.viewCount;
  const formattedViews = formatViews(numViews);

  return (
    <div className="text-white ml-10 mt-4 ">
      <div className=" ">
        <iframe
          className=" rounded-xl "
          width="700"
          height="415"
          src={"https://www.youtube.com/embed/" + setParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <h1 className="text-xl font-semibold w-[60vw] mt-4">
        {res[0]?.snippet?.title}
      </h1>

      <div className="flex">
        <div className="flex">
          <div>
            <img
              className="w-10 h-10 mt-2 object-cover ml-1 rounded-full"
              src={res[0]?.snippet?.thumbnails.maxres.url}
              alt=""
            />
          </div>
          <h1 className="text-base font-semibold mt-2 ml-3">
            {res[0]?.snippet?.channelTitle}
          </h1>
          <button className="ml-16 h-8 bg-white text-black font-semibold hover:bg-slate-300 transition ease-linear duration-150  w-20 text-xs rounded-full mt-3">
            Subscribe
          </button>
        </div>

        <div className="flex justify-end   ml-28">
          <button className="w-36 hover:bg-[#3F3F3F] transition ease-out duration-150 h-10 mt-2 rounded-full text-sm  bg-[#272727]">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-xl bg-transparent "
            />
            <span className="ml-1 bg-transparent">
              {res[0]?.statistics?.likeCount}{" "}
            </span>
            <span className="ml-2 mr-2 bg-transparent font-light text-gray-500">
              <span className="mr-1 h-2 bg-transparent  ">|</span>
            </span>{" "}
            <FontAwesomeIcon
              icon={faThumbsDown}
              className="text-xl bg-transparent"
            />
          </button>
          <button className="w-24 hover:bg-[#3F3F3F] font-semibold transition ease-out duration-150 h-10 mt-2 rounded-full text-sm ml-6 bg-[#272727]">
            Share
          </button>
        </div>
      </div>
      <div className="h-12 w-[54vw] relative bg-[#272727] mt-4 rounded-xl ">
        <div className="flex absolute  mt-4 ml-2">
          <h1 className=" top-2 text-sm bg-[#272727] font-semibold">
            {formattedViews} views
          </h1>
          <h1 className="text-sm font-semibold bg-[#272727] pl-4">
            {timeText}
          </h1>
        </div>
      </div>
      <div className="w-[55vw] mt-1 h-28 rounded-xl leading-8 overflow-y-scroll">
        <h1 className="bg-[#272727] p-2 rounded-xl">
          {res[0]?.snippet?.description}{" "}
        </h1>
      </div>

      <h1 className="text-xl font-semibold mt-6">
        {res[0]?.statistics?.commentCount} Comments
      </h1>

      <div className="h-40 bg-[#272727] mt-8 ">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
