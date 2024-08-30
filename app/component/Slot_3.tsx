import React from "react";
interface Props {
  title: string;
  subTitle: string;
  image?: any;
  gif?: any;
}
const Slot_3 = () => {
  return (
    <div className="bg-black sm:h-2/3 md:h-2/3  lg:h-2/3 flex items-center justify-center">
      <div className="flex justify-between w-full items-center lg:px-32 lg:flex-row flex-col">
        <div className="pt-12 px-12  text-center lg:text-start  lg:px-28 w-full">
          <p className="text-white text-3xl font-semibold">Watch everywhere.</p>
          <p className="text-white text-sm py-2">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </p>
        </div>
        <div className="flex w-full py-1 justify-center">
          <img
            src="/images/multiple_device.png"
            alt="tv"
            className="w-[288px] z-10"
            draggable={false}
          />
          <img
            src="https://media.giphy.com/media/sx0UgBONEX1g2ZzJrH/giphy.gif"
            alt="tv"
            className="absolute w-[177px] h-[100px] mt-5 mr-1"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Slot_3;
