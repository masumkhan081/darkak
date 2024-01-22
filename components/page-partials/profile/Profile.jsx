"use client";
import CustomButton from "@/components/ui-custom/CustomButton";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentSubTab,
  setCurrentTab,
  setTab,
} from "@/redux/slices/Profile";
import { tabMap } from "@/static-data/tabs-profile-page";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import CustomInput from "@/components/ui-custom/CustomInput";
import SellerAccount from "./SellerAccount";
import BusinessInfo from "./BusinessInfo";
import PaymentAcc from "./PaymentAcc";
import WarehouseAdd from "./WarehouseAdd";
import ReturnAdd from "./ReturnAdd";

export default function Profile() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.profile.currentTab);
  const currentSubTab = useSelector((state) => state.profile.currentSubTab);

  const stylActSubTab = (tabText) =>
    currentSubTab === tabText ? " border border-tl-5   " : "   ";
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
        <EnhancedText kind={"two"}>{currentSubTab}</EnhancedText>
        {currentSubTab == "Seller Account" && <SellerAccount />}
        {currentSubTab == "Business Information" && <BusinessInfo />}
        {currentSubTab == "Payment Account" && <PaymentAcc />}
        {currentSubTab == "Warehouse Address" && <WarehouseAdd />}
        {currentSubTab == "Return Address" && <ReturnAdd />}
      </div>
    </div>
  );
}
