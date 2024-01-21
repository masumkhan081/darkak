"use client";
import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import { ListRestart, SendHorizontal } from "lucide-react";
import React, { useState } from "react";

export default function PurchReturn() {
  const [selectedSupplier, setSupplier] = useState();
  const [selectedPrdct, setProduct] = useState();
  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300 font-mono justify-center"
      >
        Purchase Return
      </EnhancedText>
      <hr />

      <form className="flex flex-col gap-1.0 text-sm mb-4 mt-1.5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 ">
          <div className="flex flex-col gap-2">
            <CustomSelect
              label="Select A Supplier"
              options={["supplier-1", "supplier-2"]}
              value={selectedSupplier}
              onChange={(value) => setSupplier(value)}
              bg={"light"}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 ">
          <div className="flex flex-col gap-2">
            <CustomSelect
              label="Select A Product"
              options={["product-1", "product-2"]}
              value={selectedPrdct}
              onChange={(value) => setProduct(value)}
              bg={"light"}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 ">
          <div className="flex flex-col gap-2">
            <label>
              Upload Documents{" "}
              <span className="w-full text-sm text-slate-500 ms-2 font-bold">
                (image,pdf)
              </span>
            </label>
            <CustomInput type="file" />
          </div>
        </div>

        {/* <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>First Name</label>
            <CustomInput
              type={"text"}
              ph={"Enter first name"}
              required={true}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Last Name</label>
            <CustomInput type={"text"} ph={"Enter last name"} required={true} />
          </div>
        </div> */}

        <div className="flex justify-between mt-0.5">
          <CustomButton
            startIcon={<ListRestart className="w-5 h-5 " />}
            afterClick={(e) => {
              e.preventDefault();
            }}
            txt={"Reset"}
            style="gap-2 bg-slate-200 text-slate-800 px-1.0 text-base  py-0.25 rounded-md w-[220px]  "
          />
          <CustomButton
            endIcon={<SendHorizontal className="w-5 h-5" />}
            txt={"Submit"}
            style="gap-2 bg-blue-800 text-wh text-center px-1.5 text-base font-bold py-0.25 rounded-md w-[220px]  "
          />
        </div>
      </form>
    </div>
  );
}
