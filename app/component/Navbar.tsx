"use client";
import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { navItems } from "../mock";
import { IoChevronDownOutline, IoSearch } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { FaBell, FaCaretDown } from "react-icons/fa";
import AccountMenu from "./AccontMenu";
import Link from "next/link";
import { RandomMovie } from "../utils";

const NAV_OFFSET = 66;

const Navbar = () => {
  const [visibleMobMenu, setVisibleMobMenu] = useState<boolean>(false);
  const [visibleAccMenu, setVisibleAccMenu] = useState<boolean>(false);
  const [showBg, setShowBg] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= NAV_OFFSET) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };

    handleScroll(); // Initial check when component mounts
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setVisibleMobMenu((curr) => !curr);
  }, []);

  const toggleAccMenu = useCallback(() => {
    setVisibleAccMenu((curr) => !curr);
  }, []);
  
  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex items-center transition duration-500 ${
          showBg ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <Link href="/">
          <img
            className="h-5 sm:h-6 md:h-8 lg:h-10"
            src="/images/logo.png"
            alt="Logo"
          />
        </Link>
        <div
          className="
        flex-row ml-8 gap-7 hidden lg:flex"
        >
          {navItems.map((item, idx) => (
            <NavbarItem key={idx} label={item.route} />
          ))}
        </div>
        <div
          onClick={toggleMenu}
          className="lg:hidden flex  flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <IoChevronDownOutline
            className={`text-white transition  ${
              visibleMobMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={visibleMobMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <IoSearch />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <FaBell />
          </div>
          <div
            className="flex flex-row items-center cursor-pointer relative"
            onClick={toggleAccMenu}
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden mx-2">
              <img src="/images/profile_4.png" alt="profile-img" />
            </div>

            <FaCaretDown
              className={`pl-1 left-2 text-white transition ${
                visibleAccMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={visibleAccMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
