import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import React, { useState } from "react";

export default function PaymentAcc() {
  const [selectedPaymentWay, setPaymentWay] = useState({ id: null, title: "" });
  return (
    <div className="flex flex-col gap-3 px-2 w-3/4 h-full ">
      <div className="flex flex-col gap-2">
        <CustomSelect
          label="Select Payment System"
          options={[
            { id: 1, title: "Bank" },
            { id: 2, title: "Mobile" },
          ]}
          value={selectedPaymentWay}
          onChange={(value) => setPaymentWay(value)}
          //   bg={"light"}
        />
      </div>
      {selectedPaymentWay.title == "Bank" && (
        <div className="flex flex-col gap-2 ">
          <EnhancedText
            kind={"four"}
            color="text-slate-800 py-0.5 border-b border-slate-300 mb-2"
          >
            Bank Information
          </EnhancedText>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
            <div className="flex flex-col gap-2">
              <label>Account Name</label>
              <CustomInput
                type={"text"}
                ph={"Enter account name"}
                required={true}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Account Number</label>
              <CustomInput
                type={"text"}
                ph={"Enter account number"}
                required={true}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
            <div className="flex flex-col gap-2">
              <label>Bank Name</label>
              <CustomInput
                type={"text"}
                ph={"Enter bank name"}
                required={true}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Branch Name</label>
              <CustomInput
                type={"text"}
                ph={"Enter branch name"}
                required={true}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
            <div className="flex flex-col gap-2">
              <label>SWIFT code</label>
              <CustomInput
                type={"text"}
                ph={"Enter swift code"}
                required={true}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Routing Number</label>
              <CustomInput
                type={"text"}
                ph={"Enter routing number"}
                required={true}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
            <div className="flex flex-col gap-2">
              <label>Mobile Number</label>
              <CustomInput
                type={"text"}
                ph={"Enter mobile number"}
                required={true}
              />
            </div>
          </div>
        </div>
      )}
      {selectedPaymentWay.tile == "Mobile" && (
        <div className="flex flex-col gap-2 ">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
            <div className="flex flex-col gap-2">
              <label>Bkash Number</label>
              <CustomInput
                type={"text"}
                ph={"Enter bkash number"}
                required={true}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Bkash Opening Balance</label>
              <CustomInput
                type={"text"}
                ph={"Enter opening balance"}
                required={true}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
            <div className="flex flex-col gap-2">
              <label>Rocket Number</label>
              <CustomInput
                type={"text"}
                ph={"Enter rocket number"}
                required={true}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Rocket Opening Balance</label>
              <CustomInput
                type={"text"}
                ph={"Enter opening balance"}
                required={true}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
            <div className="flex flex-col gap-2">
              <label>Nagad Number</label>
              <CustomInput
                type={"text"}
                ph={"Enter nagad number"}
                required={true}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Nagad Opening Balance</label>
              <CustomInput
                type={"text"}
                ph={"Enter opening balance"}
                required={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
