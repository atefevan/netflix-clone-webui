import React from "react";
import { MdOutlineClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg h-2/3 bg-[#191919] overflow-hidden w-1/2 relative">
        {/* Close Icon */}
        <MdOutlineClose
          className="absolute top-3 right-3 z-50 cursor-pointer text-white bg-slate-800 p-1 rounded-full"
          onClick={onClose}
          size={30}
        />
        {/* Children passed from TopTenMovieCard */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
