"use client";
import CustomButton from "@/components/ui-custom/CustomButton";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSubTab, setCurrentTab } from "@/redux/slices/Profile";
import { tabsProfile } from "@/static-data/tabs-page";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import CustomInput from "@/components/ui-custom/CustomInput";
import SellerAccount from "./SellerAccount";
import BusinessInfo from "./BusinessInfo";
import PaymentAcc from "./PaymentAcc";
import WarehouseAdd from "./WarehouseAdd";

export default function Profile() {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.profile.currentTab);
  const currentSubTab = useSelector((state) => state.profile.currentSubTab);

  const stylActSubTab = (tabText) =>
    currentSubTab === tabText ? " border border-tl3   " : "   ";
  const stylActTab = (tabText) =>
    currentTab === tabText ? " border border-tl4" : "  ";

  const isSideNavFolded = useSelector((state) => state.navView.isSideNavFolded);
  const isSideNavVisible = useSelector(
    (state) => state.navView.isSideNavVisible
  );
  const getRightSideWidth = () =>
    isSideNavVisible
      ? isSideNavFolded
        ? "w-[95vw] "
        : "md:w-[80vw] w-[95vw]"
      : "w-[100vw]";

  return (
    <div
      className={` ${getRightSideWidth()} h-full flex flex-col gap-1.5 p-0.75 overflow-y-scroll  `}
    >
      {/* <span>{JSON.stringify(tabsProfile[currentTab])}</span> */}
      <div className="shadow rounded bg-tl-1    ">
        <div className="flex gap-2  shadow rounded p-0.5 font-sans overflow-x-auto">
          {Object.keys(tabsProfile).map((tab, ind) => {
            return (
              <CustomButton
                key={ind}
                afterClick={() => dispatch(setCurrentTab({ currentTab: tab }))}
                txt={tab}
                style={` shadow-sm ${stylActTab(
                  tab
                )} px-2 hover:border-b border-tl4 hover:rounded-none rounded py-0.12 text-blck text-base`}
              />
            );
          })}
        </div>
        {tabsProfile[currentTab]?.length>0 && <div className="flex py-0.38 gap-2 justify-center px-0.5 shadow bg-pantone1 rounded-md overflow-x-auto">
          {tabsProfile[currentTab].map((tab, ind) => {
            return (
              <CustomButton
                key={ind}
                txt={tab}
                afterClick={() =>
                  dispatch(setCurrentSubTab({ currentSubTab: tab }))
                }
                style={` px-0.5 hover:border-b hover:rounded-none border-tl4 rounded py-0.12 text-slate-800 text-sm ${stylActSubTab(
                  tab
                )}`}
              />
            );
          })}
        </div>}
      </div>

      <div className="flex flex-col gap-1.0  p-1.5  bg-deep-3 rounded-md  ">
        <EnhancedText kind={"two"}>{currentSubTab}</EnhancedText>
        {currentSubTab == "Seller Account" && <SellerAccount />}
        {currentSubTab == "Business Information" && <BusinessInfo />}
        {currentSubTab == "Payment Account" && <PaymentAcc />}
        {currentSubTab == "Warehouse & Return Address" && <WarehouseAdd />}
      </div>
    </div>
  );
}
