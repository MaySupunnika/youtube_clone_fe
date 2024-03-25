import React, { useState } from "react";
import { useNavbarContext } from "./navbarContext";
import HomeIcon from "../assets/home-175 (1).png";
import ShortIcon from "../assets/youtube-shorts-logo-15253.png";
import SubIcon from "../assets/subscribe (1).png";
import YouMusicIcon from "../assets/play-button.png";
import Channel from "../assets/user.png";
import History from "../assets/history.png";
import UrVideo from "../assets/ur-video.png";
import WatchLater from "../assets/clock.png";
import RigthArrow from "../assets/right-arrow.png";
import DownArrow from "../assets/arrow-down-sign-to-navigate.png";
import Download from "../assets/download.png";
export default function sidebar() {
  const { hamburger } = useNavbarContext();
  const [event, setEvent] = useState("Home");

  const formatText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const onClickEvent = (event) => {
    setEvent(event);
  };
  return (
    <>
      {hamburger ? (
        <div className="bg-main w-[15rem] h-screen py-12 fixed mt-[4rem]">
          <div className="w-[95%] flex-col flex justify-center items-center">
            <div className="flex flex-col  border-b border-[rgba(142,145,143,0.3)] w-[100%] ml-[2rem]">
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "Home" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("Home")}
              >
                <div className="w-[1.4rem] h-[1.4rem]">
                  <img src={HomeIcon} alt="home-icon" />
                </div>
                <p className="ml-[2rem]">Home</p>
              </div>
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "Shorts" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("Shorts")}
              >
                <div className="w-[1.4rem] h-[1.4rem]">
                  <img src={ShortIcon} alt="shorts-icon" />
                </div>
                <p className="ml-[2rem]">Shorts</p>
              </div>
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "Subscriptions" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("Subscriptions")}
              >
                <div className="w-[1.4rem] h-[1.4rem]">
                  <img src={SubIcon} alt="subscription-icon" />
                </div>
                <p className="ml-[2rem]">Subscriptions</p>
              </div>
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "YouTube Music" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("YouTube Music")}
              >
                <div className="w-[1.4rem] h-[1.4rem]">
                  <img src={YouMusicIcon} alt="youtube-music-icon" />
                </div>
                <p className="ml-[2rem]">YouTube Music</p>
              </div>
            </div>
            <div className="flex flex-col  border-b border-[rgba(142,145,143,0.3)] w-[100%] ml-[2rem]">
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "You" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("You")}
              >
                <p className="mr-[0.8rem] font-bold text-lg">You</p>
                <div className="w-[0.8rem] h-[0.8rem] mt-[8px]">
                  <img src={RigthArrow} alt="rigth-arrow-icon" />
                </div>
              </div>
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "Your channel" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("Your channel")}
              >
                <div className="w-[1.4rem] h-[1.4rem]">
                  <img src={Channel} alt="channel-icon" />
                </div>
                <p className="ml-[2rem]">Your channel</p>
              </div>
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "History" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("History")}
              >
                <div className="w-[1.4rem] h-[1.4rem]">
                  <img src={History} alt="History-icon" />
                </div>
                <p className="ml-[2rem]">History</p>
              </div>
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "Your videos" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("Your videos")}
              >
                <div className="w-[1.4rem] h-[1.4rem]">
                  <img src={UrVideo} alt="your-videos-icon" />
                </div>
                <p className="ml-[2rem]">Your videos</p>
              </div>
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "Watch later" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("Watch later")}
              >
                <div className="w-[1.4rem] h-[1.4rem]">
                  <img src={WatchLater} alt="watch-later-icon" />
                </div>
                <p className="ml-[2rem]">Watch later</p>
              </div>
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "Downloads" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("Downloads")}
              >
                <div className="w-[1.4rem] h-[1.4rem]">
                  <img src={Download} alt="downloads-icon" />
                </div>
                <p className="ml-[2rem]">Downloads</p>
              </div>
              <div
                className={`flex justify-start p-3 hover:bg-gray2 rounded-xl ${
                  event === "Show more" ? "bg-gray2" : ""
                }`}
                onClick={() => onClickEvent("Show more")}
              >
                <div className="w-[1rem] h-[1rem] mt-[3px]">
                  <img src={DownArrow} alt="down-arrow-icon" />
                </div>
                <p className="ml-[2rem]">Show more</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-main w-[6rem] h-screen py-12 fixed mt-[4rem]">
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
              <p className="text-[0.6rem] text-white mt-[5px]">
                {formatText("YouTube Music", 10)}
              </p>
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
