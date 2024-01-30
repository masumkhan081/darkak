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

  const getSideNavWidth = () =>
    isSideNavVisible
      ? isSideNavFolded
        ? "  w-[5vw] min-w-[35px]"
        : "  md:w-[20vw] w-[5vw] min-w-[35px] "
      : "hidden";

  const visibilityControl = () => (isSideNavVisible ? "block   " : "hidden");

  const widthControlBrand = () =>
    isSideNavFolded ? "invisible " : "md:text-xl sm:text-sm invisible";
  const expansionStatus = (key) => (expansion[key] ? " block" : " hidden");

  const [topSpace, setTopSpace] = useState(0);
  const adjustTop = () => "top-[100px]";

  const getSubItemWidth = () =>
    isSideNavFolded ? "w-[20px] " : "md:w-full w-[20px]";

  return (
    <div className={` ${getSideNavWidth()} bg-tl-1 h-[100vh] `}>
      <div className="  py-0.125 flex   rounded-sm  w-full  justify-center items-center h-[10vh] ">
        {/* <Image src={brand} className="w-7.0 h-4.0  overflow-hidden" /> */}
        <span
          className={` ${widthControlBrand()} font-semibold font-mono drop-shadow-md`}
        >
          Darkak
        </span>
      </div>

      <ul className="flex-grow overflow-x-auto h-[84vh] bg-tl-1 bg-opacity-80 px-1 py-1.0 flex flex-col justify-start gap-4 overflow-y-auto  ">
        {sidenav.map((navItem) => {
          return (
            <li
              className="flex flex-col md:min-w-[200px] w-full "
              key={navItem.id}
            >
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
                className=" text-blck font-inter font-semibold w-full flex gap-3 justify-between items-center hover:bg-tl2 rounded-md  px-2 py-0.25"
              >
                {navItem.icon}
                {!isSideNavFolded && (
                  <span className="flex-grow text-start md:block hidden">
                    {navItem.label}
                  </span>
                )}
                {!isSideNavFolded && navItem.sub && (
                  <ChevronRight
                    className={
                      expansion[navItem.label]
                        ? "rotate-90 w-5 h-5 text-slate-950 md:block hidden"
                        : "rotate-0 text-sl/500  w-5 h-5 md:block hidden"
                    }
                  />
                )}
              </Link>

              {navItem.sub && (
                <ul
                  className={`bg-tl-2 rounded md:px-1 ps-1 py-3 flex flex-col gap-2 justify-center items-center w-full  ${expansionStatus(
                    navItem.label
                  )}`}
                >
                  {navItem.childs.map((item) => {
                    return (
                      <li className={` ${getSubItemWidth()} flex justify-start`} key={item.id}>
                        <Link
                          href={item.to}
                          className="md:bg-pr/400 md:border hover:border-tl1 border-tl-3 text-slate-100 font-mono w-full flex md:gap-2 justify-start items-center rounded-md md:px-2 px-0 py-0.125"
                        >
                          <span className="min-w-[15px] min-h-[15px] ">{item.icon}</span>
                          {!isSideNavFolded && (
                            <span className="flex-grow text-start md:block hidden">
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

      <div className="  rounded mx-2 h-[5vh] flex flex-col justify-center ">
        <CustomButton
          endIcon={
            <ChevronRight
              className={`${
                isSideNavFolded ? " rotate-0 " : "rotate-180"
              } w-7 h-7  `}
            />
          }
          afterClick={() =>
            dispatch(
              setSideNavFoldability({ isSideNavFolded: !isSideNavFolded })
            )
          }
          style="  flex items-center hover:text-pr/600  border border-tl2  rounded  w-full md:flex hidden justify-center"
        />
      </div>
    </div>
  );
}
