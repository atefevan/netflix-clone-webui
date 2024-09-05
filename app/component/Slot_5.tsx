import React from "react";

const Slot_5 = () => {
  return (
    <>
      <p className="px-16 text-white font-semibold text-2xl pt-4 pb-3 bg-black">
        More Releases to Join
      </p>
      <div className="bg-black py-3 px-16 grid gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
        <div className="min-h-64 bg-gradient-to-br from-[#1a2246] to-[#210d16] rounded-md flex flex-col">
          <p className="text-white text-3xl p-5 font-semibold">
            Enjoy on your TV
          </p>
          <p className="text-white py-2 text-sm px-5">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
          <div className="flex justify-end items-end flex-1">
            <img
              className="m-4 w-full h-auto max-w-[60px]"
              src="/images/tv_icon.png"
              alt="tv_icon"
            />
          </div>
        </div>
        <div className="min-h-64 bg-gradient-to-br from-[#1a2246] to-[#210d16] rounded-md flex flex-col">
          <p className="text-white text-3xl p-5 font-semibold">
            Download your shows to watch offline
          </p>
          <p className="text-white py-2 text-sm px-5">
            Save your favorites easily and always have something to watch.
          </p>
          <div className="flex justify-end items-end flex-1">
            <img
              className="m-4 w-full h-auto max-w-[60px]"
              src="/images/download_icon.png"
              alt="download_icon"
            />
          </div>
        </div>
        <div className="min-h-64 bg-gradient-to-br from-[#1a2246] to-[#210d16] rounded-md flex flex-col">
          <p className="text-white text-3xl p-5 font-semibold">
            Watch everywhere
          </p>
          <p className="text-white py-2 text-sm px-5">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
          <div className="flex justify-end items-end flex-1">
            <img
              className="m-4 w-full h-auto max-w-[60px]"
              src="/images/mike_icon.png"
              alt="mike_icon"
            />
          </div>
        </div>
        <div className="min-h-64 bg-gradient-to-br from-[#1a2246] to-[#210d16] rounded-md flex flex-col">
          <p className="text-white text-3xl p-5 font-semibold">
            Create profiles for kids
          </p>
          <p className="text-white py-2 text-sm px-5">
            Send kids on adventures with their favorite characters in a space
            made just for them — free with your membership.
          </p>
          <div className="flex justify-end items-end flex-1">
            <img
              className="m-4 w-full h-auto max-w-[60px]"
              src="/images/profile_icon.png"
              alt="profile_icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slot_5;
