import SelectionWithMark from "@/components/ui-custom/SelectionWithMark";
import React, { useEffect, useState } from "react";
import EnhancedText from "../ui-custom/EnhancedText";
import {
  divisions,
  citiesByDivision,
  cities,
  postCodes,
  countries,
} from "@/static-data/cities";

export default function WarehouseAdd() {
  const [retAddAsWarehAdd, setRetAddAsWarehAdd] = useState(false);
  const initSelection = {
    id: null,
    title: "",
  };
  const [selectedDivision, setDivision] = useState(initSelection);
  const [selectedCity, setCity] = useState(initSelection);
  const [selectedPostCode, setPostCode] = useState(initSelection);
  const [selectedCountry, setCountry] = useState(initSelection);
  //
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  //
  const [fullName2, setFullName2] = useState("");
  const [address2, setAddress2] = useState("");
  const [contact2, setContact2] = useState("");
  //
  const [selectedDivision2, setDivision2] = useState(initSelection);
  const [selectedCity2, setCity2] = useState(initSelection);
  const [selectedPostCode2, setPostCode2] = useState(initSelection);
  const [selectedCountry2, setCountry2] = useState(initSelection);

  function handleCheck(e) {
    setRetAddAsWarehAdd(e.target.checked);
    if (e.target.checked) {
      setFullName2(fullName);
      setAddress2(address);
      setContact2(address);

      setDivision2(selectedDivision);
      setCity2(selectedCity);
      setPostCode2(setPostCode);
      setCountry2(setCountry);
    }
  }

  useEffect(() => {
    setPostCode(initSelection);
  }, [selectedCity]);
  useEffect(() => {
    setCity(initSelection);
  }, [selectedDivision]);
  useEffect(() => {
    setPostCode2(initSelection);
  }, [selectedCity2]);
  useEffect(() => {
    setCity2(initSelection);
  }, [selectedDivision2]);

  return (
    <div className="flex flex-col gap-[4vh] px-2 md:text-sm text-xl">
      <EnhancedText
        kind={"four"}
        color="text-slate-800 py-0.5 border-b border-slate-300 mb-2"
      >
        Warehouse Address
      </EnhancedText>
      <div className="div_span12_fieldgroup ">
        <span className="lbl_span3 md:text-base text-3xl">Full Name</span>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={
            fullName ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
        />
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Address</span>
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
        <span className="lbl_span3 ">Phone Number</span>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className={
            contact ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
          }
        />
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
            value={selectedCity}
            options={citiesByDivision[selectedDivision.title]}
            w="w-full"
            onChange={(value) => setCity({ id: value.id, title: value.title })}
          />
        </div>
      </div>
      <div className="div_span12_fieldgroup">
        <span className="lbl_span3">Postcode</span>
        <div className="col-span-6 h-full">
          <SelectionWithMark
            value={selectedPostCode}
            options={postCodes[selectedCity.title]}
            w="w-full"
            onChange={(value) =>
              setPostCode({ id: value.id, title: value.title })
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-[4vh]   ">
        <EnhancedText
          kind={"four"}
          color="text-slate-800 py-0.5 border-b border-slate-300 mb-2"
        >
          Return Address
        </EnhancedText>

        <div className="flex gap-2 items-center">
          <input
            checked={retAddAsWarehAdd}
            onChange={(e) => handleCheck(e)}
            type="checkbox"
            id="sameAsWarehouseAddress"
            name="sameAsWarehouseAddress"
            value="sameAsWarehouseAddress"
          />
          <label htmlFor="vehicle1"> Same as warehouse address</label>
        </div>

        <div className="div_span12_fieldgroup ">
          <span className="lbl_span3 md:text-base text-3xl">Full Name</span>
          <input
            type="text"
            value={fullName2}
            onChange={(e) => setFullName2(e.target.value)}
            className={
              fullName2
                ? " txt_span6   border-tl-2  "
                : " txt_span6 border-tl-1"
            }
          />
        </div>
        <div className="div_span12_fieldgroup">
          <span className="lbl_span3">Address</span>
          <input
            type="text"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            className={
              address2 ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
            }
          />
        </div>
        <div className="div_span12_fieldgroup">
          <span className="lbl_span3 ">Phone Number</span>
          <input
            type="text"
            value={contact2}
            onChange={(e) => setContact2(e.target.value)}
            className={
              contact2 ? " txt_span6   border-tl-2  " : " txt_span6 border-tl-1"
            }
          />
        </div>

        <div className="div_span12_fieldgroup">
          <span className="lbl_span3 ">Country</span>
          <div className="col-span-6 h-full">
            <SelectionWithMark
              value={selectedCountry2}
              options={countries}
              w="w-full"
              onChange={(value) =>
                setCountry2({ id: value.id, title: value.title })
              }
            />
          </div>
        </div>
        <div className="div_span12_fieldgroup  ">
          <span className="lbl_span3">Division</span>
          <div className="col-span-6 h-full   ">
            <SelectionWithMark
              value={selectedDivision2}
              options={divisions}
              w="w-full"
              onChange={(value) =>
                setDivision2({ id: value.id, title: value.title })
              }
            />
          </div>
        </div>
        <div className="div_span12_fieldgroup">
          <span className="lbl_span3 ">City</span>
          <div className="col-span-6 h-full">
            <SelectionWithMark
              value={selectedCity2}
              options={citiesByDivision[selectedDivision.title]}
              w="w-full"
              onChange={(value) =>
                setCity2({ id: value.id, title: value.title })
              }
            />
          </div>
        </div>
        <div className="div_span12_fieldgroup">
          <span className="lbl_span3">Postcode</span>
          <div className="col-span-6 h-full">
            <SelectionWithMark
              value={selectedPostCode2}
              options={postCodes[selectedCity.title]}
              w="w-full"
              onChange={(value) =>
                setPostCode2({ id: value.id, title: value.title })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
