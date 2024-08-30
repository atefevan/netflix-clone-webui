import Link from "next/link";
import Image from "next/image";
import React from "react";
interface Prop {
  img: string;
  href: string;
  name: string;
}
const ProfileImg = ({ img, name, href }: Prop) => {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center py-1"
    >
      <Image src={img} alt="profile" width={120} height={120} />
      <p className="text-[#757575] hover:text-white">{name}</p>
    </Link>
  );
};

export default ProfileImg;
