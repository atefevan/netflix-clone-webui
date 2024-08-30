"use client";

import React, { useState } from "react";
interface Props {
  id: string;
  // onChange: (event?: any) => void;
  // value: string;
  label: string;
  type: string;
}
const Input: React.FC<Props> = ({ id, label, type }) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="relative">
      <input
        id={id}
        className="block text-md w-full rounded-md px-6 pt-6 pb-1 text-white focus:outline-none focus:ring-0 appearance-none bg-neutral-700 peer"
        placeholder=" "
        onChange={(event) => setValue(event.target.value)}
        value={value}
        type={type}
      />
      <label
        htmlFor={id}
        className="
        absolute text-md text-zinc-400 
        duration-300 transform -translate-y-3 scale-75 
        top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
        peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
