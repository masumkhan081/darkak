import CustomSelect from "@/components/ui-custom/CustomSelect";
import React from "react";

export default function WarehouseAdd() {
  return (
    <div className="flex flex-col gap-[4vh] px-2">
      <div className="div_span12_fieldgroup ">
        <span className="lbl_span3 md:text-base text-3xl">
          First and Last Name
        </span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Address</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">Phone Number</span>
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
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Division</span>
        <input type="text" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">City</span>
        <input type="text" className="txt_span6" />
      </div>

      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Postcode</span>
        <div className="col-span-6">
          <CustomSelect />
        </div>
        <span className="err_span3">some error</span>
      </div>
    </div>
  );
}
