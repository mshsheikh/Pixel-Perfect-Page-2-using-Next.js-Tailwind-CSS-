import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <header className="w-full h-[92px] px-[5%] flex justify-between items-center bg-[#043873]">
      <div className="h-[34px]">
        <Image src={logo} alt="logo" className="w-auto h-full" />
      </div>
      <nav className="flex items-center gap-72">
        <ul className="flex gap-10 text-white">
          <li className="font-dm-sans text-[18px] font-medium">Products</li>
          <li className="font-dm-sans text-[18px] font-medium">Solutions</li>
          <li className="font-dm-sans text-[18px] font-medium">Resources</li>
          <li className="font-dm-sans text-[18px] font-medium">Pricing</li>
        </ul>
        <button className="bg-[#FFE492] text-[#043873] rounded-lg px-5 py-3 font-inter text-[18px] font-medium">
          Login
        </button>
      </nav>
    </header>
  );
}
