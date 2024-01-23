import React from "react";

export default function BusinessInfo() {
  return (
    <div className="flex flex-col gap-[4vh] px-2 ">
      <div className="div_span12_fieldgroup   ">
        <span className="lbl_span3">Legal Name / Business Owner</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Legal Form</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">Address</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">City / Town</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Country/ Region</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup   ">
        <span className="lbl_span3">Person in Charge Name</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Business Registration Number</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">Upload ID Copy - Front Side</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">National Identity Card No.</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Division</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">City</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Postcode</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Upload ID Copy - Back Side</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">ID Type</span>
        <input type="text" className="txt_span6" />
      </div>
    </div>
  );
}
