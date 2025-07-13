import React from "react";

const Footer = () => {
  return (
    <div className="pt-10 px-10 h-full w-full bg-black grid grid-cols-12">
      <div className="col-span-6 space-y-4">
        <h1 className="text-3xl font-bold text-white">
          <span className="text-pink-600">Q</span>uickShow
        </h1>
        <p className="text-white text-sm w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          odio nulla recusandae omnis labore reprehenderit reiciendis ad
         
          nisi. Quidem ipsum impedit omnis?
        </p>
        <div className="flex gap-5 items-center">
          <img src="./googlePlay.svg" alt="" />
          <img src="./appStore.svg" alt="" />
        </div>
        
      </div>
      <div className="col-span-3 space-y-1">
            <h3 className="text-white font-semibold text-lg mb-2">Company</h3>
            <p className="text-sm cursor-pointer text-zinc-300">Home</p>
            <p className="text-sm cursor-pointer text-zinc-300">About Us</p>
            <p className="text-sm cursor-pointer text-zinc-300">Contact Us</p>
            <p className="text-sm cursor-pointer text-zinc-300">Privacy policy</p>
          </div>
          <div className="col-span-3 space-y-1">
            <h3 className="text-white font-semibold text-lg mb-2">Get in Touch</h3>
            <p className="text-sm cursor-pointer text-zinc-300">+1-234-567-890</p>
            <p className="text-sm cursor-pointer text-zinc-300">contact@example.com</p>
          </div>
          <div className="col-span-12 py-5 border-t border-gray-700 text-center mt-10 text-gray-400">
          Copyright 2025 © QuickShow. All Right Reserved.
          </div>
    </div>
  );
};

export default Footer;
