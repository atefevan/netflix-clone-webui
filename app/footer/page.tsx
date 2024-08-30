import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-black items-center justify-center p-6 bg-opacity-70">
      <div className="py-6 w-full lg:w-2/3">
        <p className="text-[#757575] active:text-white hover:underline cursor-pointer hover:underline-offset-2">
          Questions? contact us
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              FAQ
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Investor Relations
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Ways to Watch
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Corporate Information
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Only on Netflix
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Help Center
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Jobs
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Terms of Use
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Contact Us
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Account
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Redeem Gift Cards
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Privacy
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Speed Test
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Media Center
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Buy Gift Cards
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Cookie Preference
            </p>
            <p className="text-[#757575] cursor-pointer hover:underline hover:underline-offset-1 text-sm pt-4 active:text-white">
              Legal Notices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
