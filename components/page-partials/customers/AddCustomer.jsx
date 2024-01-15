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

export default function AddCustomer({ actOn, useForEdit }) {
  const [selectedCustType, setType] = useState("Individual");
  const [addBusinessCont, setContactAddition] = useState(false);
  const [isMoreInfo, setMoreInfo] = useState(false);

  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 py-0.5 border-b border-slate-300 font-mono justify-center"
      >
        Add Customer
      </EnhancedText>

      <form className="flex flex-col gap-3 text-sm mb-4 mt-1.5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 ">
          <div className="flex flex-col gap-2">
            <CustomSelect
              label="Select Customer Type"
              options={["Individual", "Business"]}
              value={selectedCustType}
              onChange={(value) => setType(value)}
              bg={"light"}
            />
          </div>
        </div>
        {selectedCustType == "Individual" && (
          <>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
              <div className="flex flex-col gap-2">
                <label>First Name</label>
                <CustomInput
                  type={"text"}
                  ph={"Enter first name"}
                  required={true}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Last Name</label>
                <CustomInput
                  type={"text"}
                  ph={"Enter last name"}
                  required={true}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
              <div className="flex flex-col gap-2">
                <label>Contact No</label>
                <CustomInput
                  type={"text"}
                  ph={"Enter contact no"}
                  required={true}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Email</label>
                <CustomInput
                  type={"email"}
                  ph={"Enter email"}
                  required={true}
                />
              </div>
            </div>
          </>
        )}
        {selectedCustType == "Business" && (
          <>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
              <div className="flex flex-col gap-2">
                <label>Business Name</label>
                <CustomInput
                  type={"text"}
                  ph={"Enter business name"}
                  required={true}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Business Address</label>
                <CustomInput
                  type={"text"}
                  ph={"Enter business address"}
                  required={true}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
              <div className="flex flex-col gap-2">
                <label>Business Contact</label>
                <CustomInput
                  type={"text"}
                  ph={"Enter business contact"}
                  required={true}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Business Email</label>
                <CustomInput
                  type={"email"}
                  ph={"Enter email"}
                  required={true}
                />
              </div>
            </div>
          </>
        )}

        <div className="flex flex-col gap-2">
          <label>Shipping Address</label>
          <CustomInput
            type={"text"}
            ph={"Enter shipping address name"}
            required={true}
          />
        </div>

        {selectedCustType == "Business" && (
          <CustomButton
            style=" gap-2 bg-slate-200 text-slate-800 px-1.0 text-base  py-0.25 rounded-md w-[220px]   "
            startIcon={
              addBusinessCont == false ? (
                <Plus className="w-5 h-5" />
              ) : (
                <BookmarkX className="w-5 h-5" />
              )
            }
            txt={
              addBusinessCont == false
                ? "Add Contact Person"
                : "Close Contact Panel"
            }
            afterClick={() => {
              setContactAddition(!addBusinessCont);
            }}
          />
        )}

        {addBusinessCont && selectedCustType == "Business" && (
          <>
            <div className=" my-2 border border-slate-400 rounded-md p-2 flex flex-col gap-2">
              <EnhancedText
                kind={"five"}
                color="uppercase bg-slate-100 text-slate-800 w-fit rounded-md px-1.0 py-0.25"
              >
                <Contact className="w-5 h-5" />
                Contact-1
              </EnhancedText>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
                <div className="flex flex-col gap-2">
                  <label>First Name</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter first name"}
                    required={true}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Last Name</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter last name"}
                    required={true}
                  />
                </div>
              </div>
              {/* not showing ...  */}
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
                <div className="flex flex-col gap-2">
                  <label>Department</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter department"}
                    required={true}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Designation</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter designation"}
                    required={true}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
                <div className="flex flex-col gap-2">
                  <label>Contact No</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter contact no"}
                    required={true}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Email</label>
                  <CustomInput
                    type={"email"}
                    ph={"Enter email"}
                    required={true}
                  />
                </div>
              </div>
            </div>
            <div className=" my-2 border border-slate-400 rounded-md p-2 flex flex-col gap-2">
              <EnhancedText
                kind={"five"}
                color="uppercase bg-slate-100 text-slate-800 w-fit rounded-md px-1.0 py-0.25"
              >
                <Contact className="w-5 h-5" />
                Contact-2
              </EnhancedText>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
                <div className="flex flex-col gap-2">
                  <label>First Name</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter first name"}
                    required={true}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Last Name</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter last name"}
                    required={true}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
                <div className="flex flex-col gap-2">
                  <label>Department</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter department"}
                    required={true}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Designation</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter designation"}
                    required={true}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
                <div className="flex flex-col gap-2">
                  <label>Contact No</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter contact no"}
                    required={true}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Email</label>
                  <CustomInput
                    type={"email"}
                    ph={"Enter email"}
                    required={true}
                  />
                </div>
              </div>
            </div>
            <div className=" my-2 border border-slate-400 rounded-md p-2 flex flex-col gap-2">
              <EnhancedText
                kind={"five"}
                color="uppercase bg-slate-100 text-slate-800 w-fit rounded-md px-1.0 py-0.25"
              >
                <Contact className="w-5 h-5" />
                Contact-3
              </EnhancedText>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
                <div className="flex flex-col gap-2">
                  <label>First Name</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter first name"}
                    required={true}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Last Name</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter last name"}
                    required={true}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
                <div className="flex flex-col gap-2">
                  <label>Department</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter department"}
                    required={true}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Designation</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter designation"}
                    required={true}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
                <div className="flex flex-col gap-2">
                  <label>Contact No</label>
                  <CustomInput
                    type={"text"}
                    ph={"Enter contact no"}
                    required={true}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Email</label>
                  <CustomInput
                    type={"email"}
                    ph={"Enter email"}
                    required={true}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {isMoreInfo && (
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 my-2 border border-slate-400 rounded-md py-0.5 px-1.0 pb-3  ">
            <div className="col-span-1 flex flex-col gap-2">
              <label>Opening Balance</label>
              <CustomInput
                type={"text"}
                ph={"Enter opening balance"}
                required={true}
              />
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label>
                Credit Limit{" "}
                <span className="w-full text-sm text-slate-500 ms-2 font-bold">
                  Keep blank for no limit
                </span>
              </label>
              <CustomInput
                type={"text"}
                ph={"Enter credit limit"}
                required={true}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between mt-0.5">
          <CustomButton
            startIcon={
              isMoreInfo ? (
                <X className="w-5 h-5 " />
              ) : (
                <BadgeInfo className="w-5 h-5" />
              )
            }
            afterClick={(e) => {
              e.preventDefault();
              setMoreInfo(!isMoreInfo);
            }}
            txt={isMoreInfo ? "Close More Info" : "More Info"}
            style="gap-2 bg-slate-200 text-slate-800 px-1.0 text-base  py-0.25 rounded-md w-[220px]  "
          />
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
