import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyShowsData } from "../lib/assets";
import {
  Card,
} from "@/components/ui/card";
import { Heart, Star, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
const Details = () => {

  
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const show = dummyShowsData.find((item) => String(item.id) === id);
  console.log(show);
  if (!show) {
    console.log("show not found");
    return <div>show not found</div>;
  }
 

  return (
    <>
      <div className="p-30 w-[80%] h-screen grid grid-cols-2 gap-10">
        <div className="py-10 w-[80%] ">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={show.poster_path}
            alt=""
          />
        </div>
        <div className="py-10 space-y-3">
          <h2 className="text-pink-600 font-bold">ENGLISH</h2>
          <h1 className="text-3xl font-bold">{show.title}</h1>
          <div className="flex items-center gap-2">
            <Star />{" "}
            <span className="opacity-80">{show.vote_average} User Rating</span>
          </div>
          <p className="opacity-80 text-sm">{show.overview}</p>
          <div className="flex items-center gap-2">
            <span className="">{show.release_date.split("-")[0]}</span>|{" "}
            <span className="">{show.genres[0].name}</span>|{" "}
            <span className="">{show.runtime} min</span>|{" "}
            <span className="">{show.original_language.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 cursor-pointer">
              <Button className="text-white bg-[#1E2939] hover:bg-[#1E2939]/80 hover:opacity-100 opacity-80 cursor-pointer">
                Watch trailer
              </Button>
            </div>
            <Button onClick={() => navigate(`/movies/${show.id}`)} className="bg-[#F84565] hover:bg-[#F84565]/80 hover:opacity-100 opacity-80 text-white cursor-pointer">
              Buy tickets
            </Button>
            <Heart className="cursor-pointer" />
          </div>
        </div>
      </div>
      {/* your favorite cast section */}
      <div className="px-10 pt-12 pb-6 w-full">
        <h1 className="text-2xl font-bold mb-6 text-white/95">Your Favorite Cast</h1>
        <div className="flex items-end gap-8 overflow-x-auto scrollbar-hidden scrollbar-thumb-pink-400 scrollbar-track-transparent pb-2">
          {show.casts.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[110px]"
              style={{ flex: '0 0 auto' }}
            >
              <img
                className="w-24 h-24 object-cover rounded-full border-2 border-[#1E2939]  shadow-lg hover:scale-105 transition-transform duration-200 "
                src={item.profile_path}
                alt={item.name}
              />
              <span className="mt-3 text-white/90 font-medium text-sm text-center max-w-[90px] truncate">
                {item.name.slice(0, 10)}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* book now section with dates */}
      <div className="w-full flex h-[30%] items-center justify-center mt-10">
        <Card className="w-[95%] h-[20%] shadow-xl rounded-2xl">
          <div className="flex items-center justify-between w-full px-10">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-6 text-white/95">Choose Date</h2>
              <div className="flex items-center gap-4 mt-2">
                <button onClick={() => {}} className="w-10 h-10 flex items-center justify-center rounded-lg border border-pink-500 text-pink-400 text-2xl hover:bg-pink-900/10 transition-all"><span>  <ChevronLeft className="w-6 h-6" /></span></button>
                {/* Example dates, replace with dynamic data if needed */}
                {[13, 14, 11, 10, 12].map((day, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center w-20 h-20 border border-pink-400 rounded-lg mx-1 bg-black/20 text-white hover:border-pink-500 hover:scale-105 transition-all cursor-pointer">
                    <span className="text-md font-semibold mb-1">{day}</span>
                    <span className="text-xs font-normal">Nov</span>
                  </div>
                ))}
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-pink-500 text-pink-400 text-2xl hover:bg-pink-900/10 transition-all"><span>  <ChevronRight className="w-6 h-6" /></span></button>
              </div>
            </div>
            <div className="flex items-center">
              <Button className="bg-[#F84565] hover:bg-[#F84565]/80 text-white px-10 py-3 text-lg font-semibold rounded-md shadow-lg">Book Now</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* similar movies section */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl font-bold mb-6 text-white/95">Similar Movies</h1>
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-hidden scrollbar-thumb-pink-400 scrollbar-track-transparent pb-2">
          {dummyShowsData.map((item, idx) => (
            <div
            onClick={() => navigate(`/movies/${item.id}`)}
              key={idx}
              className="flex flex-col cursor-pointer items-center min-w-[110px]"
              style={{ flex: '0 0 auto' }}
            >
              <img
                className="w-24 h-24 object-cover rounded-full border-2 border-[#1E2939]  shadow-lg hover:scale-105 transition-transform duration-200 "
                src={item.poster_path}
                alt={item.title}
              />
              <span className="mt-3 text-white/90 font-medium text-sm text-center max-w-[90px] truncate">
                {item.title.slice(0, 10)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
