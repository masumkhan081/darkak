import React, { useEffect, useState } from "react";
import SelectionWithMark from "../ui-custom/SelectionWithMark";
import {
  divisions,
  citiesByDivision,
  cities,
  postCodes,
  countries,
} from "@/static-data/cities";
export default function BusinessInfo() {
  const initSelection = {
    id: null,
    title: "",
  };
  const [selectedDivision, setDivision] = useState(initSelection);
  const [selectedCity, setCity] = useState(initSelection);
  const [selectedNIDCity, setNIDCity] = useState(initSelection);
  const [selectedPostCode, setPostCode] = useState(initSelection);
  const [selectedCountry, setCountry] = useState(initSelection);
  const [selectedIdType, setIdType] = useState(initSelection);
  //
  const [legalName, setLegalName] = useState("");
  const [address, setAddress] = useState("");
  const [legalForm, setLegalForm] = useState("");
  const [sellerId, setSellerId] = useState("DSCFDD45");
  const [inChargeName, setInChargeName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [idCardNumber, setIdCardNumber] = useState("");
  const idTypes = [{ id: null, title: "NID" }];

  useEffect(() => {
    setPostCode(initSelection);
  }, [selectedNIDCity]);
  useEffect(() => {
    setNIDCity(initSelection);
  }, [selectedDivision]);

  return (
    <div className="flex flex-col gap-[4vh] px-2  md:text-sm text-xl ">
      <div className="div_span12_fieldgroup   ">
        <span className="lbl_span3">Legal Name / Business Owner</span>
        <input
          type="text"
          value={legalName}
          onChange={(e) => setLegalName(e.target.value)}
          className={
            legalName ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
        />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Legal Form</span>
        <input
          type="text"
          value={legalForm}
          onChange={(e) => setLegalForm(e.target.value)}
          className={
            legalForm ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
        />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">Address</span>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={
            address ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
        />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">City/Town</span>
        <div className="col-span-6 h-full">
          <SelectionWithMark
            value={selectedCity}
            options={cities}
            w="w-full"
            onChange={(value) => setCity({ id: value.id, title: value.title })}
          />
        </div>
      </div>

      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">Country</span>
        <div className="col-span-6 h-full">
          <SelectionWithMark
            value={selectedCountry}
            options={countries}
            w="w-full"
            onChange={(value) =>
              setCountry({ id: value.id, title: value.title })
            }
          />
        </div>
      </div>

      <div className="div_span12_fieldgroup   ">
        <span className="lbl_span3">Person in Charge Name</span>
        <input
          type="text"
          value={inChargeName}
          onChange={(e) => setInChargeName(e.target.value)}
          className={
            inChargeName
              ? " txt_span6   border-tl-2  "
              : " txt_span6 border-tl-1"
          }
        />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Business Registration Number</span>
        <input
          type="text"
          value={regNumber}
          onChange={(e) => setRegNumber(e.target.value)}
          className={
            regNumber ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
        />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">ID Type</span>
        <div className="col-span-6 h-full   ">
          <SelectionWithMark
            value={selectedIdType}
            options={idTypes}
            w="w-full"
            onChange={(value) =>
              setIdType({ id: value.id, title: value.title })
            }
          />
        </div>
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">National Identity Card No.</span>
        <input type="text"  value={idCardNumber}
          onChange={(e) => setIdCardNumber(e.target.value)}
          className={
            idCardNumber ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          } />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">
          Upload ID <span className="text-slate-600 ms-2"> Front Side</span>
        </span>
        <input type="file" className="txt_span6" />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">
          Upload ID <span className="text-slate-600 ms-2"> Back Side</span>{" "}
        </span>
        <input type="file" className="txt_span6" />
      </div>

      <div className="div_span12_fieldgroup  ">
        <span className="lbl_span3">Division</span>
        <div className="col-span-6 h-full   ">
          <SelectionWithMark
            value={selectedDivision}
            options={divisions}
            w="w-full"
            onChange={(value) =>
              setDivision({ id: value.id, title: value.title })
            }
          />
        </div>
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3 ">City</span>
        <div className="col-span-6 h-full">
          <SelectionWithMark
            value={selectedNIDCity}
            options={citiesByDivision[selectedDivision.title]}
            w="w-full"
            onChange={(value) =>
              setNIDCity({ id: value.id, title: value.title })
            }
          />
        </div>
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Postcode</span>
        <div className="col-span-6 h-full">
          <SelectionWithMark
            value={selectedPostCode}
            options={postCodes[selectedNIDCity.title]}
            w="w-full"
            onChange={(value) =>
              setPostCode({ id: value.id, title: value.title })
            }
          />
        </div>
      </div>
    </div>
  );
}
