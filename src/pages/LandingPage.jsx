import React from "react";
import data from "../mockData";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="bg-main p-[3rem] pl-[10rem] pt-[5rem] flex flex-wrap gap-6">
        {data.map((item, id) => (
          <div className="flex" key={id}>
            <div className="flex flex-col">
              <div className="w-[20rem] h-[12rem]">
                <img
                  src={item.img_url}
                  alt="video"
                  className="object-cover rounded-lg h-[12rem] w-[20rem]"
                />
              </div>
              <div className="flex">
                <img
                  src="src/assets/971665fe7fbbe2e6e5ab8153d21bc54f.jpg"
                  alt="channel-img"
                  className="w-[2rem] h-[2rem] rounded-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
