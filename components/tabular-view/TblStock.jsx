"use client";
import React from "react";
import { tHeadPermission } from "@/static-data/table-headers";
import { tDataPermissions } from "@/static-data/table-data";

export default function TblStock() {
  function editRolesArray() {}

  return (
    <div className="   sm:mx-2.0 mx-1.0 my-1.25 bg-wh border border-slate-400 rounded-md px-1.0">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slale-50">
              {tHeadPermission.map((itm, ind) => {
                return (
                  <th key={ind} className="capitalize">
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
                  className="text-center text-0.9/1.25 font-normal  capitalize border"
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
