import React from "react";
import Image from "next/image";
import sponsors from "../assets/sponsors.png"

const Sponsors = () => {
  return (
    <div className="w-full mt-[68px] py-[140px] px-[5%] bg-white flex flex-col items-center gap-10">
      <h1 className="font-inter text-6xl font-bold tracking-[-0.02em] text-center text-[#212529]">
        Our sponsors
      </h1>
      <div className="w-full max-w-[1482px] mt-4 flex justify-center">
        <Image src={sponsors} alt="sponsors" className="object-contain" />
      </div>
    </div>
  );
}

export default Sponsors;