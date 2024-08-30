import React from "react";
import { navItems } from "../mock";
interface MobileMenuProps {
  visible?: boolean;
}
const MobileMenu = ({ visible }: MobileMenuProps) => {
  return visible ? (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <div className="px-3 text-center text-white hover:underline">
            {item.route}
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default MobileMenu;
