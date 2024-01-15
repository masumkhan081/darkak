"use client";
import { tDataRoles, tDataUsers } from "@/static-data/table-data";
import { tHeadRoles, tHeadUser } from "@/static-data/table-headers";
import React, { useState } from "react";
import Badge from "../ui-custom/Badge";
import CustomButton from "../ui-custom/CustomButton";
import { Info, Pencil, Trash } from "lucide-react";
import Deletion from "../modal-body/Deletion";
import EnhancedText from "../ui-custom/EnhancedText";

export default function TblUsers() {

  const [deleteModal, setModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  return (
    <div className=" sm:mx-2.0 mx-1.0  my-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <div className=" h-full flex flex-col gap-4 ">
        <EnhancedText kind={"three"} color="text-black font-inter py-0.5 border-b border-slate-400">
          All Users
        </EnhancedText>
        <table className="w-full h-full my-1.0">
          <thead>
            <tr className="px-0.25 bg-slale-50  flex justify-between items-center rounded-md border-b border-slate-600 mb-2">
              {tHeadUser.map((itm, ind) => {
                return (
                  <th key={ind} className="capitalize py-0.5 text-center">
                    {itm}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {tDataUsers.map((item, ind) => {
              return (
                <tr
                  key={ind}
                  className="flex justify-between text-center   font-normal mb-1 capitalize border hover:bg-slate-300 rounded-md"
                >
                  <td className="  capitalize py-0.25  px-0.25 flex items-center">
                    {item.Username}
                  </td>

                  <td className="  capitalize py-0.25  px-0.25 flex items-center">
                    {item.Name}
                  </td>
                  <td className="  capitalize py-0.25   px-0.25 flex items-center">
                    {item.Email}
                  </td>
                  <td className="  capitalize py-0.25 c px-0.25 flex items-center">
                    {item["Contact no."]}
                  </td>
                  <td className="  capitalize py-0.25  px-0.25 flex items-center">
                    {item.Role}
                  </td>
                  <td className=" flex gap-1 justify-center items-center px-0.5">
                    <CustomButton
                      afterClick={() => {
                        setInfoModal(!infoModal);
                      }}
                      startIcon={<Info className="w-5 h-5" />}
                      style={
                        "bg-green-900 text-wh py-0.25 px-0.5 w-fit h-fit rounded-md"
                      }
                    />
                    <CustomButton
                      // afterClick={}
                      startIcon={<Pencil className="w-5 h-5" />}
                      style={
                        "bg-green-900 text-wh py-0.25 px-0.5 w-fit h-fit rounded-md"
                      }
                    />
                    <CustomButton
                      afterClick={() => {
                        setModal(!deleteModal);
                      }}
                      startIcon={<Trash className="w-5 h-5" />}
                      style={
                        "bg-red-800 text-wh py-0.25 px-0.5 h-fit rounded-md"
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {deleteModal == true && (
        <div className="bg-slate-300 h-screen w-screen absolute z-10 bg-opacity-70 top-0 bottom-0 right-0 left-0 flex justify-center items-start pt-3.0">
          <Deletion actOn="User" title="Mr x" click={() => setModal(false)} />
        </div>
      )}
      {infoModal == true && (
        <div className="bg-slate-300 h-screen w-screen absolute z-10 bg-opacity-70 top-0 bottom-0 right-0 left-0 flex justify-center items-start pt-3.0">
          <Deletion actOn="User" title="Mr x" click={() => setInfoModal(false)} />
        </div>
      )}
    </div>
  );
}
