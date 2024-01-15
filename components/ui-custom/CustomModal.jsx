"use client";

import React, { useEffect, useRef, useState } from "react";

const Modal = ({ trigger, modalBody }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const styles = {
    light: "bg-slate-300 text-black border border-slate-500",
    blue: "bg-blue-700 text-white",
  };

  return (
    <div className="relative " ref={dropdownRef}>
      <div
        className={`py-1 px-1.5 min-w-[110px] rounded-md capitalize cursor-pointer flex justify-between items-center   `}
        onClick={toggleDropdown}
      >
        {trigger}
      </div>

      {isOpen && { modalBody }}
    </div>
  );
};

export default Modal;
