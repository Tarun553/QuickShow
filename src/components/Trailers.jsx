import React, { useState } from "react";
import { dummyTrailers } from "../lib/assets";

const Trailers = () => {
    const[url, setUrl] = useState(dummyTrailers[0].videoUrl)
    console.log(url)
    const handleTrailerClick = (url) => {
        setUrl(url)
    }
  return (
    <div className="h-full w-full p-10">
      <div className="px-5">
        <h2 className="font-semibold opacity-80 text-xl">Trailers</h2>
      </div>
      <div className="flex items-center justify-center py-10">
        <iframe
          className="w-[70%] rounded-md aspect-video"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex gap-10 flex-wrap w-fit mx-auto px-10 group">
        {dummyTrailers.map((item, idx) => {
          return (
            <div
              className="w-40 aspect-video hover:scale-105 transition-all duration-300 cursor-pointer group-hover:opacity-40 hover:opacity-100"
              key={idx}
              onClick={() => handleTrailerClick(item.videoUrl)}
            >
              <img
                className="w-full h-full object-cover rounded-md"
                src={item.image}
                alt=""
              />
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trailers;
