import React, { useState, useEffect } from "react";
import Video from "../assets/video.mp4";
import { useParams } from "react-router-dom";
import mockData from "../mockData";
import videoData from "../mockData";
import Logo from "../assets/youtube-logo-2431.png";
import SearchIcon from "../assets/search-interface-symbol.png";
import MicrophoneIcon from "../assets/microphone.png";
import CreativeIcon from "../assets/video-button.png";
import NotiIcon from "../assets/notification.png";
import ProfileImage from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import Profile from "../assets/971665fe7fbbe2e6e5ab8153d21bc54f.jpg";
import Checked from "../assets/checked.png";
import LikeButton from "../assets/like-regular-240.png";
import ShareButton from "../assets/share.png";
import DownloadButton from "../assets/download.png";

export default function videoDetailPage() {
  const [hamburger, setHamburger] = useState(false);
  // const [selectedTag, setSelectTag] = useState("All");
  // const [filterData, setFilterData] = useState(data);

  const [showData, setShowData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickHamburger = () => {
    setHamburger(!hamburger);
  };

  // const handlerTag = (tag) => {
  //   setSelectTag(tag);
  //   setFilterData(
  //     tag === "All" ? data : data.filter((item) => item.tag === tag)
  //   );
  // };

  const formatViews = (view) => {
    if (view && view > 1000000) {
      return (view / 1000000).toFixed(1) + "M";
    } else if (view && view === 1000000) {
      return "1M";
    } else if (view && view > 1000) {
      return (view / 1000).toFixed(1) + "K";
    } else if (view && view === 1000) {
      return "1K";
    } else if (view) {
      return Math.round(view).toString();
    }
    return "";
  };

  const formatText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  useEffect(() => {
    const foundData = mockData.find((item) => item.id === parseInt(id) + 1);
    setShowData(foundData);
  }, [id]);

  return (
    <div className="bg-main flex flex-col min-h-screen">
      <div className="flex w-screen h-[4.3rem] bg-main justify-between items-center px-[2rem] fixed z-10">
        <div className="flex justify-between items-center">
          <div
            className="flex-col flex items-center justify-center cursor-pointer w-[3rem] h-[3rem] rounded-full hover:bg-gray"
            onClick={onClickHamburger}
          >
            <div className="w-[1.3rem] h-[1px] bg-white mb-[4px]"></div>
            <div className="w-[1.3rem] h-[1px] bg-white mb-[4px]"></div>
            <div className="w-[1.3rem] h-[1px] bg-white"></div>
          </div>
          <div className="flex items-center ml-5" onClick={() => navigate("/")}>
            <div className="w-[2rem]">
              <img src={Logo} alt="youtube-logo" />
            </div>
            <h3 className="text-3xl font-Teko ml-1 mt-[5px] cursor-pointer">
              Premium
            </h3>
            <p className="absolute text-[10px] text-gray left-[13.5rem] top-[1rem]">
              TH
            </p>
          </div>
          <div className="flex ml-[8rem] relative">
            <input
              className="w-[35rem] h-[2.5rem] rounded-full border border-[#303030] bg-[#101010] focus:outline-none pl-5"
              placeholder="Search"
            />
            <button className="bg-gray border border-[#303030] rounded-r-full w-[4rem] h-[2.5rem] absolute right-0">
              <div className="w-[1.1rem] ml-5">
                <img src={SearchIcon} alt="search" />
              </div>
            </button>
          </div>
          <button className="bg-gray rounded-full w-[2.5rem] h-[2.5rem] flex justify-center items-center ml-3">
            <div className="w-[1rem] h-[1rem]">
              <img src={MicrophoneIcon} alt="microphone" />
            </div>
          </button>
          <div className="flex ml-[11.7rem]">
            <button className="w-[2.5rem] h-[2.5rem] rounded-full hover:bg-gray flex justify-center items-center">
              <div className="w-[1.6rem] h-[1.6rem]">
                <img src={CreativeIcon} alt="create-video" />
              </div>
            </button>
            <button className="mx-6 w-[2.5rem] h-[2.5rem] rounded-full hover:bg-gray flex justify-center items-center">
              <div className="w-[1.6rem] h-[1.6rem]">
                <img src={NotiIcon} alt="notification" />
              </div>
            </button>
            <button>
              <div className="w-[2rem] h-[2rem]">
                <img
                  src={ProfileImage}
                  alt="profile"
                  className="w-[2rem] h-[2rem] rounded-full object-cover"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex pt-[7rem]">
        <div className="flex flex-col">
          <div className="w-[750px] h-auto rounded-lg ml-[2.5rem]">
            <video width="100%" height="100%" controls className="rounded-lg">
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          {showData && (
            <>
              <h3 className="text-[1.5rem] font-bold ml-10 mt-3 w-[700px]">
                {showData.video_name}
              </h3>
              <div className="flex ml-10 mt-2">
                <img
                  src={Profile}
                  className="rounded-full w-[2.3rem] h-[2.3rem] mt-1"
                />
                <div className="flex flex-col ml-4">
                  <div className="flex">
                    <p className="w-[8rem]">{showData.channel_name}</p>
                    <img className="w-3 h-3 mt-2 ml-[0.3rem]" src={Checked} />
                  </div>
                  <p className="text-gray text-sm">1.7M subscribers</p>
                </div>
                <button className="bg-white w-[5.5rem] h-[2.3rem] rounded-full text-[#0F0F0F] text-[0.9rem] font-semibold ml-6 hover:opacity-75">
                  Subscribe
                </button>
                <div className="bg-gray rounded-l-full w-[5.5rem] h-[2.3rem] flex items-center text-sm pl-3 ml-8 hover:bg-gray2 cursor-pointer">
                  <img
                    src={LikeButton}
                    className="w-[1.3rem] h-[1.3rem] mr-2"
                  />
                  88.5K
                </div>
                <div className="relative bg-gray rounded-r-full w-[3rem] h-[2.3rem] flex items-center pl-3 hover:bg-gray2 cursor-pointer">
                  <img
                    src={LikeButton}
                    className="transform rotate-180 w-[1.3rem] h-[1.3rem]"
                  />
                  <p className="absolute top-[0.38rem] right-[2.95rem] bg-gray2 h-[1.5rem] w-[1px]"></p>
                </div>
                <div className="bg-gray rounded-full w-[5.5rem] h-[2.3rem] flex items-center justify-center text-sm ml-2 hover:bg-gray2">
                  <img
                    src={ShareButton}
                    className="w-[1.1rem] h-[1.1rem] mr-1"
                  />
                  Share
                </div>
                <div className="bg-gray rounded-full w-[6.7rem] h-[2.3rem] flex items-center justify-center text-sm ml-2 hover:bg-gray2">
                  <img
                    src={DownloadButton}
                    className="w-[0.9rem] h-[0.9rem] mr-1"
                  />
                  Download
                </div>
                <button className="bg-gray rounded-full w-[2.3rem] h-[2.3rem] flex items-center justify-center text-sm ml-2 hover:bg-gray2">
                  ...
                </button>
              </div>
              <div className="bg-gray rounded-xl w-[750px] h-auto p-4 ml-9 mt-3 flex flex-col">
                <p>
                  {formatViews(showData.views)} views
                  <span className="ml-3">{showData.time}</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur dolor excepturi reiciendis illo ea a repellat odio
                  vitae velit libero?
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col ml-[1.2rem]">
          {videoData.map((item, id) => (
            <div
              key={id}
              className="w-[15rem] h-[8rem] rounded-xl flex mb-4 cursor-pointer"
              onClick={() => navigate(`/videoDetail/${item.id}`)}
            >
              <img
                src={item.img_url}
                alt="videoPreview"
                className="rounded-xl object-cover"
              />
              <div className="flex flex-col ml-3">
                <p className="w-[17rem] text-[1rem] mb-3">{item.video_name}</p>
                <p className="text-gray text-sm">{item.channel_name}</p>
                <p className="text-gray text-sm">
                  {item.views} views •{" "}
                  <span className="text-gray">{item.time}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
