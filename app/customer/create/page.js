import AddCustomer from "@/components/page-partials/customers/AddCustomer";
import React from "react";

export default function page() {
  return (
    <div className="bg-slate-200   w-full  h-full overflow-y-scroll flex flex-col justify-start ">
      <AddCustomer useForEdit={false} />
    </div>
  );
}
