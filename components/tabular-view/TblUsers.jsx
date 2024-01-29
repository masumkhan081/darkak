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
    <div class=" max-w-full h-full overflow-x-scroll  ">
      <table class=" relative  w-auto max-w-full overflow-y-scroll  text-left text-sm font-light     ">
        <thead class="sticky top-0 z-10 border-b bg-slate-100 rounded-md font-medium border-neutral-500">
          <tr className="">
            <th scope="col" class="px-6 py-2 text-center min-w-[300px] ">
              {tHeadUser[0]}
            </th>
            <th scope="col" class="px-6 py-2 text-center min-w-[160px] ">
              {tHeadUser[1]}
            </th>
            <th scope="col" class="px-6 py-2 text-center w-[120px]">
              {tHeadUser[2]}
            </th>
            <th scope="col" class="px-6 py-2 text-center w-[120px]">
              {tHeadUser[3]}
            </th>
            <th scope="col" class="px-6 py-2 text-center w-[120px]">
              {tHeadUser[4]}
            </th>
          </tr>
        </thead>
        <tbody className="border-t  border-neutral-500">
          {filteredProducts.map((prdct, ind) => {
            return (
              <tr class="   " key={ind}>
                <td class="whitespace-pre-wrap px-4 py-1 font-bold  min-w-[300px] text-center  ">
                  <div className="flex gap-2 ">
                    <Image
                      onMouseOver={() => showImageModal(prdct.imgId)}
                      onMouseOut={() => hideImageModal()}
                      src={prdct.image}
                      width={60}
                      height={100}
                      className=" "
                    />
                    <p className="flex flex-col gap-2 items-start">
                      <span className="font-medium whitespace-pre-wrap text-start">
                        {" "}
                        {prdct.pn}
                      </span>
                      <span className="text-sm  font-normal text-slate-500">
                        {prdct.id}
                      </span>
                    </p>
                  </div>
                </td>
                <td class=" text-center px-4 py-1 min-w-[160px]  ">
                  {prdct.ln}
                </td>

                <td class="text-center px-4 py-1 max-w-[120px]  ">
                  {prdct.price}
                </td>
                <td class="text-center px-4 py-1 max-w-[120px]">
                  {prdct.stock}
                </td>
                <td class="text-center px-4 py-1 max-w-[120px]">
                  <CustomButton
                    startIcon={
                      <InfoIcon className="  w-6 h-6 text-slate-600  " />
                    }
                    style="w-full flex justify-center items-center  "
                  ></CustomButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {deleteModal == true && (
        <div className="bg-slate-300 h-screen w-screen absolute z-10 bg-opacity-70 top-0 bottom-0 right-0 left-0 flex justify-center items-start pt-3.0">
          <Deletion actOn="User" title="Mr x" click={() => setModal(false)} />
        </div>
      )}
      {infoModal == true && (
        <div className="bg-slate-300 h-screen w-screen absolute z-10 bg-opacity-70 top-0 bottom-0 right-0 left-0 flex justify-center items-start pt-3.0">
          <Deletion
            actOn="User"
            title="Mr x"
            click={() => setInfoModal(false)}
          />
        </div>
      )}
    </div>
  );
}
