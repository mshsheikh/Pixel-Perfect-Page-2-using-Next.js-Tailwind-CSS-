import React from "react";

const Customise = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ffffff] text-black">
      <div className="w-full h-auto px-[5%] py-[5%] flex justify-evenly items-center">
      <div className="w-[824px] h-[549px] bg-blue-400">
      </div>
        <div className="max-w-[670px] flex flex-col gap-6">
          <h2 className="text-[64px] font-bold leading-tight tracking-[-0.02em] text-left">
          Customise it to your needs
          </h2>
          <p className="text-[18px] leading-[30px] tracking-[-0.02em] text-left">
          Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          <button className="w-[150px] h-[63px] bg-[#4F9CF9] text-white rounded-lg text-center font-medium text-[18px] leading-[23px] p-5 mt-4">
            Lets Go <span className="ml-1">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customise;