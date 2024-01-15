"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const DropDown = ({ options, value, onChange, bg, ph, icon, label }) => {
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
    light: "bg-slate-100 text-blue-700  ",
    blue: "bg-blue-700 text-white",
  };

  return (
    <div className="relative " ref={dropdownRef}>
      <div
        className={`  px-1.0 font-inter text-0.9/1  capitalize  text-pr/600 flex justify-between items-center ${styles[bg]}`}
        onClick={toggleDropdown}
      >
        <span>{value ? value : ph}</span>
      </div>

      {isOpen ? (
        <ul className="absolute w-full z-10 top-full text-black  border  rounded-md shadow   overflow-y-auto scrollbar bg-white max-h-60">
          {options?.map((option, index) => (
            <li
              key={index}
              className={`${
                value === option ? "bg-primary" : "bg-white text-black"
              } capitalize py-2 px-4 cursor-pointer   hover:bg-blue-800 hover:text-white`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
