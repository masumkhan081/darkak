"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const DropDown = ({
  options,
  value,
  onChange,
  bg,
  ph,
  icon,
  label,
  rounded,
}) => {
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
    <div
      className="z-10 relative min-w-[165px] h-full shadow-sm shadow-slate-300 border ${rounded}"
      ref={dropdownRef}
    >
      <div
        className={`  px-1.0 font-inter text-0.9/1  capitalize  text-pr/600 flex gap-2 justify-between items-center ${styles[bg]}`}
        onClick={toggleDropdown}
      > {label && (
          <span
            className={
              bg == "blue"
                ? "bg-blue-900 text-wh   font-semibold px-0.5 h-full lg:text-lg md:text-base text-sm rounded-md py-0.125"
                : "bg-slate-300 text-black  font-semibold px-0.5 lg:text-lg md:text-base text-sm  rounded-md py-0.125 h-full"
            }
          >
            {label}
          </span>
        )}
        <span>{value?.title ? value.title : ph}</span>
        <ChevronDown className="w-3 h-3" />
      </div>

      {isOpen ? (
        <ul className="absolute w-full z-50 top-full text-black  border  rounded-md shadow   overflow-y-auto scrollbar bg-white max-h-60">
          {options?.map((option, index) => (
            <li
              key={index}
              className={`${
                value === option ? "bg-primary" : "bg-white text-black"
              } capitalize py-1 px-4 cursor-pointer   hover:bg-blue-800 hover:text-white`}
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

export default DropDown;
