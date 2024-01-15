"use client";
import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText"; 
import React, { useState } from "react";
import {
  ArrowBigUp,
  BadgeInfo,
  Check,
  ListRestart,
  Plus,
  Save,
  SendHorizonal,
  X,
} from "lucide-react";
import SearchWithSelect from "@/components/ui-custom/SearchWithSelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchThenSelect from "@/components/ui-custom/SearchThenSelect";
import TblProductInSale from "@/components/tabular-view/TblProductInSale";

export default function AddSale() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  function handleDateSelect(date) {
    setSelectedDate(date);
  }
  const [isMoreInfo, setMoreInfo] = useState(false);

  const [selectedPaymentWay, setPaymentWay] = useState();
  const [selectedPaymentAccount, setPaymentAccount] = useState();
  const [selectedCustomer, setCustomer] = useState("Walk-In Customer");

  return (
    <div className=" bg-slate-200  border border-slate-400 rounded-md px-1.0 pb-1.0 flex flex-col gap-0.5">
      <EnhancedText
        kind={"one"}
        color="text-slate-800 py-0.75 font-mono font-bold  text-blue-900 justify-center "
      >
        Add Sale
      </EnhancedText>
      <div className="bg-wh px-0.5 pb-0.5 flex flex-col gap-4 text-sm my-4 rounded-md">
        <EnhancedText
          kind={"four"}
          color="text-blue-600 mx-1.0 py-0.5 border border-slate-300 justify-center bg-slate-100 rounded-md"
        >
          Customer Info
        </EnhancedText>

        {/*  */}
        <div className="grid content-end sm:grid-cols-2 grid-cols-1 gap-1.5 items-end">
          <div className="flex flex-col gap-2">
            <SearchWithSelect
              value={selectedCustomer}
              options={["Walk-In Customer","search-result-1", "sh-2", "sh-3"]}
              label="Select Customer"
              onChange={(opt) => setCustomer(opt)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Sale Date</label>
            <DatePicker
              className="bg-slate-200 text-black h-full py-1 shadow-sm border border-slate-500 rounded-md font-bold text-center w-[220px]"
              selected={selectedDate}
              onSelect={handleDateSelect}
              onChange={(date) => setSelectedDate(date)}
            />
          </div>
        </div>
        <div className="grid content-end sm:grid-cols-2 grid-cols-1 gap-1.5 items-end">
          <div className="flex flex-col gap-2 text-blue-800">
            <p className="flex flex-col gap-1">
              <span className="font-semibold ">Billing Address:</span>
              <span>
                Walk-In Customer, Linking Street, Phoenix, Arizona, USA
              </span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="font-semibold ">Shipping Address:</span>
              <span>Walk-In Customer</span>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label>
              Upload Documents
              <span className="w-full text-sm text-slate-500 ms-2 font-bold">
                (image,pdf)
              </span>
            </label>
            <CustomInput type="file" accept={".jpg,.jpeg,.png"} />
          </div>
        </div>
      </div>
      <div className="bg-wh px-0.5 pb-0.5 flex flex-col gap-4 text-sm my-4 rounded-md">
        <EnhancedText
          kind={"four"}
          color="text-blue-600 mx-1.0 py-0.5 border border-slate-300 justify-center bg-slate-100 rounded-md"
        >
          Product Info
        </EnhancedText>

        {/*  */}
        <div className="grid content-end  grid-cols-1 gap-1.5 items-end">
          <div className="flex flex-col gap-2">
            <SearchThenSelect />
          </div>
        </div>

        <TblProductInSale />
      </div>
      <div className="bg-wh px-0.5 pb-0.5 flex flex-col gap-4 text-sm my-4 rounded-md">
        <EnhancedText
          kind={"four"}
          color="text-blue-600 mx-1.0 py-0.5 border border-slate-300 justify-center bg-slate-100 rounded-md"
        >
          Shipment Detail
        </EnhancedText>

        <div className="grid content-end sm:grid-cols-3 grid-cols-1 gap-1.5 items-end">
          <div className="flex flex-col gap-2">
            <label>Expense Note</label>
            <textarea
              rows={2}
              placeholder={"Enter address"}
              className="px-0.5 py-0.38 border rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Expense Note</label>
            <textarea
              rows={2}
              placeholder={"Enter address"}
              className="px-0.5 py-0.38 border rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Expense Amount</label>
            <CustomInput type={"text"} ph={"Enter amount "} required={true} />
          </div>
        </div>

        <div className="grid content-end sm:grid-cols-3 grid-cols-1 gap-1.5 items-end">
          <div className="flex flex-col gap-2">
            <CustomSelect
              label="Shipping Status"
              options={["Draft", "Other option", "To be checked"]}
              value={selectedPaymentWay}
              onChange={(value) => setPaymentWay(value)}
              //   bg={"light"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Expense Amount</label>
            <CustomInput type={"text"} ph={"Enter amount "} required={true} />
          </div>
          <div className="flex flex-col gap-2">
            <SearchWithSelect
              options={["search-result-1", "sh-2", "sh-3"]}
              label="Select Customer"
            />
          </div>
        </div>
        <div className="grid content-end sm:grid-cols-3 grid-cols-1 gap-1.5 items-end">
          <div className="flex flex-col gap-1">
            <label>Shipping Document</label>
            <CustomInput type="file" accept={".jpg,.jpeg,.png"} />
            <span>
              Max File size: 5MB Allowed File: .pdf, .csv, .zip, .doc, .docx,
              .jpeg, .jpg, .png
            </span>
          </div>
        </div>
        <div className="grid content-end sm:grid-cols-3 grid-cols-1 gap-1.5 items-end">
          <CustomButton
            startIcon={
              isMoreInfo ? (
                <X className="w-5 h-5 " />
              ) : (
                <Plus className="w-5 h-5" />
              )
            }
            afterClick={(e) => {
              e.preventDefault();
              setMoreInfo(!isMoreInfo);
            }}
            txt={"Additional Expense"}
            style="gap-2 bg-slate-200 text-slate-800 px-1.0 text-base  py-0.25 rounded-md w-[220px]  "
          />
        </div>
        {isMoreInfo && (
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5 my-2 border border-slate-400 rounded-md py-0.5 px-1.0 pb-3  ">
            <span>Additional expense name</span>
            <span>Amount</span>
            <div className="col-span-1 flex flex-col gap-2">
              <CustomInput
                type={"text"}
                ph={"Enter balance name"}
                required={true}
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <CustomInput type={"text"} ph={"Enter amount"} required={true} />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <CustomInput
                type={"text"}
                ph={"Enter balance name"}
                required={true}
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <CustomInput type={"text"} ph={"Enter amount"} required={true} />
            </div>{" "}
            <div className="col-span-1 flex flex-col gap-2">
              <CustomInput
                type={"text"}
                ph={"Enter balance name"}
                required={true}
              />
            </div>
            <div className="col-span-1 flex flex-col gap-2">
              <CustomInput type={"text"} ph={"Enter amount"} required={true} />
            </div>
          </div>
        )}
      </div>
      <div className="bg-wh px-0.5 pb-1.5 flex flex-col gap-4 text-sm my-4 rounded-md">
        <EnhancedText
          kind={"four"}
          color="text-blue-600 mx-1.0 py-0.5 border border-slate-300 justify-center bg-slate-100 rounded-md"
        >
          Add Payment
        </EnhancedText>

        <div className="grid content-end sm:grid-cols-3 grid-cols-1 gap-1.5 items-end">
          <span>
            <span className="font-semibold text-base">Advance Balance:</span>
            $0.00
          </span>
        </div>

        <div className="grid content-end sm:grid-cols-3 grid-cols-1 gap-1.5 items-end">
          <div className="flex flex-col gap-2">
            <label>Amount</label>
            <CustomInput type={"text"} ph={"Enter amount "} required={true} />
          </div>
          <div className="flex flex-col gap-2">
            <label>Paid On</label>
            <DatePicker
              className="bg-slate-200 text-black h-full py-1 shadow-sm border border-slate-500 rounded-md font-bold text-center w-[220px]"
              selected={selectedDate}
              onSelect={handleDateSelect}
              onChange={(date) => setSelectedDate(date)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <CustomSelect
              label="Payment System"
              options={["Bank", "Mobile", "Cash"]}
              value={selectedPaymentWay}
              onChange={(value) => setPaymentWay(value)}
              bg={"light"}
            />
          </div>
        </div>

        {selectedPaymentWay == "Bank" && (
          <div className="flex flex-col gap-2">
            <CustomSelect
              label="Select Payment Account"
              options={["Account-1", "Account-2"]}
              value={selectedPaymentAccount}
              onChange={(value) => setPaymentAccount(value)}
              //   bg={"light"}
            />
          </div>
        )}
        {selectedPaymentWay == "Mobile" && (
          <div className="flex flex-col gap-2">
            <CustomSelect
              label="Select Mobile Account"
              options={["Bkash-Account", "nagad-Account"]}
              value={selectedPaymentAccount}
              onChange={(value) => setPaymentAccount(value)}
              //   bg={"light"}
            />
          </div>
        )}
        <div className="grid content-end   grid-cols-1 gap-1.5 items-end">
          <div className="flex flex-col gap-2">
            <label>Payment Note</label>
            <textarea
              rows={2}
              placeholder={"Enter payment note"}
              className="px-0.5 py-0.38 border rounded-md"
            />
          </div>
        </div>

        {/* {selectedPaymentWay == "Cash" && (
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
        )} */}
      </div>

      <div className="bg-wh flex justify-between gap-1.0 mt-1.0 p-1.0">
        <div className="flex-grow flex justify-center gap-2">
          <CustomButton
            startIcon={<Save className="w-5 h-5 " />}
            afterClick={(e) => {
              e.preventDefault();
            }}
            txt={"Save"}
            style="gap-2 bg-wh border border-slate-400 text-slate-800 text-green-800 px-1.0 text-lg font-semibold  py-0.25 rounded-md w-[220px]  "
          />
          <CustomButton
            txt={"Save And Print"}
            endIcon={<SendHorizonal className="w-5 h-5" />}
            style="gap-2 bg-wh text-green-900 border border-slate-400 px-1.0 text-lg font-semibold  py-0.25 rounded-md w-fit "
          />
        </div>
        <div className="flex justify-end w-fit ">
          <CustomButton
            startIcon={<ArrowBigUp />}
            style="gap-2 bg-wh text-green-900 border border-slate-400 px-1.0 text-lg font-semibold  py-0.25 rounded-md w-fit "
          />
        </div>
      </div>
    </div>
  );
}
