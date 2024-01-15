"use client"
import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import { CheckCheck } from "lucide-react";
import React from "react";

export default function AddGroup({ actOn, useForEdit }) {
  return (
    <div className="  m-1.5 bg-wh border border-slate-400 rounded-md px-1.5">
      <EnhancedText
        kind={"three"}
        color="text-slate-800 font-bold py-0.5 border-b border-slate-300"
      >
        Add Product Group
      </EnhancedText>

      <form className="flex flex-col gap-3 text-sm my-1.5">
        <div className="flex flex-col gap-2">
          <label>Group Name</label>
          <CustomInput
            type={"text"}
            ph={"Enter product group name"}
            required={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            rows={3}
            placeholder={"Enter description"}
            className="px-0.5 py-0.38 border"
          />
        </div>

        <CustomButton
          startIcon={<CheckCheck className="w-5 h-5" />}
          txt={"Submit"}
          style="gap-1 bg-blue-700 text-wh px-0.75 text-base font-semibold  py-0.25 rounded-md w-fit "
        />
      </form>
    </div>
  );
}
