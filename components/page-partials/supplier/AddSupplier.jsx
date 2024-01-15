"use client";
import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import { BookmarkX, Contact, Plus, SendHorizonal } from "lucide-react";
import React, { useState } from "react";

export default function AddSupplier({ actOn = "Supplier", useForEdit }) {
  const [addBusinessCont, setContactAddition] = useState(false);
  const [isAlsoCustomer, setIsAlsoCustomer] = useState("No");

  return (
    <div className="  m-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <EnhancedText
        kind={"two"}
        color="text-slate-800 font-mono py-0.5 border-b border-slate-300"
      >
        New {actOn}
      </EnhancedText>

      <form className="flex flex-col gap-3 text-sm my-4">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 items-center">
          <div className="w-full">
            <CustomSelect
              options={["Yes", "No"]}
              label={"Add as a customer too"}
              value={isAlsoCustomer}
              onChange={(option) => {
                setIsAlsoCustomer(option);
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Business Name</label>
            <CustomInput
              type={"text"}
              ph={"Enter business name"}
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
              endButtonTxt={"Fetch"}
              
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Alternative Contact No</label>
            <CustomInput
              type={"text"}
              ph={"Enter another contact no"}
              required={true}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <CustomInput
              type={"email"}
              ph={"Enter business email"}
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Business Address</label>
            <textarea
              rows={2}
              placeholder={"Enter address"}
              className="px-0.5 py-0.38 border rounded-md"
            />
          </div>
        </div>

        <hr className="" />

        {/*   start ----  BANK INFO   */}

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

        {/*   ----- end ---- BANK INFO ---- start --- payment syst   */}

        <div className="flex flex-col gap-2 ">
          <EnhancedText
            kind={"two"}
            color="text-slate-800 py-0.5 border-b border-slate-300 mb-2"
          >
            Payment Information
          </EnhancedText>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
            <div className="flex flex-col gap-2">
              <label>Bkash Number</label>
              <CustomInput
                type={"text"}
                ph={"Enter account name"}
                required={true}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Nagad Number</label>
              <CustomInput
                type={"text"}
                ph={"Enter account number"}
                required={true}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
            <div className="flex flex-col gap-2">
              <label>Rocket Number</label>
              <CustomInput
                type={"text"}
                ph={"Enter bank name"}
                required={true}
              />
            </div>
          </div>
        </div>

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

        {
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
        }

        {addBusinessCont && (
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

        <div className="flex justify-end mt-1.0">
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
