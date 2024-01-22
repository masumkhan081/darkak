import React from "react";

export default function SellerAccount() {
  return (
    <div className="flex flex-col gap-2 px-2 w-3/4">
      <div className="grid grid-cols-7 items-center rounded-md border border-slate-300">
        <span className="col-span-2 ps-2">Seller ID</span>
        <input type="text" className="col-span-5 py-0.25 rounded-r-md" />
      </div>
      <div className="grid grid-cols-7 items-center rounded-md border border-slate-300">
        <span className="col-span-2 ps-2">First and Last Name</span>
        <input type="text" className="col-span-5 py-0.25 rounded-r-md" />
      </div>
      <div className="grid grid-cols-7 items-center rounded-md border border-slate-300">
        <span className="col-span-2 ps-2 ">Contact Email address</span>
        <input type="text" className="col-span-5 py-0.25 rounded-r-md" />
      </div>
      <div className="grid grid-cols-7 items-center rounded-md border border-slate-300">
        <span className="col-span-2 ps-2">Phone Number</span>
        <input type="text" className="col-span-5 py-0.25 rounded-r-md" />
      </div>
      <div className="grid grid-cols-7 items-center rounded-md border border-slate-300">
        <span className="col-span-2 ps-2">Display /Shop Name</span>
        <input type="text" className="col-span-5 py-0.25 rounded-r-md" />
      </div>
    </div>
  );
}
