import React, { useState } from "react";
import data from "../mockData";
import Navbar from "./navbar";
import { Navigate, useNavigate } from "react-router-dom";
export default function Feed() {
  const [selectedTag, setSelectTag] = useState("All");
  const [filterData, setFilterData] = useState(data);
  const navigate = useNavigate();

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

  const handlerTag = (tag) => {
    setSelectTag(tag);
    setFilterData(
      tag === "All" ? data : data.filter((item) => item.tag === tag)
    );
  };

  return (
    <>
      <Navbar />
      <div className="bg-main h-[5rem] pl-[19rem] pt-[5rem] pb-[4.5rem]">
        <p
          className={`hover:bg-gray2 rounded-lg px-2 py-1 text-[0.9rem] font-bold inline-block mx-2 cursor-pointer ${
            selectedTag === "All" ? "bg-[#FEFEFE] text-[#0F0F0F]" : "bg-gray"
          }`}
          onClick={() => handlerTag("All")}
        >
          All
        </p>
        {data.map((tag, id) => (
          <p
            key={id}
            className={`hover:bg-gray2 rounded-lg px-2 py-1 text-[0.9rem] font-bold inline-block mx-2 cursor-pointer ${
              selectedTag === tag.tag
                ? "bg-[#FEFEFE] text-[#0F0F0F]"
                : "bg-gray"
            }`}
            onClick={() => handlerTag(tag.tag)}
          >
            {tag.tag}
          </p>
        ))}
      </div>
      <div className="bg-main pb-[3rem] pl-[18rem] pr-0 flex flex-wrap gap-4 min-h-screen">
        {filterData.map((item, id) => (
          <div className="flex" key={id}>
            <div
              className="flex flex-col cursor-pointer"
              onClick={() => navigate(`/videoDetail/${id}`)}
            >
              <div className="w-[20.7rem] h-[11.3rem]">
                <img
                  src={item.img_url}
                  alt="video"
                  className="object-cover rounded-lg w-[20.7rem] h-[11.3rem]"
                />
              </div>
              <div className="flex mt-2">
                <img
                  src="src/assets/971665fe7fbbe2e6e5ab8153d21bc54f.jpg"
                  alt="channel-img"
                  className="w-[2.3rem] h-[2.3rem] rounded-full"
                />
                <div className="flex flex-col ml-3">
                  <p className="w-[15rem] font-semibold leading-[1.2rem]">
                    {item.video_name}
                  </p>
                  <p className="w-[15rem] text-gray text-sm ">
                    {item.channel_name}
                  </p>
                  <p className="w-[15rem] text-gray text-sm ">
                    {formatViews(item.views)} views • {item.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
