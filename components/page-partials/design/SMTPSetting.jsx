"use client";
import React from "react";
import EnhancedText from "../../ui-custom/EnhancedText";
import CustomInput from "../../ui-custom/CustomInput";
import CustomButton from "../../ui-custom/CustomButton";
import { ListRestart, SendHorizonal } from "lucide-react";

export default function SMTPSetting() {

  
  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300 justify-center"
      >
        <span className="font-bold">Settings:</span> SMTP
      </EnhancedText>

      <form className="flex flex-col gap-3 text-sm my-4">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>Host Name</label>
            <CustomInput type={"text"} ph={"Enter host name"} required={true} />
          </div>
          <div className="flex flex-col gap-2">
            <label>Port Name</label>
            <CustomInput type={"text"} ph={"Enter port name"} required={true} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>Username</label>
            <CustomInput type={"text"} ph={"Enter username"} required={true} />
          </div>

          <div className="flex flex-col gap-2">
            <label>Password</label>
            <CustomInput
              type={"password"}
              ph={"Enter password"}
              required={true}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label> Encryption Key</label>
            <CustomInput
              type={"text"}
              ph={"Enter encryption key"}
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label> Address</label>
            <CustomInput type={"text"} ph={"Enter address"} required={true} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label> Name</label>
            <CustomInput type={"text"} ph={"Enter name"} required={true} />
          </div>
        </div>
        <div className="flex justify-between mt-1.0">
          <CustomButton
            startIcon={<ListRestart className="w-5 h-5 " />}
            afterClick={(e) => {
              e.preventDefault();
            }}
            txt={"Reset"}
            style="gap-2 bg-slate-200 text-slate-800 px-1.0 text-base  py-0.25 rounded-md w-[220px]  "
          />
          <CustomButton
            txt={"Submit"}
            endIcon={<SendHorizonal className="w-5 h-5" />}
            style="gap-2 bg-blue-800 text-wh px-1.0 text-lg font-semibold  py-0.25 rounded-md w-fit "
          />
        </div>
      </form>
    </div>
  );
}
