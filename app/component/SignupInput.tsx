"use client";
import React, { useState } from "react";
interface Props {
  id: string;
  label: string;
  type: any;
}
const SignupInput = ({ id, label, type }: Props) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="relative w-full">
      <input
        id={id}
        className="block w-full rounded-sm px-6 py-3 text-white bg-[#333333] bg-opacity-80 border border-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 placeholder-gray-500"
        placeholder="Email Address"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        type={type}
      />
    </div>
  );
};

export default SignupInput;
