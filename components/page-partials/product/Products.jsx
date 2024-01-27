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
import {
  CheckCheck,
  ChevronsRight,
  Circle,
  ImagePlus,
  Info,
  InfoIcon,
  List,
  Trash2,
  Video,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { categories, subCategories } from "@/static-data/product-categories";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { products } from "@/static-data/products";
import Modal from "@/components/ui-custom/Modal";

//
export default function Products({ actOn, useForEdit }) {
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.profile.currentTab);
  const currentSubTab = useSelector((state) => state.profile.currentSubTab);

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
    prodTypes[txt] ? "bg-pr/400 text-wh" : " bg-wh text-blck";
  let resetProdTypes = {
    Online: false,
    "In Progress": false,
    Offline: false,
  };
  const [prodTypes, setActiveProdType] = useState({
    Online: true,
    "In Progress": false,
    Offline: false,
  });

  const iconProdTypes = {
    Online: <Circle className="bg-green-500 text-wh w-4 h-4 rounded-full" />,
    "In Progress": (
      <Circle className="bg-neutral-500 w-4 h-4 text-wh rounded-full" />
    ),
    Offline: <Circle className="bg-orange-900 text-wh w-4 h-4 rounded-full" />,
  };

  const [filteredProducts, setProducts] = useState([]);

  useEffect(() => {
    let data = products.filter((item) => prodTypes[item.status] == true);
    setProducts(data);
  }, [prodTypes]);

  const [imgModalShowing, setImgModal] = useState(false);

  const [modalImage, setModalImage] = useState(null);
  function hideImageModal() {
    setImgModal(false);
  }

  function showImageModal(id) {
    setModalImage(id);
    setImgModal(true);
  }

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
          Products Management
        </EnhancedText>

        <div className="w-[100%] lg:w-[100%] xl:w-[90%] 2xl:w-[80%] flex flex-col gap-1.0 px-2">
          <div className="flex sm:flex-row flex-col gap-0.5 sm:items-center items-start justify-start   font-sans  sm:max-h-[28px]">
            {Object.keys(prodTypes).map((item) => {
              return (
                <button
                  className={`w-[200px] flex gap-2 justify-start  rounded-md font-sans h-full border border-slate-300 text-pr/600 ${active_sty(
                    item
                  )} text-0.75/1  px-0.5 py-0.25`}
                  onClick={() =>
                    setActiveProdType({ ...resetProdTypes, [item]: true })
                  }
                >
                  {iconProdTypes[item]}
                  <span className="flex-grow text-center"> {item}</span>
                </button>
              );
            })}
          </div>

          <div class="flex w-full  flex-col gap-0.5 max-h-[360px]  ">
            {prodTypes["Online"] && (
              <div className="flex flex-col min-w-[250px] items-start justify-between px-2 py-1 shadow shadow-orange-300 w-fit rounded-md">
                <p className="flex gap-1 items-center justify-start  ">
                  <List className="w-5 h-5 text-red-900" />
                  <span className="flex-grow text-center font-medium font-inter text-base">
                    Selling Items ({filteredProducts.length})
                  </span>
                </p>
                <span className=" font-inter text-sm text-slate-600">
                  View all your actively selling products
                </span>
              </div>
            )}
            {prodTypes["In Progress"] && (
              <div className="flex flex-col items-start min-w-[250px] justify-between px-2 py-1 shadow shadow-orange-300 w-fit rounded-md">
                <p className="flex gap-1 items-center justify-start  ">
                  <List className="w-5 h-5 text-red-900" />
                  <span className="font-medium font-inter text-base">
                    In Progress Items ({filteredProducts.length})
                  </span>
                </p>
                <span className=" font-inter text-sm text-slate-600">
                  View all your planned products
                </span>
              </div>
            )}

            {prodTypes["Offline"] && (
              <div className="flex flex-col items-start min-w-[250px] px-2 py-1 shadow shadow-orange-300 w-fit rounded-md">
                <p className="flex gap-1 items-center justify-start  ">
                  <Trash2 className="w-5 h-5 text-red-900" />
                  <span className="font-medium font-inter text-base">
                    Deleted Items ({filteredProducts.length})
                  </span>
                </p>
                <span className=" font-inter text-sm text-slate-600">
                  Products deleted by me
                </span>
              </div>
            )}

            <div class="inline-block w-full h-full  ">
              <div class=" max-w-full h-full overflow-x-scroll    ">
                <table class=" relative  w-auto max-w-full overflow-y-scroll  text-left text-sm font-light     ">
                  <thead class="sticky top-0 z-10 border-b bg-slate-100 rounded-md font-medium border-neutral-500">
                    <tr className="">
                      <th
                        scope="col"
                        class="px-6 py-2 text-center min-w-[300px] "
                      >
                        {tblHeaderProducts[0]}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-2 text-center min-w-[160px] "
                      >
                        {tblHeaderProducts[1]}
                      </th>
                      <th scope="col" class="px-6 py-2 text-center w-[120px]">
                        {tblHeaderProducts[2]}
                      </th>
                      <th scope="col" class="px-6 py-2 text-center w-[120px]">
                        {tblHeaderProducts[3]}
                      </th>
                      <th scope="col" class="px-6 py-2 text-center w-[120px]">
                        {tblHeaderProducts[4]}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          imgModalShowing ? "nav_drop_down  w-[170px] h-[220px]" : `hidden`
        }
      >
        <Modal imgId={modalImage} close={() => setImgModal(false)} />
      </div>
    </div>
  );
}
