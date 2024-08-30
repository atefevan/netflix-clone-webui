import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import ProfileImg from "../component/ProfileImg";
import { profiles } from "../mock";

const Profile = () => {
  return (
    <div className="flex h-screen w-screen bg-[#141414] items-center justify-center flex-col">
      <div className="top-0 h-20 absolute w-full bg-gradient-to-b from-[#040404] to-transparent" />
      <div className="flex w-full items-center flex-col py-6">
        <p className="text-4xl text-white">Who's Watching ?</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-20">
          {profiles.map((profile) => (
            <ProfileImg
              img={profile.img}
              href={profile.href}
              name={profile.name}
            />
          ))}
          <div className="flex items-center justify-center flex-col hover:text-white hover:cursor-pointer">
            <FaPlusCircle
              size={55}
              className="my-6 mx-5 text-[#757575] hover:text-white"
            />
            <p className="text-[#757575] hover:text-white">Add Profile</p>
          </div>
        </div>
        <div className="flex h-10 my-5">
          <button className="border-2 border-[#757575] text-[#757575] outline-none outline-offset-2 px-3 py-1 rounded-sm active:border-[#FFFFFF] active:text-white">
            Manage Profiles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
