"use client";
import React from "react";
import EnhancedText from "../../ui-custom/EnhancedText";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ListRestart, SendHorizonal } from "lucide-react";
import CustomButton from "../../ui-custom/CustomButton";

export default function SMSTemplate() {
  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300 justify-center bg-slate-200"
      >
        <span className="font-bold">Settings:</span> SMS Temlate
      </EnhancedText>
      <div className="flex flex-col gap-1.0 py-1.0">
        <div className="flex flex-col gap-1 p-1.0 shadow-md rounded-md border border-slate-400">
          <label className="font-bold font-mono">Order Template</label>
          <Editor editorClassName="bg-slate-100 px-0.25 rounded-md leading-3 text-base" />
        </div>
        <div className="flex flex-col gap-1 p-1.0 shadow-md rounded-md border border-slate-400">
          <label className="font-bold font-mono">Payment Template</label>
          <Editor editorClassName="bg-slate-100 px-0.25 rounded-md leading-3 text-base" />
        </div>
        <div className="flex flex-col gap-1 p-1.0 shadow-md rounded-md border border-slate-400">
          <label className="font-bold font-mono">Shipment Template</label>
          <Editor editorClassName="bg-slate-100 px-0.25 rounded-md leading-3 text-base" />
        </div>

        <div className="flex flex-col gap-1 p-1.0 shadow-md rounded-md border border-slate-400">
          <label className="font-bold font-mono">Another Template</label>
          <Editor editorClassName="bg-slate-100 px-0.25 rounded-md leading-3 text-base" />
        </div>
        <div className="flex flex-col gap-1 p-1.0 shadow-md rounded-md border border-slate-400">
          <label className="font-bold font-mono">Another Template</label>
          <Editor editorClassName="bg-slate-100 px-0.25 rounded-md leading-3 text-base" />
        </div>
        <div className="flex flex-col gap-1 p-1.0 shadow-md rounded-md border border-slate-400">
          <label className="font-bold font-mono">Another Template</label>
          <Editor editorClassName="bg-slate-100 px-0.25 rounded-md leading-3 text-base" />
        </div>
        <div className="flex flex-col gap-1 p-1.0 shadow-md rounded-md border border-slate-400">
          <label className="font-bold font-mono">Another Template</label>
          <Editor editorClassName="bg-slate-100 px-0.25 rounded-md leading-3 text-base" />
        </div>
        <div className="flex flex-col gap-1 p-1.0 shadow-md rounded-md border border-slate-400">
          <label className="font-bold font-mono">Another Template</label>
          <Editor editorClassName="bg-slate-100 px-0.25 rounded-md leading-3 text-base" />
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
      </div>
    </div>
  );
}
