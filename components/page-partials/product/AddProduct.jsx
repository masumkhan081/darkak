"use client";

import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import DropDown from "@/components/ui-custom/DropDown";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import productGroups from "@/static-data/product-groups";
import { warrantyDurations, warrantyTypes } from "@/static-data/warrenties";
import { colorList, sizeList } from "@/static-data/product-variants";
import { tblHeaderVariants } from "@/static-data/table-headers";
import {
  CheckCheck,
  ChevronsRight,
  Delete,
  Edit,
  ImageMinus,
  ImagePlus,
  Info,
  InfoIcon,
  Plus,
  Video,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { categories, subCategories } from "@/static-data/product-categories";
import Image from "next/image";

export default function AddProduct({ actOn, useForEdit }) {
  const initSelect = {
    id: null,
    title: "",
  };
  const [selectedCat, setCat] = useState(initSelect);
  const [selectedSubCat, setSubCat] = useState(initSelect);
  const [selectedWarranty, setSelectedWarranty] = useState(initSelect);
  const [warrantyDuration, setWarrantyDuration] = useState(initSelect);
  const [images, setImages] = useState({
    "Cover Photo": "",
    "Image 2": "",
    "Image 3": "",
    "Image 4": "",
    "Image 5": "",
    "Image 6": "",
    "Image 7": "",
    "Image 8": "",
  });

  const onImageChange = (event, key) => {
    setImages({
      ...images,
      [key]: URL.createObjectURL(event.target.files[0]),
    });
  };

  const [isVideoTypeLocal, setVideoType] = useState(false);
  const [ytVideoURL, setYtUrl] = useState("");
  const [ytVideo, setYtVideo] = useState("");

  const initVariant = {
    color: initSelect,
    size: initSelect,
    price: "",
    quantity: "",
  };
  const [variants, setVariants] = useState([
    initVariant,
    initVariant,
    initVariant,
  ]);

  function removeOne(index) {
    setVariants([
      ...variants.slice(0, index - 1),
      ...variants.slice(index, variants.length),
    ]);
  }

  function handleInput({ selected, key, index }) {
    setVariants([
      ...variants.slice(0, index - 1),
      updatedOne,
      ...variants.slice(index, variants.length),
    ]);
  }

  return (
    <div className=" p-1.0 bg-wh flex flex-col gap-3">
      {/* start --  variants and stock */}
      <div className="border border-slate-300 rounded-md flex flex-col gap-1.5 ">
        <EnhancedText
          kind={"two"}
          color="text-pr/400 px-0.75 py-0.12 bg-slate-200 rounded-md  "
        >
          Variants And Stock
        </EnhancedText>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-start px-1 font-sans  max-h-[28px]">
            <div className="w-10.0 font-inter ">
              <CustomInput
                label={"Quantity"}
                lblstyle="bg-pr/400 h-full pb-0.12 px-1 text-slate-100 rounded border-r border-slate-300 "
              />
            </div>
            <div className="w-10.0 text-sm ">
              <CustomInput
                label={"Price"}
                lblstyle="bg-pr/400 h-full pb-0.12 px-1 text-slate-100 rounded border-r border-slate-300 "
              />
            </div>
            <div className="max-w-8.0">
              <CustomButton
                txt={"Apply To All"}
                style={
                  "bg-wh rounded-md h-full border text-pr/600 border-pr/400 text-sm font-inter 0.75/1  px-0.5 py-0.12"
                }
              />
            </div>
          </div>

          <div className=" w-full  border rounded-md border-slate-200 px-1 overflow-y-scroll max-h-[16rem] min-h-[15rem]">
            <table className=" w-full h-full relative ">
              <thead className="w-full sticky top-0 z-10 rounded-md">
                <tr className="tr_thead rounded-md ">
                  <th className="th bg-pr/400 drop-shadow text-wh text-base rounded-l-full">
                    {tblHeaderVariants[0]}
                  </th>
                  <th className="th bg-pr/400 drop-shadow-md text-wh w-9.0 text-base">
                    {tblHeaderVariants[1]}
                  </th>
                  <th className="th bg-pr/400 drop-shadow text-wh w-9.0 text-base">
                    {tblHeaderVariants[2]}
                  </th>
                  <th className="th bg-pr/400 drop-shadow text-wh w-8.0 text-base">
                    {tblHeaderVariants[3]}
                  </th>
                  <th className="th bg-pr/400 drop-shadow text-wh w-8.0 text-base">
                    {tblHeaderVariants[4]}
                  </th>
                  <th className="th bg-pr/400 drop-shadow text-wh w-8.0 text-base rounded-r-full">
                    {tblHeaderVariants[5]}
                  </th>
                </tr>
              </thead>

              <tbody className="w-full bg-wh py-1">
                {variants.map((variant, ind) => {
                  return (
                    <tr className="tr_tbody h-[28px]">
                      <td className="td w-5.0 max-w-5.0  ">
                        <p className="border bg-pr/400 text-slate-200  font-bold h-full rounded-md flex justify-center items-center">
                          {ind + 1}
                        </p>
                      </td>
                      <td className="td">
                        <CustomSelect
                          onChange={(selected) =>
                            handleInput({ selected, key: "color", index: ind })
                          }
                          options={colorList}
                          w="w-8.0"
                          value={initSelect}
                        />
                      </td>
                      <td className="td">
                        <CustomSelect options={sizeList} w="w-8.0" />
                      </td>
                      <td className="td  w-8.0">
                        <CustomInput />
                      </td>

                      <td className="td w-8.0 ">
                        <CustomInput />
                      </td>
                      <td className="td w-8.0">
                        <CustomButton
                          startIcon={
                            <X className="  w-6 h-6 text-slate-600  " />
                          }
                          style="w-8.0  "
                        ></CustomButton>
                      </td>
                    </tr>
                  );
                })}
                <tr className="mb-3">
                  <td className="w-5.0 max-w-5.0   ">
                    <CustomButton
                      style={
                        "w-full my-2 text-slate-200 rounded-md bg-pr/600 shadow shadow-pr/400 bg-gradient bg-gradient-to-b from-pr/400  px-1"
                      }
                      afterClick={() => {
                        setVariants([...variants, initVariant]);
                      }}
                      startIcon={
                        <Plus className="text-pr/600 p-0.12 w-8 h-8" />
                      }
                      txt={""}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* start ---- product basic info */}
      <div className="border border-slate-300 rounded-md ">
        <EnhancedText
          kind={"two"}
          color="text-pr/400 px-0.75 py-0.12 bg-slate-200 rounded-md  "
        >
          Product Information
        </EnhancedText>

        <div className="flex flex-col gap-1.0 px-1.0 py-1.5">
          <div className="flex flex-col gap-1 w-2/3">
            <span className="text-pr/600">
              Product Name<span className="mx-1 text-red-600">*</span>
            </span>
            <CustomInput ph="Enter product name" />
          </div>

          <div className="flex  gap-3 w-2/3 items-center border border-slate-300 py-0.25 px-1 rounded-md">
            <EnhancedText
              kind={"five"}
              color="font-inter text-0.75/1 font-semibold text-pr/600 uppercase"
            >
              Select
            </EnhancedText>
            <div className="flex-grow flex gap-3 justify-end items-center  ">
              <DropDown
                onChange={(selected) => {
                  setCat(selected);
                }}
                value={selectedCat}
                options={categories}
                ph={"category"}
              />
              <ChevronsRight className=" rounded-full p-0.12 w-5 h-5" />
              <DropDown
                onChange={(selected) => {
                  setSubCat(selected);
                }}
                value={selectedSubCat}
                options={subCategories}
                ph={"sub-category"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 w-2/3">
            <span className="text-pr/600">Brand Name</span>
            <CustomInput ph="Enter brand name" />
          </div>
          <div className="flex flex-col gap-1">
            <label>Description</label>
            <textarea
              rows={4}
              placeholder={"Enter details"}
              className="px-0.5 py-0.38 border rounded-md outline-pr/400"
            />
          </div>
        </div>
      </div>
      {/* start --  images and video */}
      <div className="border border-slate-300 rounded-md ">
        <EnhancedText
          kind={"two"}
          color="text-pr/400 px-0.75 py-0.12 bg-slate-200 rounded-md  "
        >
          Product Images & Video
        </EnhancedText>

        <div className="flex flex-col gap-1.5 px-1.0 py-1.5">
          {/* product images */}
          <div className="space-y-3">
            <p className="font-semibold text-base">
              Product Images <span className="mx-1 text-red-600">*</span>
            </p>
            <div className="flex   gap-1.0 ">
              {Object.keys(images).map((item) => {
                return (
                  <div className="flex flex-col gap-2 w-5.0 ">
                    <label
                      htmlFor={item}
                      className="relative w-5.0 h-4.0 rounded-md  "
                    >
                      <img
                        src={images[item]}
                        className=" rounded-md w-5.0 h-4.0 outline-2 outline-dotted outline-pr/400"
                      />
                      {images[item] == "" && (
                        <ImagePlus className="absolute left-0 top-0  w-7 h-7 bg-wh text-pr/400" />
                      )}
                    </label>
                    <p className="text-sm text-center  text-pr/400 font-semibold">
                      {item}
                      {item == "Cover Photo" && (
                        <span className="mx-1 text-red-600">*</span>
                      )}
                    </p>
                    <input
                      id={item}
                      name={item}
                      className="hidden border border-red-400"
                      onChange={(e) => onImageChange(e, item)}
                      type="file"
                      accept="image/*"
                    ></input>
                  </div>
                );
              })}
            </div>
          </div>

          {/* product videos */}
          <div className="space-y-3">
            <div className="flex gap-2.0">
              <p className="flex gap-1 items-center font-semibold text-base">
                <span className="mx-1 "> Video </span>
                <i title="Provide youtuve video link/ Upload short video">
                  <Info className="w-4 h-4 rounded-full" />
                </i>
              </p>

              <div className="flex gap-3">
                <div className="flex gap-1 items-center">
                  <input
                    id="videoRadioURL"
                    name="videoRadio"
                    type="radio"
                    checked={!isVideoTypeLocal}
                    onChange={(e) => setVideoType(!e.target.checked)}
                    Value="Upload Video URL"
                    className=""
                  />
                  <label htmlFor="videoRadioURL" className="text-sm font-sans">
                    Upload Video URL
                  </label>
                </div>
                <div className="flex gap-1 items-center">
                  <input
                    id="videoRadioLocal"
                    name="videoRadio"
                    type="radio"
                    onChange={(e) => setVideoType(e.target.checked)}
                    checked={isVideoTypeLocal}
                    Value="Upload Video Local"
                  />
                  <label
                    htmlFor="videoRadioLocal"
                    className="text-sm font-sans"
                  >
                    Upload Video Locally
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              {isVideoTypeLocal == false && (
                <CustomInput
                  ph="Enter youtube url"
                  value={ytVideoURL}
                  afterChange={(e) => setYtUrl(e.target.value)}
                />
              )}
              {isVideoTypeLocal && (
                <div className="flex flex-col gap-2 w-5.0 ">
                  <label
                    htmlFor={"ytVideo"}
                    className="relative w-5.0 h-4.0 rounded-md"
                  >
                    <img
                      src={ytVideo}
                      className=" rounded-md w-5.0 h-4.0 outline-2 outline-dotted outline-pr/400"
                    />
                    {ytVideo == "" && (
                      <Video className="absolute left-0 top-0  w-7 h-7 bg-wh text-pr/400" />
                    )}
                  </label>

                  <input
                    id={"ytVideo"}
                    name={"ytVideo"}
                    className="hidden border border-red-400"
                    onChange={(e) => {
                      setYtVideo(URL.createObjectURL(e.target.files[0]));
                    }}
                    type="file"
                    accept="image/*"
                  ></input>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* start - - warranty */}
      <div className="border border-slate-300 rounded-md ">
        <EnhancedText
          kind={"two"}
          color="text-pr/400 px-0.75 py-0.12 bg-slate-200 rounded-md  "
        >
          Service & Warranty
        </EnhancedText>

        <div className="flex flex-col gap-1.0 px-1.0 py-1.5">
          <div className="flex gap-1.0 items-center">
            <EnhancedText
              kind={"five"}
              color="font-inter text-0.75/1 font-semibold text-pr/600 uppercase"
            >
              Select
            </EnhancedText>
            <CustomSelect
              value={selectedWarranty}
              options={warrantyTypes}
              onChange={(selected) => {
                setSelectedWarranty(selected);
              }}
              label={"Warranty Type"}
            />
            <CustomSelect
              value={warrantyDuration}
              onChange={(selected) => {
                setWarrantyDuration(selected);
              }}
              label={"Warranty Duration"}
              options={warrantyDurations}
            />
          </div>
          <div className="w-full font-inter ">
            <CustomInput
              label={"Warranty Policy"}
              lblstyle="bg-slate-200 px-1 py-0.12 text-slate-600   border-r border-slate-400 "
            />
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-4 text-sm my-4">
        <CustomButton
          startIcon={<CheckCheck className="w-4 h-4 mr-1" />}
          txt={"Submit"}
          style="bg-blue-900 text-wh px-0.75 text-sm font-semibold  py-0.25 rounded-md w-fit "
        />
      </form>
    </div>
  );
}
