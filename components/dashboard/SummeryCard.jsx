"use client";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import Image from "next/image";
import React, { useState } from "react";
import { Settings } from "lucide-react";
import DropDDashboard from "@/components/ui-custom/DropDDashboard";

export default function SummeryCard({ label, count, bg, actions }) {
  const [slctd, setSlctd] = useState();
  return (
    <div className="  flex w-full  flex-col justify-between gap-1 h-10.0  px-0.5 py-0.5 bg-blue-500 text-wh rounded-md ">
      <div className="  flex justify-between px-0.25">
        <span className="font-semibold text-lg">{count}</span>
        <DropDDashboard
          value={null}
          onChange={(vlu) => setSlctd(vlu)}
          options={["Action ", "Other Action ", "Action Last"]}
          ph=""
          icon={<Settings className="w-6 h-6" />}
        />
      </div>
      <span>{label}</span>
      <div className="flex-grow overflow-y-hidden">
        <Image src={bg} className="h-full w-full" />
      </div>
    </div>
  );
}
