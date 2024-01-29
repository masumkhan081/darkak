"use client";
import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import DropDown from "@/components/ui-custom/DropDown";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import productGroups from "@/static-data/product-groups";
import { warrantyDurations, warrantyTypes } from "@/static-data/warrenties";
import { colorList, sizeList } from "@/static-data/product-variants";
import { tblHeaderProducts } from "@/static-data/table-headers";
import { Circle, InfoIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { categories, subCategories } from "@/static-data/product-categories";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { products } from "@/static-data/products";
import { userRoles } from "@/static-data/users";
import Modal from "@/components/ui-custom/Modal";
import TblUsers from "../tabular-view/TblUsers";
import TblUserRole from "../tabular-view/TblUserRole";


//
export default function Users({ actOn, useForEdit }) {
  // const dispatch = useDispatch();
  // const currentTab = useSelector((state) => state.profile.currentTab);
  // const currentSubTab = useSelector((state) => state.profile.currentSubTab);

  const isSideNavFolded = useSelector((state) => state.navView.isSideNavFolded);
  const isSideNavVisible = useSelector(
    (state) => state.navView.isSideNavVisible
  );
  const getRightSideWidth = () =>
    isSideNavVisible
      ? isSideNavFolded
        ? "w-[95vw] "
        : "w-[80vw]"
      : "w-[100vw]";

  const active_sty = (txt) =>
    usersTab[txt] ? "bg-pr/400 text-wh" : " bg-wh text-blck";
  let resetPageTabs = {
    "Manage Users": false,
    "Manage Roles": false,
  };
  const [usersTab, setUsersTab] = useState({
    "Manage Users": true,
    "Manage Roles": false,
  });

  const [filteredProducts, setProducts] = useState([]);

  const initSelection = {
    id: null,
    title: "",
  };

  const [selectedRole, setSelectedRole] = useState(initSelection);

  useEffect(() => {
    let data = products.filter((item) => usersTab[item.status] == true);
    setProducts(data);
  }, [usersTab]);

  //
  return (
    <div
      className={` ${getRightSideWidth()} p-1.0 bg-wh flex flex-col h-full gap-1.5  overflow-y-scroll  `}
    >
      {/* start --  products and stock */}
      <div className="border border-slate-300 rounded-md flex flex-col gap-1.5 ">
        <EnhancedText
          kind={"two"}
          color="text-pr/400 px-0.75 py-0.25   rounded-md  "
        >
          All Users
        </EnhancedText>

        <div className="w-[100%] lg:w-[100%] xl:w-[90%] 2xl:w-[80%] flex flex-col gap-1.0 px-2">
          <div className="flex sm:flex-row flex-col gap-0.5 sm:items-center items-start justify-start   font-sans  sm:max-h-[28px]">
            {Object.keys(usersTab).map((item) => {
              return (
                <button
                  className={`w-[200px] flex gap-2 justify-start  rounded-md font-sans h-full border border-slate-300 text-pr/600 ${active_sty(
                    item
                  )} text-0.75/1  px-0.5 py-0.25`}
                  onClick={() =>
                    setUsersTab({ ...resetPageTabs, [item]: true })
                  }
                >
                  <span className="flex-grow text-center"> {item}</span>
                </button>
              );
            })}
          </div>

          <div class="flex w-full  flex-col gap-0.5 max-h-[360px]  ">
            {usersTab["Manage Users"] && (
              <div className="min-w-[380px] flex gap-2 justify-start px-1 font-sans  max-h-[28px]">
                <div className="min-w-[160px] font-inter ">
                  <CustomSelect
                    label={"Select Role"}
                    value={selectedRole}
                    options={userRoles}
                    onChange={(value) => setSelectedRole(value)}
                  />
                </div>
                <div className="min-w-12.0 font-inter ">
                  <CustomInput
                    label={"Email"}
                    lblstyle="bg-slate-100 h-full flex items-center pb-0.12 px-1 text-slate-600 text-sm font-inter rounded border-r border-slate-300 "
                  />
                </div>
                <div className="min-w-10.0 text-sm ">
                  <CustomInput
                    label={"Name"}
                    lblstyle="bg-slate-100 h-full  flex items-center pb-0.12 px-1 text-slate-600 text-sm font-inter rounded border-r border-slate-300 "
                  />
                </div>
                <div className="max-w-8.0">
                  <CustomButton
                    txt={"Search"}
                    style={
                      "bg-pr/600 rounded-md h-full border text-slate-200 border-pr/400 text-sm font-inter  px-0.5 py-0.12"
                    }
                  />
                </div>
              </div>
            )}

            <div class="inline-block w-full h-full  ">
              
                {usersTab["Manage Users"] && <TblUsers />}
                {usersTab["Manage Roles"] && <TblUserRole/>}
              
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={
          imgModalShowing ? "nav_drop_down  w-[170px] h-[220px]" : `hidden`
        }
      >
        <Modal imgId={modalImage} close={() => setImgModal(false)} />
      </div> */}
    </div>
  );
}
