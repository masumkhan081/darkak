import React from "react";
import CustomButton from "../ui-custom/CustomButton";
import { X } from "lucide-react";

export default function Barcode({ actOn, title, click }) {
  return (
    <div className=" top-[100px] flex flex-col bg-wh border border-red-600 w-26.0 rounded-md">
      <div className="flex justify-between bg-red-800 px-1.0 text-wh">
        <p className=" text-xl py-1.0">Delete {actOn}</p>
        <CustomButton
          startIcon={<X className="text-wh p-0.125" />}
          afterClick={click}
        />
      </div>
      <p className=" text-base px-1.0 py-1.0">
        Do you want to delete <span className="mx-1 font-bold">{title}</span>?
      </p>

      <hr />

      <div className="flex justify-end gap-4 px-1.0 py-1.0">
        <CustomButton
        afterClick={click}
          txt={"Cancel"}
          style={"rounded-md bg-slate-300 text-black py-0.25 px-0.5"}
        />
        <CustomButton
          txt={"Delete " + actOn}
          style={"rounded-md bg-red-700 text-wh py-0.25 px-0.5"}
        />
      </div>
    </div>
  );
}
