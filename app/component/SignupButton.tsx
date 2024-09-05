import React from "react";
import { GoChevronRight } from "react-icons/go";
interface BtnProps {
  title: string;
  w?: string;
  onClick?: (e: any) => void;
}
const SignupButton = ({ title = "Get Started", w, onClick }: BtnProps) => {
  return (
    <div
      className={`relative ${
        w ? w : "w-1/2 md:w-2/4"
      }  bg-[#E50914] flex items-center justify-center mx-2 text-white my-2 py-1 md:my-0 md:py-1 md:self-auto self-center rounded-sm cursor-pointer`}
    >
      <button className="flex items-center transition-transform duration-300 hover:translate-x-2 text-sm lg:text-lg" onClick={onClick}>
        {title} <GoChevronRight size={30} />
      </button>
    </div>
  );
};

export default SignupButton;
