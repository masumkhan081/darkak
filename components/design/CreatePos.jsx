"use client";
import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import productGroups from "../../static-data/product-groups";
import React, { useState } from "react";
import { Check, Image, Layers2, Plus, Search, X } from "lucide-react";
import SearchWithSelect from "@/components/ui-custom/SearchWithSelect";
import Badge from "@/components/ui-custom/Badge";
import SearchThenSelect from "@/components/ui-custom/SearchThenSelect";
import TblProductInPos from "@/components/tabular-view/TblProductInPos";

export default function CreatePos({ actOn, useForEdit }) {
  const prdcts = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedCustomer, setCustomer] = useState("Walk-In Customer");

  const [selectedDiscountType, setDiscountType] = useState("Fixed");

  function today() {
    let date = new Date();
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }

  return (
    <div className=" bg-slate-500  h-screen flex flex-col justify-between gap-0.5  fixed top-0 ">
      {/*  top tool bar */}
      <div className="flex justify-between items-center mx-0.5 px-0.5 mt-1 py-0.25 bg-slate-100  rounded-md">
        {/* date and shhop name */}

        <p className="flex gap-1.0">
          <span className="drop-shadow-md text-blue-900 font-mono font-semibold">
            {today()}
          </span>
        </p>

        {/* quick tools */}
        <div className="flex gap-2">
          <Badge txt={"Quick Move:"} font={3.1} bg="teal" />
          <CustomButton
            startIcon={<Layers2 className="text-green-600 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
          <CustomButton
            startIcon={<Layers2 className="text-amber-700 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
          <CustomButton
            startIcon={<Layers2 className="text-yellow-600 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
          <CustomButton
            startIcon={<Layers2 className="text-cyan-700 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
          <CustomButton
            startIcon={<Layers2 className="text-emerald-700 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
          <CustomButton
            startIcon={<Layers2 className="text-wh w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-slate-400"}
          />
        </div>
      </div>

      {/* container below top toolbar */}
      <div className="flex-grow grid  grid-cols-5 gap-0.75 mx-2 ">
        {/* pos -> tabule */}
        <div className="col-span-3  bg-wh flex flex-col  gap-0.25 py-0.5 px-0.25 rounded-md">
          <div className="grid content-center sm:grid-cols-5 grid-cols-1 gap-1.5 items-center">
            <div className="col-span-2 h-[40px]">
              <SearchWithSelect
                value={selectedCustomer}
                options={["Walk-In Customer"]}
                // label="Select Customer"
                onChange={(opt) => setCustomer(opt)}
              />
            </div>
            <div className="col-span-3 h-[40px]">
              <div className="flex border border-slate-300 rounded-md">
                <span className="p-0.25 bg-slate-200">
                  <Search className="w-5 h-5 " />
                </span>
                <input
                  type="text"
                  className="flex-grow p-0.25"
                  readOnly={true}
                ></input>
                <CustomButton
                  startIcon={<Plus className="w-5 overflow-y-scrollimageh-5 " />}
                  style="bg-slate-300 px-0.25"
                />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col justify-start gap-2  ">
            <TblProductInPos />
            <div className="grid grid-cols-2 gap-4 h-[35px] px-0.5 ">
              <div className="h-[35px]">
                <CustomSelect
                  label={"Discount type"}
                  options={["Percentage", "Fixed"]}
                  value={selectedDiscountType}
                  onChange={(opt) => setDiscountType(opt)}
                />
              </div>
              <div className="h-[33px]">
                <CustomInput
                  ph={
                    selectedDiscountType == "Fixed"
                      ? "Dicount amount"
                      : "Discount percentage"
                  }
                  afterChange={() => {}}
                  readOnly={true}
                />
              </div>
            </div>
            {/*  table footer */}
            <div className="grid grid-cols-2 gap-4 px-0.5 ">
              <Badge txt={"Item"} bg="wh" font={2.2}>
                <Badge txt="5" bg="gray" font={2.1} />
              </Badge>
              <Badge txt={"Total"} bg="wh" font={2.2}>
                <Badge txt="5000" bg="gray" font={2.1} />
              </Badge>
            </div>
          </div>
        </div>

        {/* product list with scrolling */}
        <div className="col-span-2 bg-slate-200 flex flex-col gap-2 px-0.5 py-0.25 rounded-md">
          {/* category and brand selection */}
          <div className="flex justify-center gap-3 ">
            <SearchWithSelect
              value={selectedCategory}
              bg={"light"}
              options={[
                "All Categories",
                "Accessories",
                "Books",
                "Electronics",
              ]}
              // label="Select Customer"
              onChange={(opt) => setSelectedCategory(opt)}
            />
            <SearchWithSelect
              bg={"light"}
              value={selectedBrand}
              options={["All Brands", "Acer", "Adidas", "Apple"]}
              // label="Select Customer"
              onChange={(opt) => setSelectedBrand(opt)}
            />
          </div>

          {/* product images scrollable */}
          <div className="flex-grow flex gap-2 justify-center flex-wrap overflow-y-scroll max-h-[350px] ">
            {prdcts.map((item, ind) => {
              return (
                <button
                  key={ind}
                  className="max-w-[120px] max-h-[180px] p-0.5 rounded-md flex flex-wrap  flex-col items-center justify-center gap-1 bg-wh"
                >
                  <Image className="w-12 h-12" />
                  <span>{"Apache Something (AS001@ 12)"}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* container of sticky footer section */}
      <div
        style={{
          position: "-webkit-sticky",
          position: "sticky",
          bottom: "0",
          zIndex: "1",
        }}
        className="flex justify-between py-0.25 px-1.0  bg-gradient-to-t from-slate-600 "
      >
        <div className="flex gap-1">
          <CustomButton
            txt={"Draft"}
            startIcon={<Layers2 className="text-yellow-600 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh gap-1"}
          />
          <CustomButton
            txt={"Quotation"}
            startIcon={<Layers2 className="text-yellow-600 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh gap-1"}
          />
          <CustomButton
            txt={"Suspense"}
            startIcon={<Layers2 className="text-yellow-600 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh gap-1"}
          />
          <CustomButton
            txt={"Credit Sale"}
            startIcon={<Layers2 className="text-yellow-600 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh gap-1"}
          />
          <CustomButton
            txt={"Card"}
            startIcon={<Layers2 className="text-yellow-600 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh gap-1"}
          />
          <CustomButton
            txt={"Multiple Pay"}
            startIcon={<Layers2 className="text-yellow-600 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh gap-1"}
          />
          <CustomButton
            txt={"Cash"}
            startIcon={<Layers2 className="text-yellow-600 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh gap-1"}
          />
          <Badge txt="Total Payable" font={2} bg="yellow">
            <Badge txt={"12000"} bg="teal" font={2.1} />
          </Badge>
        </div>
        <div className="flex gap-1">
          <CustomButton
            txt={"Recent Transactions"}
            startIcon={<Layers2 className="text-yellow-600 w-5 h-5" />}
            style={"p-0.125 border rounded-md bg-wh"}
          />
        </div>
      </div>
    </div>
  );
}
