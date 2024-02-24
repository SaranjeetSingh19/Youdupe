import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  return (
    <div className="text-white ml-5 mt-6 w-72  hover:shadow-md hover:shadow-white transition ease-linear duration-150 cursor-pointer">
      <div className="">
      <img
        className="rounded-xl"
        alt="thumbnail"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <h1 className="font-bold text-sm ml-2 mt-2">{info?.snippet?.localized?.title}</h1>
      <h4 className="text-gray-500 text-xs mt-1 ml-2 font-semibold">{info?.snippet?.channelTitle}</h4>
      <h3 className="text-gray-500 text-xs mt-1 ml-2 font-semibold">{info?.statistics?.viewCount} views </h3>
    </div>
    </div>
  );
};

export default VideoCard;
