"use client";
import React, { useState } from "react";
interface Props{
id:string;
label:string;
type:any;
}
const SignupInput = ({id, label, type}:Props) => {
    const [value, setValue] = useState<string>("");
  return (
    <div className="relative w-full">
      <input
        id={id}
        className="block text-md w-full rounded-l-sm px-6 py-3 text-slate-700 focus:outline-none focus:ring-0 appearance-none bg-white peer"
        placeholder="Email Address"
        onChange={(event) => setValue(event.target.value)}
        value={value}
        type={type}
      />
    </div>
  );
};

export default SignupInput;
