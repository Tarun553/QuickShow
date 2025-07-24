import { ArrowRight, Star } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { Link } from "react-router-dom";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { dummyShowsData } from "../lib/assets";
import { useNavigate } from "react-router-dom";

const FeatureSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-20">
      <div className="flex justify-between py-10 items-center">
        <h2 className="font-semibold text-xl opacity-70">Now Showing</h2>
        <h2 className="font-semibold text-sm flex items-center gap-1 opacity-70">
          View All <ArrowRight />
        </h2>
      </div>
      <div className="flex gap-10 py-10 flex-wrap w-fit mx-auto p-10">
        {dummyShowsData.map((item, idx) => {
          return (
            <Card
              onClick={() => navigate(`/movies/${item.id}`)}
              className="w-72 hover:scale-105 transition-all duration-300 cursor-pointer"
              key={idx}
            >
              <GlowingEffect
                spread={50}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
                className="z-10"
              />
              <CardHeader>
                <img
                  className="w-full aspect-square object-cover rounded-md"
                  src={item.poster_path}
                  alt=""
                />
              </CardHeader>
              <CardContent className="space-y-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className=" opacity-80 text-sm">
                  {item.overview.length > 50
                    ? item.overview.slice(0, 50) + "..."
                    : item.overview}
                </p>
                <p className="opacity-80 text-sm space-x-1.5">
                  <span className="opacity-80 text-sm">
                    {item.release_date.split("-")[0]}
                  </span>
                  |{" "}
                  <span className="opacity-80 text-sm">
                    {item.genres[0].name}
                  </span>
                  |{" "}
                  <span className="opacity-80 text-sm">{item.runtime} min</span>
                  |{" "}
                  <span className="opacity-80 text-sm">
                    {item.original_language.toUpperCase()}
                  </span>
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <Button
                    onClick={() => navigate(`/movies/${item.id}`)}
                    className="bg-pink-600 text-white hover:bg-pink-700 rounded-full"
                  >
                    Buy Ticktes
                  </Button>
                  <div className="flex items-center gap-2">
                    {" "}
                    <Star /> <span>{item.vote_average}</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center py-10">
       <Link to={"/movies"}>
        <MovingBorderButton  className="">Show More</MovingBorderButton>
       </Link>
       
      </div>
    </div>
  );
};

export default FeatureSection;
