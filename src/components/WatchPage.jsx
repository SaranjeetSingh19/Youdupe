import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "./utils/constants";

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

  return (
    <div className="text-white ml-10 mt-4">
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
          <button className="ml-16 bg-white text-black font-semibold hover:bg-slate-300 transition ease-linear duration-150  w-20 text-xs rounded-full mt-2">
            Subscribe
          </button>
        </div>

        <div className="flex justify-end   ml-48">
          <button className="w-36 hover:bg-[#3F3F3F] transition ease-out duration-150 h-8 mt-2 rounded-full text-sm  bg-[#272727]">
            👍🏻{res[0]?.statistics?.likeCount}{" "}
            <span className="ml-2 mr-2 bg-transparent font-light text-gray-500">
              |
            </span>{" "}
            👎🏻
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
