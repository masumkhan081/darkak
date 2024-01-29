"use client"
import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import productGroups from "@/static-data/product-groups";
import { CheckCheck } from "lucide-react";
import React from "react";

export default function StockBulk({ actOn = "Supplier", useForEdit }) {
  return (
    <div className="   sm:mx-2.0 mx-1.0 my-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300"
      >
        Product Stock ( Barcode )
      </EnhancedText>

      <form className="flex flex-col gap-1.0 text-sm my-1.5">
        <CustomSelect
          label="Search and select product"
          ph=""
          options={productGroups}
        />

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>Stocks</label>
            <CustomInput
              type={"text"}
              ph={"Enter first name"}
              required={true}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Purchase Price</label>
            <CustomInput
              type={"text"}
              ph={"Enter first name"}
              required={true}
            />
          </div>
        </div>

        <hr className="" />

        <CustomButton
          startIcon={<CheckCheck className="w-5 h-5" />}
          txt={"Submit"}
          style="gap-1 bg-blue-700 text-wh px-0.75 text-base font-semibold  py-0.25 rounded-md w-fit "
        />
      </form>
    </div>
  );
}
