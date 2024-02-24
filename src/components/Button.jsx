import React from "react";

const Button = ({ name }) => {
  return (
    <div className="">
      <button className="hover:bg-slate-600 bg-slate-700 transition ease-in duration-200 px-3 py-1 font-semibold text-sm mt-3 mx-2 rounded-md text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
