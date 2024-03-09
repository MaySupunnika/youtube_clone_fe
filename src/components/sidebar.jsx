import React from "react";

export default function sidebar({ hamburger }) {
  return (
    <>
      {hamburger ? (
        <div className="bg-main w-[15rem] h-screen py-12 fixed mt-[4rem]">
          <div className="w-[100%] flex-col flex justify-center items-center"></div>
        </div>
      ) : (
        <div className="bg-main w-[6.5rem] h-screen py-12 fixed mt-[4rem]">
          <div className="w-[100%] flex-col flex justify-center items-center">
            <div className="flex flex-col items-center mb-[0.5rem] mt-[-2rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
              <div className="w-[1.2rem]">
                <img src="src/assets/home-175 (1).png" alt="home" />
              </div>
              <p className="text-[0.6rem] text-white mt-[5px]">Home</p>
            </div>
            <div className="flex flex-col items-center mb-[0.5rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
              <div className="w-[1.2rem]">
                <img
                  src="src/assets/youtube-shorts-logo-15253.png"
                  alt="shorts"
                />
              </div>
              <p className="text-[0.6rem] text-white mt-[5px]">Shorts</p>
            </div>
            <div className="flex flex-col items-center mb-[0.5rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
              <div className="w-[1.2rem]">
                <img src="src/assets/subscribe (1).png" alt="subscription" />
              </div>
              <p className="text-[0.6rem] text-white mt-[5px]">Subscriptions</p>
            </div>
            <div className="w-[90%] flex flex-col items-center mb-[0.5rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
              <div className="w-[1.2rem]">
                <img src="src/assets/play-button.png" alt="youtube-music" />
              </div>
              <p className="text-[0.6rem] text-white mt-[5px]">YouTube Music</p>
            </div>
            <div className="flex flex-col items-center mb-[0.5rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
              <div className="w-[1.2rem]">
                <img src="src/assets/film.png" alt="you" />
              </div>
              <p className="text-[0.6rem] text-white mt-[5px]">You</p>
            </div>
            <div className="flex flex-col items-center mb-[0.5rem] p-3 cursor-pointer hover:bg-gray hover:rounded-md">
              <div className="w-[1.2rem]">
                <img src="src/assets/download.png" alt="download" />
              </div>
              <p className="text-[0.6rem] text-white mt-[5px]">Downloads</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
