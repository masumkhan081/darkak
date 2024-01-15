"use client"
import React from "react";

export default function EmailSetting() {
  const [selectedSMSWay, setSMSWay] = useState();
  const [selectedReqMethod, setReqMethod] = useState();

  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300 justify-center"
      >
        <span className="font-bold">Settings:</span> SMS
      </EnhancedText>

      {/* sms setting: select>(1.twilio> triggers -> Twilio Account SID, Twilio Access Token,From:  2.others) 
 
 plus > url send to parameter name, message param name, select:req method(get, post),  */}

      <form className="flex flex-col gap-3 text-sm my-4">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 ">
          <div className="flex flex-col gap-2">
            <CustomSelect
              label="Select"
              options={["Twilio", "Others"]}
              value={selectedSMSWay}
              onChange={(value) => setSMSWay(value)}
              bg={"light"}
            />
          </div>
        </div>
        {selectedSMSWay == "Twilio" && (
          <>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
              <div className="flex flex-col gap-2">
                <label>Twilio Account SID</label>
                <CustomInput
                  type={"text"}
                  ph={"Enter account sid"}
                  required={true}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Twilio Access Token</label>
                <CustomInput
                  type={"text"}
                  ph={"Enter access token"}
                  required={true}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
              <div className="flex flex-col gap-2">
                <label>From</label>
                <CustomInput type={"text"} ph={"Enter from"} required={true} />
              </div>
            </div>
          </>
        )}
        {/* url send to parameter name, message param name, select:req method(get, post) */}
        {selectedSMSWay == "Others" && (
          <>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
              <div className="flex flex-col gap-2">
                <label>URL send to parameter name</label>
                <CustomInput
                  type={"text"}
                  ph={"Enter send url"}
                  required={true}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Message parameter name</label>
                <CustomInput
                  type={"text"}
                  ph={"Enter message parameter"}
                  required={true}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 ">
              <div className="flex flex-col gap-2">
                <CustomSelect
                  label="Select request method"
                  options={["Get", "Post"]}
                  value={selectedReqMethod}
                  onChange={(value) => setReqMethod(value)}
                />
              </div>
            </div>
          </>
        )}

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
