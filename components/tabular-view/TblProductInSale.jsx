"use client"
import React, { useState } from "react";
import { tHeadProductInSale } from "@/static-data/table-headers";
import { tDataProductInSale } from "@/static-data/table-data";
import CustomInput from "../ui-custom/CustomInput";
import { Minus, Plus, X } from "lucide-react";
import CustomSelect from "../ui-custom/CustomSelect";
import CustomButton from "../ui-custom/CustomButton";

export default function TblProductInSale() {
  const [selectedCountUnit, setCountUnit] = useState("Pieces");

  return (
    <div className="  my-1.25 bg-wh border border-slate-300 rounded-md px-1.0">
      <div className="overflow-x-auto">
        <table className="w-full  ">
          <thead>
            <tr className="flex justify-between py-0.5 0 text-base">
              <th className=" capitalize bg-slale-50 text-blue-900    w-[320px] ">
                Product
              </th>
              <th className=" capitalize bg-slale-50 text-blue-900  w-48 ">
                Quantity
              </th>
              <th className=" capitalize bg-slale-50 text-blue-900  w-8.0 ">
                Unit Price
              </th>
              <th className=" capitalize bg-slale-50 text-blue-900   w-7.0  ">
                Sub Total
              </th>
              <th className=" capitalize bg-slale-50 text-blue-900  w-7.0  ">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="w-full bg-slate-50 mb-2 px-1 py-1">
            {tDataProductInSale.map((item, ind) => {
              return (
                <tr
                  key={ind}
                  className="p-1 flex justify-between text-center text-0.9/1.25 font-normal mb-1 capitalize border"
                >
                  <td className="flex flex-col capitalize gap-2 py-0.25 w-[320px]">
                    <span>{item.product}</span>
                    <textarea
                      rows={2}
                      className="border border-slate-400 bg-wh px-1 "
                      placeholder="Add product IMEI, Serial number or other informations here."
                    />
                  </td>

                  <td className="flex flex-col gap-2 w-fit ">
                    <div className="flex ">
                      <CustomButton
                        startIcon={<Minus />}
                        style={"border bg-slate-200 px-0.25 rounded-sm"}
                      />
                      <input
                        type="text"
                        className="border border-slate-300 rounded-sm w-32 py-0.25 text-center font-semibold text-base"
                        value={item.quantity}
                      ></input>
                      <CustomButton
                        startIcon={<Plus />}
                        style={"border bg-slate-200 px-0.25 rounded-sm"}
                      />
                    </div>
                    {/* <CustomInput
                      starButtonIcon={<Minus />}
                      endButtonIcon={<Plus />}
                      type="text"
                      value={item.quantity}
                    /> */}
                    <CustomSelect
                      options={["Pieces"]}
                      value={selectedCountUnit}
                      onChange={(opt) => setCountUnit(opt)}
                    />
                  </td>

                  <td className="w-fit">
                    <input
                      type="text"
                      className="border border-slate-300 rounded-sm w-8.0 py-0.25 text-center font-semibold text-base"
                      value={item.unit_price}
                    ></input>
                  </td>
                  <td className="w-7.0 flex justify-center items-start font-semibold py-0.25">
                    {item.sub_total} 
                  </td>
                  <td className="w-7.0 flex justify-center items-start" >
                    <CustomButton startIcon={<X className="text-red-700 w-7 h-7"/>} style={"my-0.125"} />
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
