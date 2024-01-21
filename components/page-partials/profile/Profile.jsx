"use client";
import CustomButton from "@/components/ui-custom/CustomButton";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentSubTab,
  setCurrentTab,
  setTab,
} from "@/redux/slices/Profile";
import { tabMap } from "@/static-data/profile-page-tabs";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import CustomInput from "@/components/ui-custom/CustomInput";

export default function Profile() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.profile.currentTab);
  const currentSubTab = useSelector((state) => state.profile.currentSubTab);

  const stylActSubTab = (tabText) =>
    currentSubTab === tabText
      ? " border border-tl-5   "
      : "   ";
  const stylActTab = (tabText) =>
    currentTab === tabText ? " border border-tl-5" : "  ";

  return (
    <div className=" flex flex-col gap-1.5 p-0.75 overflow-y-scroll">
      {/* <span>{JSON.stringify(tabMap[currentTab])}</span> */}
      <div className="shadow rounded-md bg-deep-3">
        <div className="flex gap-2  shadow rounded p-0.5 font-sans ">
          {Object.keys(tabMap).map((tab) => {
            return (
              <CustomButton
                afterClick={() => dispatch(setCurrentTab({ currentTab: tab }))}
                txt={tab}
                style={` bg-tl1 shadow-sm ${stylActTab(
                  tab
                )} px-1 rounded-md py-0.12 text-base`}
              />
            );
          })}
        </div>
        <div className="flex py-0.38 gap-2 justify-center px-0.5 shadow bg-tl1 rounded-md">
          {tabMap[currentTab].map((tab) => {
            return (
              <CustomButton
                txt={tab}
                afterClick={() =>
                  dispatch(setCurrentSubTab({ currentSubTab: tab }))
                }
                style={`bg-deep-0 px-0.5 rounded-md py-0.12 text-sm ${stylActSubTab(
                  tab
                )}`}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-1.0  p-1.5  bg-deep-3 rounded-md">
        <EnhancedText kind={"two"}>Seller Account</EnhancedText>

        <div className="flex flex-col gap-2 px-2 w-3/4">
          <div className="grid grid-cols-7 items-center rounded-md border border-slate-300">
            <span className="col-span-2 ps-2">Seller ID</span>
            <input type="text" className="col-span-5 py-0.25 rounded-r-md" />
          </div>
          <div className="grid grid-cols-7 items-center rounded-md border border-slate-300">
            <span className="col-span-2 ps-2">First and Last Name</span>
            <input type="text" className="col-span-5 py-0.25 rounded-r-md" />
          </div>
          <div className="grid grid-cols-7 items-center rounded-md border border-slate-300">
            <span className="col-span-2 ps-2 ">Contact Email address</span>
            <input type="text" className="col-span-5 py-0.25 rounded-r-md" />
          </div>
          <div className="grid grid-cols-7 items-center rounded-md border border-slate-300">
            <span className="col-span-2 ps-2">Phone Number</span>
            <input type="text" className="col-span-5 py-0.25 rounded-r-md" />
          </div>
          <div className="grid grid-cols-7 items-center rounded-md border border-slate-300">
            <span className="col-span-2 ps-2">Display /Shop Name</span>
            <input type="text" className="col-span-5 py-0.25 rounded-r-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
