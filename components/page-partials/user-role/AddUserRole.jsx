"use client"
import React from "react";
import {
  Ban,
  Check,
  CheckCheck,
  CheckSquare,
  Grid3X3,
  ListChecks,
  RefreshCwOff,
} from "lucide-react";
import TblPermission from "../../tabular-view/TblPermission";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomButton from "@/components/ui-custom/CustomButton";
import EnhancedText from "@/components/ui-custom/EnhancedText";

// Add New Role
// Role Name
// Enter role name
// Permission
// Create
// Edit
// View
// Delete
// Reset
// Select All
// Save Role

export default function AddUserRole() {
  return (
    <div className=" sm:mx-2.0 mx-1.0  my-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"three"}
        color="text-slate-800 py-0.5 border-b border-slate-300 font-inter"
      >
        Add New Role
      </EnhancedText>

      <form className="flex flex-col gap-4 my-4">
        <div className="flex flex-col gap-1 md:w-1/2 w-full">
          <label>Role Name</label>
          <CustomInput type={"text"} ph={"Enter role name"} required={true} />
        </div>

        <TblPermission />

        <div className="flex justify-between items-center my-2">
          <div className="flex justify-between items-center gap-4 ">
            <CustomButton
              startIcon={<Ban className="w-5 h-5" />}
              txt={"Reset"}
              style="gap-1 bg-red-600 text-wh px-0.75 text-sm font-semibold  py-0.25 rounded-md w-fit "
            />
            <CustomButton
              startIcon={<ListChecks className="w-5 h-5" />}
              txt={"Select All"}
              style="gap-1 bg-blue-700 text-wh px-0.75 text-sm font-semibold  py-0.25 rounded-md w-fit "
            />
          </div>

          <CustomButton
            startIcon={<CheckCheck className="w-5 h-5" />}
            txt={"Submit"}
            style="gap-1 bg-blue-700 text-wh px-0.75 text-sm font-semibold  py-0.25 rounded-md w-fit "
          />
        </div>
      </form>
    </div>
  );
}
