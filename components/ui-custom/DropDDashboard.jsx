"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function DropDDashboard ({ options, value, onChange, bg, ph, icon, label, w })  {
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
    <div className="relative z-0 w-fit h-full" ref={dropdownRef}>
      <div
        className={`py-1 px-0.25 z-0 w-fit h-full  rounded-md capitalize cursor-pointer flex justify-between items-center ${styles[bg]}`}
        onClick={toggleDropdown}
      >
        {icon && icon}

        <ChevronDown className="w-[1.2rem] h-[1.2rem] ms-1" />
      </div>

      {isOpen ? (
        <ul className="absolute min-w-[150px] z-10 right-0 top-full text-black  border  rounded-md shadow max-h-60  overflow-y-scrollbar  bg-white ">
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
              {option}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};