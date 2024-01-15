"use client";
import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import {
  BadgeInfo,
  BookmarkX,
  Contact,
  Plus,
  SendHorizontal,
  X,
} from "lucide-react";
import React, { useState } from "react";

export default function AddPayment({ actOn, useForEdit }) {
  const [selectedPaymentWay, setPaymentWay] = useState();
  const [addBusinessCont, setContactAddition] = useState(false);
  const [isMoreInfo, setMoreInfo] = useState(false);

  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300 font-mono justify-center"
      >
        Add Payment
      </EnhancedText>

      <form className="flex flex-col gap-3 text-sm mb-4 mt-1.5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 ">
          <div className="flex flex-col gap-2">
            <CustomSelect
              label="Select Payment System"
              options={["Bank", "Mobile", "Cash"]}
              value={selectedPaymentWay}
              onChange={(value) => setPaymentWay(value)}
              bg={"light"}
            />
          </div>
        </div>
        {selectedPaymentWay == "Bank" && (
          <div className="flex flex-col gap-2 ">
            <EnhancedText
              kind={"two"}
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
        {selectedPaymentWay == "Mobile" && (
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

        {selectedPaymentWay == "Cash" && (
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 my-2 border border-slate-400 rounded-md py-0.5 px-1.0 pb-3  ">
            <div className="flex flex-col gap-2">
              <label>Opening balance</label>
              <CustomInput
                type={"text"}
                ph={"Enter opening balance"}
                required={true}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between mt-0.5">
          <CustomButton
            endIcon={<SendHorizontal className="w-5 h-5" />}
            txt={"Submit"}
            style="gap-2 bg-blue-800 text-wh px-1.5 text-base font-bold py-0.25 rounded-md w-[220px]  "
          />
        </div>
      </form>
    </div>
  );
}
