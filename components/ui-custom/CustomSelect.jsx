"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomSelect = ({ options, value, onChange, bg, ph, icon, label, w }) => {
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
    light: "bg-slate-200 text-black border border-slate-400",
    blue: "bg-blue-700 text-white",
  };

  return (
    <div className="relative w-full h-full" ref={dropdownRef}>
      <div
        className={`py-1 px-0.25 ${w} h-full border border-slate-300 rounded-md capitalize cursor-pointer flex justify-between items-center ${styles[bg]}`}
        onClick={toggleDropdown}
      >
        {label && (
          <span
            className={
              bg == "blue"
                ? "bg-blue-900 flex items-center text-wh lg:text-lg md:text-base text-sm font-semibold px-0.25 h-full rounded-md py-0.125"
                : " border border-slate-400 flex items-center text-black lg:text-lg md:text-base text-sm font-semibold px-0.25  rounded-md py-0.125 h-full"
            }
          >
            {label}
          </span>
        )}
        {icon && icon}
        <span className="flex-grow px-2 lg:text-lg md:text-base text-sm">
          {value?.title ? value.title : ph}
        </span>
        <ChevronDown className="w-[1.2rem] h-[1.2rem] ms-1" />
      </div>

      {isOpen ? (
        <ul className="absolute w-full z-50 top-full text-black  border  rounded-md shadow max-h-60  overflow-y-scrollbar  bg-white ">
          {options?.map((option, index) => (
            <li
              key={index}
              className={`${
                value === option ? "bg-primary" : "bg-white text-black"
              } capitalize py-1 px-4 cursor-pointer lg:text-lg md:text-base text-sm  hover:bg-blue-800 hover:text-white`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.title}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default CustomSelect;
