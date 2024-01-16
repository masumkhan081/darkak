"use client";

import CustomButton from "@/components/ui-custom/CustomButton";
import CustomInput from "@/components/ui-custom/CustomInput";
import CustomSelect from "@/components/ui-custom/CustomSelect";
import DropDown from "@/components/ui-custom/DropDown";
import EnhancedText from "@/components/ui-custom/EnhancedText";
import productGroups from "@/static-data/product-groups";
import warrenties from "@/static-data/warrenties";
import { CheckCheck, ChevronsRight, ImageMinus, ImagePlus } from "lucide-react";
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

  return (
    <div className=" p-1.0 bg-wh flex flex-col gap-3">
      <div className="border border-slate-300 rounded-md ">
        <EnhancedText
          kind={"two"}
          color="text-pr/400 px-0.75 py-0.12 bg-slate-200 rounded-md  "
        >
          Product Information
        </EnhancedText>

        <div className="flex flex-col gap-3 p-1.0">
          <div className="flex flex-col gap-2 w-2/3">
            <span className="text-pr/600">Product Name</span>
            <CustomInput label="English" ph="" />
            <CustomInput label="Bengali" ph="" />
          </div>

          <div className="flex justify-between w-2/3 items-center border border-slate-300 py-0.25 px-1 rounded-md">
            <EnhancedText
              kind={"five"}
              color="font-inter text-0.75/1 font-semibold text-pr/600 uppercase"
            >
              Select
            </EnhancedText>
            <DropDown
              onChange={(selected) => {
                setCat(selected);
              }}
              value={selectedCat}
              options={categories}
              ph={"category"}
            />
            <ChevronsRight className="bg-slate-200 rounded-full p-0.12 w-5 h-5" />
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
      </div>
      {/* start --  images and video */}
      <div className="border border-slate-300 rounded-md ">
        <EnhancedText
          kind={"two"}
          color="text-pr/400 px-0.75 py-0.12 bg-slate-200 rounded-md  "
        >
          Product Images & Video
        </EnhancedText>

        <div className="flex flex-col gap-3 p-1.0">
          <span>
            Product Images <span className="mx-1 text-red-600">*</span>
          </span>
          <div className="flex gap-3 ">
            {Object.keys(images).map((item) => {
              return (
                <div>
                  <label
                    htmlFor={item}
                    className="relative w-3.5 h-3.5 rounded-md"
                  >{images.item}
                    <Image
                      src={images.item}
                      className=" rounded-md w-3.5 h-3.5 border border-pr/400"
                    />
                    {!images.item && (
                      <ImagePlus className="absolute top-1.0 w-7 h-7 " />
                    )}
                  </label>
                  <input
                    id={item}
                    name={item}
                    className="hidden border border-red-400"
                    onChange={(e) => {
                      let files = e.target.files;
                      let reader = new FileReader();
                      reader.onload = (r) => {
                        setImages({ ...images, item: r.target.result });
                      };
                      reader.readAsDataURL(files[0]);
                    }}
                    type="file"
                    accept="image/*"
                  ></input>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* end --  images and video */}
      <div className="border border-slate-300 rounded-md ">
        <EnhancedText
          kind={"two"}
          color="text-pr/400 px-0.75 py-0.12 bg-slate-200 rounded-md  "
        >
          Product Images & Video
        </EnhancedText>

        <div className="flex flex-col gap-3 p-1.0">
          <div className="flex flex-col gap-2 w-2/3">
            <span className="text-pr/600">Product Name</span>
            <CustomInput label="English" ph="" />
            <CustomInput label="Bengali" ph="" />
          </div>

          <div className="flex gap-3 items-center">
            <EnhancedText
              kind={"five"}
              color="font-inter text-0.75/1 font-semibold text-pr/600 uppercase"
            >
              Select
            </EnhancedText>
            <DropDown
              onChange={(selected) => {
                setCat(selected);
              }}
              value={selectedCat}
              options={categories}
              ph={"category"}
            />
            <ChevronsRight className="bg-slate-100 rounded-full p-0.12 w-5 h-5" />
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
      </div>
      <div className="border border-slate-300 rounded-md ">
        <EnhancedText
          kind={"two"}
          color="text-pr/400 px-0.75 py-0.12 bg-slate-200 rounded-md  "
        >
          Product Images & Video
        </EnhancedText>

        <div className="flex flex-col gap-3 p-1.0">
          <div className="flex flex-col gap-2 w-2/3">
            <span className="text-pr/600">Product Name</span>
            <CustomInput label="English" ph="" />
            <CustomInput label="Bengali" ph="" />
          </div>

          <div className="flex gap-3 items-center">
            <EnhancedText
              kind={"five"}
              color="font-inter text-0.75/1 font-semibold text-pr/600 uppercase"
            >
              Select
            </EnhancedText>
            <DropDown
              onChange={(selected) => {
                setCat(selected);
              }}
              value={selectedCat}
              options={categories}
              ph={"category"}
            />
            <ChevronsRight className="bg-slate-100 rounded-full p-0.12 w-5 h-5" />
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
      </div>
      <div className="border border-slate-300 rounded-md ">
        <EnhancedText
          kind={"two"}
          color="text-pr/400 px-0.75 py-0.12 bg-slate-200 rounded-md  "
        >
          Service & Warranty
        </EnhancedText>

        <div className="flex flex-col gap-3 p-1.0">
          <div className="flex flex-col gap-2 w-2/3">
            <span className="text-pr/600">Product Name</span>
            <CustomInput label="English" ph="" />
            <CustomInput label="Bengali" ph="" />
          </div>

          <div className="flex gap-3 items-center">
            <EnhancedText
              kind={"five"}
              color="font-inter text-0.75/1 font-semibold text-pr/600 uppercase"
            >
              Select
            </EnhancedText>
            <DropDown
              onChange={(selected) => {
                setCat(selected);
              }}
              value={selectedCat}
              options={categories}
              ph={"category"}
            />
            <ChevronsRight className="bg-slate-100 rounded-full p-0.12 w-5 h-5" />
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
      </div>
      <form className="flex flex-col gap-4 text-sm my-4">
        <CustomSelect
          label="Search and select product model"
          options={productGroups}
        />

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>Product Name</label>
            <CustomInput
              type={"text"}
              ph={"Enter product name"}
              required={true}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Stock Notify</label>

            <CustomInput type={"number"} required={true} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-1.5">
          <div className="flex flex-col gap-2">
            <label>warranty</label>
            <CustomSelect
              label={"Enter warranty duration"}
              options={warrenties}
            />
          </div>
          <div className="  flex flex-col gap-2">
            <label>Sale Price</label>
            <CustomInput type={"number"} required={true} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            rows={4}
            placeholder={"Enter details"}
            className="px-0.5 py-0.38 border rounded-md"
          />
        </div>

        <CustomButton
          startIcon={<CheckCheck className="w-4 h-4 mr-1" />}
          txt={"Submit"}
          style="bg-blue-900 text-wh px-0.75 text-sm font-semibold  py-0.25 rounded-md w-fit "
        />
      </form>
    </div>
  );
}
