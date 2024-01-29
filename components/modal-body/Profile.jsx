"use client";
import React from "react";
import CustomButton from "../ui-custom/CustomButton";
import { LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-4 sm:px-4 px-1 py-1.5">
      <p className="py-0.25  drop-shadow-md text-pr/600 font-mono  text-center mt-[-10px] mx-[-10px]">
        Settings
      </p>
      <CustomButton
        style="flex justify-center gap-2 items-center  py-0.25 px-0.5 rounded-md border border-tl-2 hover:border-pr/600"
        txt={"Profile"}
      />
      <CustomButton
        style="flex justify-center gap-2 items-center py-0.25 px-0.5 rounded-md border border-tl-2 hover:border-pr/600"
        endIcon={<LogOut className="w-5 h-5 text-red-800" />}
        txt={"Log Out"}
      />
    </div>
  );
}
