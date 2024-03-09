import React, { useState } from "react";
import Sidebar from "./sidebar";

export default function navbar() {
  const [hamburger, setHamburger] = useState(false);

  const onClickHamburger = () => {
    setHamburger(!hamburger);
  };
  return (
    <>
      <div className="flex w-screen h-[4.3rem] bg-main justify-between items-center px-[2rem] fixed">
        <div className="flex justify-between items-center">
          <div
            className="flex-col flex items-center justify-center cursor-pointer w-[3rem] h-[3rem] rounded-full hover:bg-gray"
            onClick={onClickHamburger}
          >
            <div className="w-[1.3rem] h-[1px] bg-white mb-[4px]"></div>
            <div className="w-[1.3rem] h-[1px] bg-white mb-[4px]"></div>
            <div className="w-[1.3rem] h-[1px] bg-white"></div>
          </div>
          <div className="flex items-center ml-5">
            <div className="w-[2rem]">
              <img src="src/assets/youtube-logo-2431.png" alt="youtube-logo" />
            </div>
            <h3 className="text-3xl font-Teko ml-1 mt-[5px]">Premium</h3>
            <p className="absolute text-[10px] text-gray left-[13.5rem] top-[1rem]">
              TH
            </p>
          </div>
          <div className="flex ml-[10rem] relative">
            <input
              className="w-[35rem] h-[2.5rem] rounded-full border border-[#303030] bg-[#101010] focus:outline-none pl-5"
              placeholder="Search"
            />
            <button className="bg-gray border border-[#303030] rounded-r-full w-[4rem] h-[2.5rem] absolute right-0">
              <div className="w-[1.1rem] ml-5">
                <img
                  src="src/assets/search-interface-symbol.png"
                  alt="search"
                />
              </div>
            </button>
          </div>
          <button className="bg-gray rounded-full w-[2.5rem] h-[2.5rem] flex justify-center items-center ml-3">
            <div className="w-[1rem] h-[1rem]">
              <img src="src/assets/microphone.png" alt="microphone" />
            </div>
          </button>
          <div className="flex ml-[11.7rem]">
            <button>
              <div className="w-[1.6rem] h-[1.6rem]">
                <img src="src/assets/video-button.png" alt="create-video" />
              </div>
            </button>
            <button className="mx-6">
              <div className="w-[1.6rem] h-[1.6rem]">
                <img src="src/assets/notification.png" alt="notification" />
              </div>
            </button>
            <button>
              <div className="w-[2rem] h-[2rem]">
                <img
                  src="src/assets/profile.jpg"
                  alt="profile"
                  className="w-[2rem] h-[2rem] rounded-full object-cover"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Sidebar hamburger={hamburger} />
    </>
  );
}
