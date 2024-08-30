import React from "react";
interface Props {
  title: string;
  subTitle: string;
  image?: any;
  gif?: any;
}
const Slot_1 = () => {
  return (
    <div className="bg-black sm:h-2/3 md:h-2/3  lg:h-2/3 flex items-center justify-center">
      <div className="flex justify-between w-full items-center lg:px-32 lg:flex-row flex-col">
        <div className="pt-12 px-12  text-center lg:text-start  lg:px-28 w-full">
          <p className="text-white text-3xl font-semibold">Enjoy on your TV.</p>
          <p className="text-white text-sm py-2">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="flex w-full py-1 justify-center">
          <img
            src="/images/tv.png"
            alt="tv"
            className="w-[288px] z-10"
            draggable={false}
          />
          <img
            src="https://media1.giphy.com/media/eNW8CzL67dDIwP7bxR/giphy.gif?cid=ecf05e47mwwno8gajwnk2hmpvy4bkp8fl4e4fps31g2qa9er&ep=v1_gifs_gifId&rid=giphy.gif&ct=g"
            alt="tv"
            className="absolute w-[212px] h-[120px] mt-11 mr-1"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Slot_1;
