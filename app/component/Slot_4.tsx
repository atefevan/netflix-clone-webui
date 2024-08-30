import React from "react";
interface Props {
  title: string;
  subTitle: string;
  image?: any;
  gif?: any;
}
const Slot_4 = () => {
  return (
    <div className="bg-black sm:h-2/3 md:h-2/3  lg:h-2/3 flex items-center justify-center">
      <div className="flex justify-between w-full items-center lg:px-32 lg:flex-row flex-col">
        <div className="flex w-full py-1 justify-center">
          <img src="/images/kids.png" alt="tv" className="w-[288px] opacity-90" draggable={false}/>
        </div>
        <div className="pt-12 px-12 text-center lg:text-start lg:px-28 w-full">
          <p className="text-white text-3xl font-semibold">
            Create profiles for kids.
          </p>
          <p className="text-white text-sm py-2">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slot_4;
