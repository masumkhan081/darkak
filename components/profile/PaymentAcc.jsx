import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import React, { useState } from "react";

export default function PaymentAcc() {
  const [accName, setAccName] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [route, setRoute] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [contact, setContact] = useState("");
  const [bkash, setBkash] = useState("");
  const [nagad, setNagad] = useState("");
  const [rocket, setRocket] = useState("");

  const [selectedPaymentWay, setPaymentWay] = useState({ id: null, title: "" });
  return (
    <div className="flex flex-col gap-3 px-2 h-full md:text-lg text-sm">
      <div className="flex flex-col gap-2 ">
        <EnhancedText
          kind={"four"}
          color="text-slate-800 py-0.5 border-b border-slate-300 mb-2"
        >
          Bank Information{" "}
          <span className="ms-2 text-base font-medium font-serif text-tan-4">
            Primary
          </span>
        </EnhancedText>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col ">
            <label>Account Name</label>

            <input
              type="text"
              value={accName}
              onChange={(e) => setAccName(e.target.value)}
              className={
                accName
                  ? " txt_span6   border-tl-2  "
                  : " txt_span6 border-tl-1"
              }
            />
          </div>

          <div className="flex flex-col">
            <label>Account Number</label>
            <input
              type="text"
              value={accNumber}
              onChange={(e) => setAccNumber(e.target.value)}
              className={
                accNumber
                  ? " txt_span6   border-tl-2  "
                  : " txt_span6 border-tl-1"
              }
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col ">
            <label>Bank Name</label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className={
                bankName
                  ? " txt_span6   border-tl-2  "
                  : " txt_span6 border-tl-1"
              }
            />
          </div>

          <div className="flex flex-col">
            <label>Branch Name</label>
            <input
              type="text"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              className={
                branchName
                  ? " txt_span6   border-tl-2  "
                  : " txt_span6 border-tl-1"
              }
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col ">
            <label>SWIFT code</label>
            <input
              type="text"
              value={swiftCode}
              onChange={(e) => setSwiftCode(e.target.value)}
              className={
                swiftCode
                  ? " txt_span6   border-tl-2  "
                  : " txt_span6 border-tl-1"
              }
            />
          </div>

          <div className="flex flex-col ">
            <label>Routing Number</label>
            <input
              type="text"
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              className={
                route ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
              }
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col">
            <label>Mobile Number</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className={
                contact
                  ? " txt_span6   border-tl-2  "
                  : " txt_span6 border-tl-1"
              }
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 ">
        <EnhancedText
          kind={"four"}
          color="text-slate-800 py-0.5  border-b border-slate-300 mb-2"
        >
          MFG Information
        </EnhancedText>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col ">
            <label>Bkash Number</label>
            <input
              type="text"
              value={bkash}
              onChange={(e) => setBkash(e.target.value)}
              className={
                bkash ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
              }
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col ">
            <label>Rocket Number</label>
            <input
              type="text"
              value={rocket}
              onChange={(e) => setRocket(e.target.value)}
              className={
                rocket ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
              }
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col">
            <label>Nagad Number</label>
            <input
              type="text"
              value={nagad}
              onChange={(e) => setNagad(e.target.value)}
              className={
                nagad ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
