import React from "react";
import CustomButton from "../ui-custom/CustomButton";
import { LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className="w-full flex flex-col gap-4 sm:px-4 px-1 py-1.5">
      <p className="py-0.5 bg-slate-200 drop-shadow-md text-center mt-[-10px] mx-[-10px]">Settings</p>
      <CustomButton style="py-0.5 px-0.5 rounded-md hover:border border-slate-400" txt={"Profile"}  />
      <CustomButton style="py-0.5 px-0.5 rounded-md hover:border border-slate-400" startIcon={<LogOut className="w-6 h-6 mr-2 text-red-700"/>} txt={"Log Out"} />
    </div>
  );
}
