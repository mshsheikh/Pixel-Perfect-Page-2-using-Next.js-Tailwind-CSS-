import React from "react";
import Image from "next/image";
import work from "../assets/work.png"

const Work = () => {
  return (
<div className="flex justify-center items-center min-h-screen bg-[#ffffff] text-black">
      <div className="w-full h-auto px-[5%] py-[5%] flex justify-evenly items-center">
      <div className="w-[700px] h-[652px]">
        <Image src={work} alt=""/>
      </div>
        <div className="max-w-[670px] flex flex-col gap-6">
          <h2 className="text-[64px] font-bold leading-tight tracking-[-0.02em] text-left">
          Work Together
          </h2>
          <p className="text-[18px] leading-[30px] tracking-[-0.02em] text-left">
          With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>
          <button className="w-[170px] h-[63px] bg-[#4F9CF9] text-white rounded-lg text-center font-medium text-[18px] leading-[23px] p-5 mt-4">
          Try it now <span className="ml-1">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;