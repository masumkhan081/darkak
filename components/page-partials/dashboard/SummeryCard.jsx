"use client"
import CustomSelect from "@/components/ui-custom/CustomSelect";
import Image from "next/image";
import React from "react";
import { Settings } from "lucide-react";

export default function SummeryCard({ label, count, bg, actions }) {
  return (
    <div className="col-span-1 flex  flex-col justify-between gap-4 h-10.0  px-0.5 py-0.5 bg-blue-500 text-wh rounded-md ">
      <div className="flex justify-between px-0.25">
        <span className="font-semibold text-lg">{count}</span>
        <CustomSelect options={["Action ", "Other Action ", "Action Last"]} ph="" icon={<Settings className="w-6 h-6"/>} />
      </div>
      <span>{label}</span>

      <Image src={bg} className="h-5.0 w-full " />
    </div>
  );
}
