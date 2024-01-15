"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import CustomButton from "./CustomButton";

export default function SelectAndAdd({
  options,
  value,
  onChange,
  bg,
  ph,
  icon,
  label,
}) {
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
    <div className="relative h-full" ref={dropdownRef}>
      <div
        className={`py-1 px-1.0 min-w-[180px] h-full border rounded-md capitalize cursor-pointer flex justify-between items-center ${styles[bg]}`}
        onClick={toggleDropdown}
      >
        {label && (
          <span
            className={
              bg == "blue"
                ? "bg-blue-900 text-wh text-sm font-semibold px-0.5 h-full rounded-md py-0.125"
                : "bg-slate-300 text-black text-sm font-semibold px-0.5  rounded-md py-0.125 h-full"
            }
          >
            {label}
          </span>
        )}
        {icon && icon}
        <span>{value ? value : ph}</span>
        <ChevronDown className="w-[1.2rem] h-[1.2rem] ms-1" />
      </div>

      {isOpen ? (
        <div className="flex flex-col min-h-[130px]">
        <span>dshghsdghsdkh</span>
          <ul className="absolute max-h-[100px] w-full z-10 top-full text-black  border border-slate-500 rounded-md shadow flex-grow  overflow-y-auto scrollbar bg-white ">
            <ul>
            {options?.map((option, index) => (
              <li
                key={index}
                className={`${
                  value === option ? "bg-primary" : "bg-white text-black"
                } capitalize py-2 px-4 cursor-pointer w-full text-center  hover:bg-blue-800 hover:text-white`}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
              
            ))}
            </ul>
            <ul>
            <li className="sticky">dfjhsdhfsdk</li>
            </ul>
           
            
          </ul>
          <div>
              
              <CustomButton
                txt={"Add New"}
                style={
                  "min-h-[30px] fixed bottom-0 w-full rounded-md px-2 py-1 bg-slate-200 text-teal-800 border border-400"
                }
              />
            </div>
        </div>
      ) : null}
    </div>
  );
}
