import Link from "next/link";
import React from "react";
interface Props {
  href: string;
  label: string;
  style?: string;
  fontSize?:string;
}
const Button = ({ style, href, label,fontSize }: Props) => {
  return (
    <Link
      href={`/${href}`}
      className={
        style
          ? style
          : `flex bg-[#E50914] rounded-md h-10 justify-center items-center text-white mt-4 active:bg-red-500`
      }
    >
      {label}
    </Link>
  );
};

export default Button;
