"use client";

import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import DropDown from "@/components/ui-custom/DropDown";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import productGroups from "@/static-data/product-groups";
import warrenties from "@/static-data/warrenties";
import { CheckCheck } from "lucide-react";
import React from "react";

export default function AddProduct({ actOn, useForEdit }) {
  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300"
      >
        Add Product
      </EnhancedText>

      <div className="flex gap-2 items-center bg-slate-200 rounded-md px-1 py-0.12 ">
        <EnhancedText
          kind={"four"}
          color="font-inter text-0.75/1 font-semibold text-pr/400"
        >
          Select
        </EnhancedText>
        <DropDown
          options={["======", "======", "======", "======"]}
          ph={"Category"}
        />
        <span>{">>"}</span>
        <DropDown
          options={["======", "======", "======", "======"]}
          ph={"Category"}
        />
        <span>{">>"}</span>
        <DropDown
          options={["======", "======", "======", "======"]}
          ph={"Category"}
        />
        <span>{">>"}</span>
      </div>

      <form className="flex flex-col gap-4 text-sm my-4">
        <CustomSelect
          label="Search and select product model"
          options={productGroups}
        />

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>Product Name</label>
            <CustomInput
              type={"text"}
              ph={"Enter product name"}
              required={true}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Stock Notify</label>

            <CustomInput type={"number"} required={true} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>warranty</label>
            <CustomSelect
              label={"Enter warranty duration"}
              options={warrenties}
            />
          </div>
          <div className="  flex flex-col gap-2">
            <label>Sale Price</label>
            <CustomInput type={"number"} required={true} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            rows={4}
            placeholder={"Enter details"}
            className="px-0.5 py-0.38 border rounded-md"
          />
        </div>

        <CustomButton
          startIcon={<CheckCheck className="w-4 h-4 mr-1" />}
          txt={"Submit"}
          style="bg-blue-900 text-wh px-0.75 text-sm font-semibold  py-0.25 rounded-md w-fit "
        />
      </form>
    </div>
  );
}
