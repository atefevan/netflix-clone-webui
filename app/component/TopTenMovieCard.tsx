import React from "react";

interface TopTenProps {
  data: any;
  serial: number;
}

const TopTenMovieCard = ({ data, serial }: TopTenProps) => {
  return (
    <div className="flex flex-col items-center py-4 relative">
      <img
        src={`posters/${data.id_img}.png`}
        alt={`${data.id_img}`}
        className="w-full sm:w-3/4 max-w-xs object-cover"
      />
      <div className="w-full sm:w-3/4 absolute top-[-2px] left-[100px]">
        <img
          className="w-full h-auto max-h-48 object-contain"
          src={`posters/${data.thumbnail}.png`}
          alt={`${data.thumbnail}`}
        />
      </div>
    </div>
  );
};

export default TopTenMovieCard;
