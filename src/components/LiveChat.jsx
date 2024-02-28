import React, { useEffect, useState } from "react";
import LiveMessages from "./LiveMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/liveChatSlice";
import { generateRandomName, getRandomComment } from "./utils/constants";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");

  const liveMsgs = useSelector((store) => store.liveChat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling...
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomComment(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" w-96 overflow-y-scroll shadow-md shadow-white rounded-xl border border-gray-400 h-[71vh] ml-16">
        <div className="pl-6 pb-3 mt-3 font-semibold border-b border-slate-500">
          Top chat
        </div>
        <div className="text-white z-30 flex-col-reverse">
          {liveMsgs.map((msgs, index) => (
            <LiveMessages key={index} name={msgs.name} message={msgs.message} />
          ))}
        </div>
      </div>

      <form
        className="ml-20  mt-6 flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Bonky🐷",
              message: liveMessage  + "🫣" ,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          placeholder="Chat..."
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="mt-1 border-none text-white placeholder-gray-400 text-sm bg-[#272727] rounded-full h-9 pl-4 outline-none w-80"
        />
        <button>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="ml-2 text-gray-500 text-xl bg-[#272727] p-1 rounded-lg mt-1.5 hover:bg-slate-700 transition ease-in duration-100"
          />
        </button>
      </form>
    </>
  );
};

export default LiveChat;
