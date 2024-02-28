import React from "react";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LiveMessages = ({ name, message }) => {
  return (
    <div className="flex mt-3 px-2 z-40">
      <div className="rounded-full pl-2 w-8 pb-1 h-8 flex items-center  bg-zinc-800">
        <FontAwesomeIcon
          icon={faUserSecret}
          className="bg-transparent text-white text-xl rounded-full "
        />
      </div>
      <div className="flex items-center ">
        <h1 className="text-gray-500 px-2 font-semibold text-sm">{name}</h1>
        <h1 className="font-normal text-sm">{message}</h1>
      </div>
    </div>
  );
};

export default LiveMessages;
