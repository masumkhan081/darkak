import React from "react";

export default function ReturnAdd() {
  return (
    <div className="flex flex-col gap-[4vh] px-2 ">
      <div className="div_span12_fieldgroup ">
        <span className="lbl_span3 md:text-base text-3xl">Seller ID</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">First and Last Name</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">Contact Email address</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Phone Number</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Display /Shop Name</span>
        <input type="text" className="txt_span6" />
      </div>
    </div>
  );
}
