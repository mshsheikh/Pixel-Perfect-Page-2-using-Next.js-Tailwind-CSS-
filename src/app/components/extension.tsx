import React from "react";

const Extension = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#043873] text-white">
      <div className="w-full h-auto px-[5%] py-[5%] flex justify-evenly items-center">
        <div className="max-w-[670px] flex flex-col gap-6">
          <h2 className="text-[64px] font-bold leading-tight tracking-[-0.02em] text-left">
          Use as Extension
          </h2>
          <p className="text-[18px] leading-[30px] tracking-[-0.02em] text-left">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          <button className="w-[150px] h-[63px] bg-[#4F9CF9] text-white text-center rounded-lg font-medium text-[18px] leading-[23px] p-5 mt-4">
          Lets Go <span className="ml-1">&#8594;</span>
          </button>
        </div>
        <div className="w-[824px] h-[549px] bg-blue-400">
        </div>
      </div>
    </div>
  );
}

export default Extension;