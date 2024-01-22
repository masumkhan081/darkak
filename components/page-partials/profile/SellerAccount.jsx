import React from "react";

export default function SellerAccount() {
  return (
    <div className="flex flex-col gap-3 px-2 w-3/4">
      <div className="div_span7_fieldgroup   ">
        <span className="lbl_span2">Seller ID</span>
        <input type="text" className="txt_span5" />
      </div>
      <div className="div_span7_fieldgroup">
        <span className="lbl_span2">First and Last Name</span>
        <input type="text" className="txt_span5" />
      </div>
      <div className="div_span7_fieldgroup">
        <span className="lbl_span2 ">Contact Email address</span>
        <input type="text" className="txt_span5" />
      </div>
      <div className="div_span7_fieldgroup">
        <span className="lbl_span2">Phone Number</span>
        <input type="text" className="txt_span5" />
      </div>
      <div className="div_span7_fieldgroup">
        <span className="lbl_span2">Display /Shop Name</span>
        <input type="text" className="txt_span5" />
      </div>
    </div>
  );
}
