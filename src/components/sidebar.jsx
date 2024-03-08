import React from "react";

export default function sidebar() {
  return (
    <div className="bg-main w-[6.5rem] h-screen py-12 fixed">
      <div className="w-[100%] flex-col flex justify-center items-center">
        <div className="flex-col flex items-center cursor-pointer">
          <div className="w-[1.5rem] h-[2px] bg-white mb-[3px]"></div>
          <div className="w-[1.5rem] h-[2px] bg-white mb-[3px]"></div>
          <div className="w-[1.5rem] h-[2px] bg-white"></div>
        </div>
        <div className="flex flex-col items-center mb-[0.5rem] mt-8 p-3 cursor-pointer hover:bg-gray hover:rounded-md">
          <div className="w-[1.2rem]">
            <img src="src/assets/home-175 (1).png" />
          </div>
          <p className="text-[0.6rem] text-white mt-[5px]">Home</p>
        </div>
        <div className="flex flex-col items-center mb-[0.5rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
          <div className="w-[1.2rem]">
            <img src="src/assets/youtube-shorts-logo-15253.png" />
          </div>
          <p className="text-[0.6rem] text-white mt-[5px]">Shorts</p>
        </div>
        <div className="flex flex-col items-center mb-[0.5rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
          <div className="w-[1.2rem]">
            <img src="src/assets/subscribe (1).png" />
          </div>
          <p className="text-[0.6rem] text-white mt-[5px]">Subscriptions</p>
        </div>
        <div className="w-[90%] flex flex-col items-center mb-[0.5rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
          <div className="w-[1.2rem]">
            <img src="src/assets/play-button.png" />
          </div>
          <p className="text-[0.6rem] text-white mt-[5px]">YouTube Music</p>
        </div>
        <div className="flex flex-col items-center mb-[0.5rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
          <div className="w-[1.2rem]">
            <img src="src/assets/film.png" />
          </div>
          <p className="text-[0.6rem] text-white mt-[5px]">You</p>
        </div>
        <div className="flex flex-col items-center mb-[0.5rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
          <div className="w-[1.2rem]">
            <img src="src/assets/download.png" />
          </div>
          <p className="text-[0.6rem] text-white mt-[5px]">Downloads</p>
        </div>
      </div>
    </div>
  );
}
