import React from "react";
import { GoChevronRight } from "react-icons/go";

const SignupButton = () => {
  return (
    <div className="relative w-2/4 bg-[#E50914] flex items-center justify-center text-white rounded-r-sm">
      <button className="flex items-center transition-transform duration-300 hover:translate-x-2 text-sm lg:text-lg">
        Get Started <GoChevronRight size={30} />
      </button>
    </div>
  );
};

export default SignupButton;
