"use client";
import React, { useState } from "react";
import CustomButton from "../ui-custom/CustomButton";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import brand from "../../public/nav/brand.png";
import { setSideNavFoldability, setExpansion } from "@/redux/slices/NavView";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import sidenav from "../../static-data/sidenav";
import Link from "next/link";

export default function SideNav() {
  const dispatch = useDispatch();
  const isSideNavFolded = useSelector((state) => state.navView.isSideNavFolded);
  const expansion = useSelector((state) => state.navView.expansion);
  const isSideNavVisible = useSelector(
    (state) => state.navView.isSideNavVisible
  );

  const cmn_icn_class = "w-7 h-7 rounded-full border border-red-400";
  const widthControl = () =>
    isSideNavFolded ? "w-4.0 flex flex-col justify-between gap-4 " : "w-16.0";
  const visibilityControl = () =>
    isSideNavVisible ? "block flex  flex-col justify-between  " : "hidden";

  const expansionStatus = (key) => (expansion[key] ? " block" : " hidden");

  const [topSpace, setTopSpace] = useState(0);

  const adjustTop = () => "top-[100px]";

  return (
    <div
      className={` ${widthControl()} ${visibilityControl()}  bg-tl1 w-[vw-20] h-[100vh] max-h-[100vh]  `}
    >
      <div className="  py-0.125 sm:flex hidden  rounded-sm  w-full  justify-center items-center h-[10vh] ">
        {/* <Image src={brand} className="w-7.0 h-4.0  overflow-hidden" /> */}
        <span className="font-semibold font-mono text-xl drop-shadow-md">
          Darkak
        </span>
      </div>

      <ul className="flex-grow h-[84vh] bg-tl1 bg-opacity-80 px-1 py-1.0 flex flex-col justify-start gap-4 overflow-y-scroll overflow-x-hidden">
        {sidenav.map((navItem) => {
          return (
            <li className="flex flex-col w-full  " key={navItem.id}>
              <Link
                // txt={navItem.label}
                href={navItem.sub ? "" : navItem.to}
                onMouseOver={(e) => setTopSpace(e.target.offsetTop)}
                onClick={() =>
                  dispatch(
                    setExpansion({
                      view: [navItem.label],
                      status: !expansion[navItem.label],
                    })
                  )
                }
                className="bg-deep-3 shadow-sm text-blck font-sans font-semibold w-full flex gap-3 justify-between items-center hover:bg-deep-2 rounded-md border border-tl1 px-2 py-0.25"
              >
                {navItem.icon}
                {!isSideNavFolded && (
                  <span className="flex-grow text-start">{navItem.label}</span>
                )}
                {!isSideNavFolded && navItem.sub && (
                  <ChevronRight
                    className={
                      expansion[navItem.label] ? "rotate-90" : "rotate-0"
                    }
                  />
                )}
              </Link>

              {navItem.sub && (
                <ul
                  className={`bg-deep-3 rounded-md py-3 space-y-2 w-full  ${expansionStatus(
                    navItem.label
                  )}`}
                >
                  {navItem.childs.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.to}
                          className="bg-deep-3 hover:border hover:border-tl-3 text-blck font-mono w-full flex justify-between items-center rounded-md px-2 py-0.125"
                        >
                          {item.icon}
                          {!isSideNavFolded && (
                            <span className="flex-grow text-center">
                              {item.label}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      <div className="border-2 rounded-md border-tan-6 h-[6vh] flex flex-col justify-center">
        <CustomButton
          endIcon={
            <ChevronRight
              className={`${
                isSideNavFolded ? " rotate-0 " : "rotate-180"
              } w-7 h-7 text-blck`}
            />
          }
          afterClick={() =>
            dispatch(
              setSideNavFoldability({ isSideNavFolded: !isSideNavFolded })
            )
          }
          style="   py-0.5 px-0.25  rounded-md  w-full sm:flex hidden justify-center"
        />
      </div>
    </div>
  );
}
