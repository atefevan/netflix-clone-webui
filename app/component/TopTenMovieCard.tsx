import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";
import SignupButton from "./SignupButton";
import Button from "./Button";

interface TopTenProps {
  data: any;
  serial: number;
}

const TopTenMovieCard = ({ data, serial }: TopTenProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="relative min-w-[250px] flex items-center transform transition-transform duration-300 hover:scale-110 cursor-pointer"
        onClick={openModal}
      >
        <div className="relative w-28 flex justify-center mt-36 z-10 left-5">
          <img
            src={`/posters/${data.id_img}.png`}
            alt={data.id_img}
            className="w-full"
          />
        </div>
        <div className="relative w-full flex justify-center">
          <img
            className="w-full object-contain rounded-lg"
            src={`/posters/${data.thumbnail}.png`}
            alt={data.thumbnail}
          />
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="relative">
          <img
            src={`${data.poster}`}
            alt="thumbnail"
            className="h-80 w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-x-0 bottom-0 h-20 w-full bg-gradient-to-t from-[#191919] to-transparent" />
        </div>
        <p className="mt-4 text-white nerko_one text-5xl px-5">{data.title}</p>
        <div className="flex mt-2">
          <p className="text-white roboto text-sm px-2 py-1 ml-5 mr-2 bg-[#414141] rounded-md">
            {"2024"}
          </p>
          <p className="text-white roboto text-sm px-2 py-1 mx-2 bg-[#414141] rounded-md">
            {"13+"}
          </p>
          <p className="text-white roboto text-sm px-2 py-1 mx-2 bg-[#414141] rounded-md">
            {"Movie"}
          </p>
          <p className="text-white roboto text-sm px-2 py-1 mx-2 bg-[#414141] rounded-md">
            {"Action"}
          </p>
          <p className="text-white roboto text-sm px-2 py-1 mx-2 bg-[#414141] rounded-md">
            {"Sci-Fi"}
          </p>
          <p className="text-white roboto text-sm px-2 py-1 mx-2 bg-[#414141] rounded-md">
            {"Adventure"}
          </p>
        </div>
        <p className="text-white roboto text-sm px-3 mt-6 py-1 mx-2">
          {
            "The future of those in the dystopian city of Kasi is altered when the destined arrival of Lord Vishnu's final avatar launches a war against darkness."
          }
        </p>

        {/* Play Button */}
        <div className="p-3 mt-3">
          <Button href={`play/${data.id}`} label={"Play"} />
        </div>
      </Modal>
    </>
  );
};

export default TopTenMovieCard;
