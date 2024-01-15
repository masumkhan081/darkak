"use client"
import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import productGroups from "@/static-data/product-groups";
import { CheckCheck } from "lucide-react";
import React from "react";

export default function AddModel({ actOn, useForEdit }) {
  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300"
      >
        Add Product Model
      </EnhancedText>

      <form className="flex flex-col gap-4 text-sm my-4">
        <div className="grid items-end md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1.5">
          <CustomSelect
            label="Select Product group"
            ph=""
            options={productGroups}
          />
          <CustomSelect label="Select Brand" ph="" options={productGroups} />
          <CustomSelect
            label="Select Product Category"
            ph=""
            options={productGroups}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Product Model Name</label>
          <CustomInput
            type={"text"}
            ph={"Enter product model name"}
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
          startIcon={<CheckCheck className="w-4 h-4 mr-1" />}
          txt={"Submit"}
          style="  bg-blue-900 text-wh px-0.75 text-sm font-semibold  py-0.25 rounded-md w-fit "
        />
      </form>
    </div>
  );
}
