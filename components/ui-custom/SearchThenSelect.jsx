"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Plus, Search } from "lucide-react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const SearchThenSelect = ({
  options,
  value,
  onChange,
  bg,
  ph,
  icon,
  label,
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
    light: "bg-slate-200 text-black  ",
    blue: "bg-blue-700 text-white",
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className={` px-1.0 w-full h-full rounded-md capitalize cursor-pointer flex justify-between items-center ${styles[bg]}`}
        onClick={toggleDropdown}
      >
        <CustomInput
          type="text"
          startIcon={<Search className="w-4 h-4"/>}
          // endButtonTxt={"Search"}
          endButtonIcon={<Plus className="w-4 h-4"/>}
        />
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

export default SearchThenSelect;
