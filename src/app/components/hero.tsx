import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#043873] text-white">
      <div className="w-full h-auto px-[5%] py-[5%] flex justify-evenly items-center">
        <div className="max-w-[656px] flex flex-col gap-6">
          <h2 className="text-[64px] font-bold leading-tight tracking-[-0.02em] text-left">
            Get More Done with whitespace
          </h2>
          <p className="text-[18px] leading-[30px] tracking-[-0.02em] text-left">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks
          </p>
          <button className="w-[230px] h-[63px] bg-[#4F9CF9] rounded-lg text-center font-medium text-[18px] leading-[23px] p-5 mt-4">
            Try Whitespace free <span className="ml-1">&#8594;</span>
          </button>
        </div>
        <div className="w-[824px] h-[549px] bg-blue-400">
        </div>
      </div>
    </div>
  );
}

export default Hero;