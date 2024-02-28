import React from "react";

const VideoCard = ({ info }) => {
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

  const numViews = info?.statistics?.viewCount;
  const formattedViews = formatViews(numViews);

  return (
    <div className="text-white ml-5 mt-6 w-72  hover:shadow-md hover:shadow-white transition ease-linear duration-150 cursor-pointer">
      <div className="">
        <img
          className="rounded-xl"
          alt="thumbnail"
          src={info?.snippet?.thumbnails?.medium?.url}
        />
        <h1 className="font-bold text-sm ml-2 mt-2">
          {info?.snippet?.localized?.title}
        </h1>
        <h4 className="text-gray-500 text-xs mt-1 ml-2 font-semibold">
          {info?.snippet?.channelTitle}
        </h4>
        <h3 className="text-gray-500 text-xs mt-1 ml-2 font-semibold">
          {formattedViews} views{" "}
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
