"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

interface Props {
  question: string;
  ans: string;
}

const Faq = ({ question, ans }: Props) => {
  const [hasExpanded, setHasExpanded] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col w-full mb-1 justify-center items-center overflow-hidden cursor-pointer"
      onClick={() => setHasExpanded(!hasExpanded)}
    >
      <div className="h-[60px] w-full lg:w-2/3 flex bg-[#303030] rounded-t-sm items-center px-6 text-white justify-between">
        <div className="flex w-full items-center justify-between">
          <p className="sm:text-xl font-semibold">{question}</p>
          {hasExpanded ? (
            <RxCross2 size={33} onClick={() => setHasExpanded(!hasExpanded)} />
          ) : (
            <GoPlus size={35} onClick={() => setHasExpanded(!hasExpanded)} />
          )}
        </div>
      </div>
      <div
        className={`transition-[max-height] duration-500 ease-in-out rounded-b-sm overflow-hidden ${
          hasExpanded ? "max-h-[500px]" : "max-h-0"
        } w-full lg:w-2/3 bg-[#303030] px-6 text-white`}
      >
        <div className="py-4">
          <p>{ans}</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
