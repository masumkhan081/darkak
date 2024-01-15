"use client";
import React, { useState } from "react";
import { tHeadProductInSale } from "@/static-data/table-headers";
import { tDataProductInSale } from "@/static-data/table-data";
import CustomInput from "../ui-custom/CustomInput";
import { Minus, Plus, X } from "lucide-react";
import CustomSelect from "../ui-custom/CustomSelect";
import CustomButton from "../ui-custom/CustomButton";

export default function TblProductInPos() {
  const [selectedCountUnit, setCountUnit] = useState("Pieces");

  return (
    <div className=" my-0.25 bg-wh rounded-md  max-h-[350px]">
      <div className="overflow-x-auto h-full  ">
        <table className="w-full h-full ">
          <thead
            className="bg-wh"
            style={{
              position: "-webkit-sticky",
              position: "sticky",
              top: "0",
              zIndex: "1",
            }}
          >
            <tr className="flex justify-between py-0.25 ">
              <th className=" capitalize bg-slale-50 text-blue-900 text-sm w-[265px] ">
                Product
              </th>
              <th className=" capitalize bg-slale-50 text-blue-900 text-sm w-32 ">
                Quantity
              </th>
              <th className=" capitalize bg-slale-50 text-blue-900 text-sm w-5.0 ">
                Unit Price
              </th>
              <th className=" capitalize bg-slale-50 text-blue-900 text-sm  w-5.0  ">
                Sub Total
              </th>
              <th className=" capitalize bg-slale-50 text-blue-900 text-sm w-5.0  ">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="w-full bg-slate-100 mb-2 ">
            {tDataProductInSale.map((item, ind) => {
              return (
                <tr
                  key={ind}
                  className="p-1 flex justify-between text-center text-0.9/1.25 font-normal mr-2 mb-2 rounded-md capitalize border border-slate-400 bg-slate-200"
                >
                  <td className="flex flex-col capitalize gap-2 py-0.25 w-[265px]">
                    <span>{item.product}</span>
                    {/* <textarea
                      rows={2}
                      className="border border-slate-400 bg-wh px-1 "
                      placeholder="Add product IMEI, Serial number or other informations here."
                    /> */}
                  </td>

                  <td className="flex flex-col gap-2 w-fit mr-1   ">
                    <div className="flex  h-[30px]">
                      <CustomButton
                        startIcon={<Minus className="w-5 h-5" />}
                        style={"bg-slate-100 px-0.25 rounded-sm h-[28px]"}
                      />
                      <input
                        type="text"
                        className="h-[28px] outline-none   rounded-sm w-20 py-0.25 text-center font-semibold text-base"
                        value={item.quantity}
                        readOnly={true}
                      ></input>
                      <CustomButton
                        startIcon={<Plus className="w-5 h-5" />}
                        style={" bg-slate-100 px-0.25 rounded-sm h-[28px]"}
                      />
                    </div>

                    <div className="h-[26px]">
                      <CustomSelect
                        options={["Pieces"]}
                        value={selectedCountUnit}
                        onChange={(opt) => setCountUnit(opt)}
                        bg={"light"}
                      />
                    </div>
                  </td>

                  <td className="w-fit">
                    <input
                      type="text"
                      className="border border-slate-300 h-[28px] rounded-md w-5.0 py-0.25 text-center font-semibold text-base"
                      value={item.unit_price}
                      readOnly={true}
                    ></input>
                  </td>
                  <td className="w-5.0 flex justify-center items-start font-semibold py-0.25">
                    {item.sub_total}
                  </td>
                  <td className="w-5.0 flex justify-center items-center">
                    <CustomButton
                      startIcon={<X className="text-red-700 w-5 h-6" />}
                      style={"my-0.125   bg-slate-100 px-0.125 rounded-sm"}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
