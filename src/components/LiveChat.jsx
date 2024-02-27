import React from "react";
import LiveMessages from "./LiveMessages";

const LiveChat = () => {
  return (
    <div className=" w-96 rounded-xl border border-gray-400 h-[71vh] ml-16">
      <div className="pl-6 pb-3 mt-3 font-semibold  border-b border-slate-500">
        Top chat
      </div>
      <div className="">
        <LiveMessages name="Bonkuu" message="Chipi chipi chapa chapa rubi rubi raba raba"/>
        <LiveMessages name="Bonkuu" message="Chipi chipi chapa chapa rubi rubi raba raba"/>
        <LiveMessages name="Bonkuu" message="Chipi chipi chapa chapa rubi rubi raba raba"/>
        <LiveMessages name="Bonkuu" message="Chipi chipi chapa chapa rubi rubi raba raba"/>
      
      </div>
    </div>
  );
};

export default LiveChat;
