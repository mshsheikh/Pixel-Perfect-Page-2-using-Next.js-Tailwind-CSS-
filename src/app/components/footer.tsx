import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white py-10 px-[220px]">
      <div className="flex flex-col md:flex-row gap-20 max-w-screen-xl mx-auto">
        
        {/* Logo and Description */}
        <div className="flex flex-col space-y-4 w-1/4">
          <Image src={logo} alt="logo" width={191} height={34} />
          <p className="text-[18px] leading-[30px] tracking-[-0.02em]">
            Whitespace was created for the new ways we live and work. We make a better workspace around the world
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-3 gap-10 w-full">
          {/* Products Column */}
          <div>
            <h3 className="font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-yellow-400 hover:no-underline">Overview</a></li>
              <li><a href="#" className="hover:no-underline">Pricing</a></li>
              <li><a href="#" className="hover:no-underline">Customer stories</a></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:no-underline">Blog</a></li>
              <li><a href="#" className="hover:no-underline">Guides & tutorials</a></li>
              <li><a href="#" className="hover:no-underline">Help center</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:no-underline">About us</a></li>
              <li><a href="#" className="hover:no-underline">Careers</a></li>
              <li><a href="#" className="hover:no-underline">Media kit</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-800 mt-8 pt-4 text-center text-sm">
        &copy;2021 Whitespace LLC.
      </div>
    </footer>
  );
}

export default Footer;