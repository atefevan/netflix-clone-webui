import React from "react";
import { FaPencil } from "react-icons/fa6";
import { FaRegQuestionCircle, FaRegUser } from "react-icons/fa";
import { MdOutlineOutbox } from "react-icons/md";
import Link from "next/link";
interface MenuProps {
  visible?: boolean;
}
const AccountMenu = ({ visible }: MenuProps) => {
  return visible ? (
    <div className="flex bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-3">
        <div className="px-3 flex flex-row gap-3 items-center w-full">
          <img
            className="w-8 rounded-md "
            src={`images/profile_1.png`}
            alt="profile_img"
          />
          <p className="text-white text-sm hover:underline hover:underline-offset-1">
            Atef Evan
          </p>
        </div>
        <div className="px-3 flex flex-row gap-3 items-center w-full">
          <img
            className="w-8 rounded-md "
            src={`images/profile_2.png`}
            alt="profile_img"
          />
          <p className="text-white text-sm hover:underline hover:underline-offset-1">
            Joey
          </p>
        </div>
        <div className="px-3 flex flex-row gap-3 items-center w-full">
          <img
            className="w-8 rounded-md "
            src={`images/profile_3.png`}
            alt="profile_img"
          />
          <p className="text-white text-sm hover:underline hover:underline-offset-1">
            Monica
          </p>
        </div>
        <div className="bg-gray-400 h-[.5px] w-full" />
        <div className="px-3 flex flex-row gap-3 items-center w-full">
          <FaPencil className="w-8 text-white" />
          <p className="text-white text-sm hover:underline hover:underline-offset-1">
            Manage Profiles
          </p>
        </div>
        <div className="px-3 flex flex-row gap-3 items-center w-full">
          <MdOutlineOutbox className="w-8 text-white" />
          <p className="text-white text-sm hover:underline hover:underline-offset-1">
            Transfer Profile
          </p>
        </div>
        <div className="px-3 flex flex-row gap-3 items-center w-full">
          <FaRegUser className="w-8 text-white" />
          <p className="text-white text-sm hover:underline hover:underline-offset-1">
            Account
          </p>
        </div>
        <div className="px-3 flex flex-row gap-3 items-center w-full">
          <FaRegQuestionCircle className="w-8 text-white" />
          <p className="text-white text-sm hover:underline hover:underline-offset-1">
            Help Center
          </p>
        </div>
        <div className="bg-gray-400 h-[.5px] w-full" />
        <div className="px-3 flex flex-row gap-3 items-center w-full">
          <Link href={"/"}>
            <p className="text-white text-sm hover:underline hover:underline-offset-1 px-8">
              Sign out of Netflix
            </p>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
};

export default AccountMenu;

// group/item (px-3 starts with)
