"use client";
import React from "react";
import { tHeadPermission } from "@/static-data/table-headers";
import { tDataPermissions } from "@/static-data/table-data";

export default function TblPermission() {
  function editRolesArray() {}

  return (
    <div className="  my-1.25 bg-wh rounded-md border">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slale-100 mb-2">
              {tHeadPermission.map((itm, ind) => {
                return (
                  <th key={ind} className="capitalize py-0.25 ">
                    {itm}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {tDataPermissions.map((item, ind) => {
              return (
                <tr
                  key={ind}
                   
                  className="mb-1 text-center font-normal capitalize border hover:bg-slate-300 rounded-md"
                >
                  <td className="capitalize py-0.25">
                    {item.replace("_", " ")}
                  </td>
                  {/* create */}
                  <td>
                    <input
                      type="checkbox"
                      checked={false}
                      onChange={(e) => editRolesArray(e.target.value)}
                    />
                  </td>
                  {/* edit */}
                  <td>
                    <input
                      type="checkbox"
                      checked={false}
                      onChange={(e) => editRolesArray(e.target.value)}
                    />
                  </td>
                  {/* view */}
                  <td>
                    <input
                      type="checkbox"
                      checked={false}
                      onChange={(e) => editRolesArray(e.target.value)}
                    />
                  </td>
                  {/*  delete */}
                  <td>
                    <input
                      type="checkbox"
                      checked={false}
                      onChange={(e) => editRolesArray(e.target.value)}
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
