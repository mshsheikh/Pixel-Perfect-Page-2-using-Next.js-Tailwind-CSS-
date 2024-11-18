import React from "react";

const Everywhere = () => {
  return (
    <div className="w-full h-auto mt-[68px] bg-[#043873] text-white py-[140px] px-[5%] flex flex-col items-center text-center">
      <div className="max-w-[1064px] flex flex-col gap-6 items-center">
        <h1 className="font-inter text-6xl font-bold leading-tight tracking-[-0.02em]">
          Your work, everywhere you are
        </h1>
        <p className="font-inter text-base font-normal leading-8 tracking-[-0.02em]">
          Access your notes from your computer, phone, or tablet by synchronizing with various services, including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
        </p>
        <button className="w-[165px] h-[63px] bg-[#4F9CF9] text-white font-inter text-[18px] font-medium leading-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0px_0px_15px_5px_rgba(79,156,249,0.6)] flex items-center justify-center">
          Try Taskey
          <span className="ml-2">&#8594;</span>
        </button>
      </div>
    </div>
  );
}

export default Everywhere;