import React from "react";
interface Props {
  title: string;
  subTitle: string;
  image?: any;
  gif?: any;
}
const Slot_2 = () => {
  return (
    <div className="bg-black sm:h-2/3 md:h-2/3  lg:h-2/3 flex items-center justify-center">
      <div className="flex justify-between w-full items-center lg:px-32 lg:flex-row flex-col">
        <div className="flex w-full py-5 justify-center relative">
          <img src="/images/mobile_poster.png" alt="tv" className="w-[358px]" />
          <img
            src="/images/downloading_card.png"
            alt="downloading"
            className="absolute mt-36 w-[288px]"
            draggable={false}
          />
          <div className="absolute mt-48 w-[288px]">
            <img
              src="/gif/giphy.gif"
              alt="loading"
              className="ml-52 w-[40px]"
              draggable={false}
            />
          </div>
        </div>

        <div className="pt-3 px-12 text-center lg:text-start lg:px-36 w-full">
          <p className="text-white text-3xl font-semibold">
            Download your shows to watch offline.
          </p>
          <p className="text-white text-sm py-2">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slot_2;
