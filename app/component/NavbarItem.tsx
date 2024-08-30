import React from "react";
interface ItemProp {
  label: string;
}
const NavbarItem = ({ label }: ItemProp) => {
  return (
    <div className="text-white text-sm lg:text-md cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavbarItem;
