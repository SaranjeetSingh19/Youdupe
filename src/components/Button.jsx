import React from "react";

const Button = ({ name }) => {
  return (
    <div className="">
      <button className="hover:bg-[#3F3F3F] bg-[#222222] transition ease-in duration-200 px-3 py-1 font-semibold text-sm mt-3 mx-2 rounded-md text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
