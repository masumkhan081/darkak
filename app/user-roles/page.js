"use client";
import React, { useState } from "react";
import Badge from "../../components/ui-custom/Badge";
import CustomButton from "@/components/ui-custom/CustomButton";
import Deletion from "@/components/modal-body/Deletion";
import TblUserRole from "@/components/tabular-view/TblUserRole";

export default function page() {
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-slate-200   w-full  h-full overflow-y-scroll  ">
 
      <TblUserRole />

    </div>
  );
}
