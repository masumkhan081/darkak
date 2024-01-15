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
    isSideNavVisible
      ? "block flex  flex-col justify-between gap-4  "
      : "hidden";

  const expansionStatus = (key) => (expansion[key] ? " block" : " hidden");

  const [topSpace, setTopSpace] = useState(0);

  const adjustTop = () => "top-[100px]";

  return (
    <div
      className={` ${widthControl()} ${visibilityControl()} min-h-screen max-h-screen bg-slate-800   `}
    >
      <div className="bg-slate-950 py-0.125 sm:flex hidden  rounded-md  w-full  justify-center">
        <Image src={brand} className="w-7.0 h-4.0  overflow-hidden" />
      </div>

      <ul className="flex-grow px-1 py-1.0 flex flex-col justify-between gap-4 overflow-y-scroll overflow-x-hidden">
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
                className="bg-slate-950 bg-opacity-80 shadow-sm text-slate-100 font-sans font-semibold w-full flex gap-3 justify-between items-center rounded-md border border-slate-700 px-2 py-0.25"
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
                  className={`bg-slate-800 pt-3 space-y-2 w-full  ${expansionStatus(
                    navItem.label
                  )}`}
                >
                  {navItem.childs.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link
                          href={item.to}
                          className="bg-slate-900 bg-opacity-60 text-slate-100 font-mono w-full flex justify-between items-center rounded-md border border-slate-600 px-2 py-0.125"
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
        {/*
        <div>
          <CustomButton
            id="pokath"
            // afterHover={(e) => alert(e.target.offsetTop)}
            startIcon={<User className={cmn_icn_class} />}
            txt={isSideNavFolded ? "modal" : " many many text"}
            style="border-2 border-teal-600"
          />
        </div>
        <div>
          <CustomButton
            id="pussyass"
            // afterHover={(e) =>
            //   setTopSpace(document.getElementById("pussyass").offsetTop)
            // }
            startIcon={<User className={cmn_icn_class} />}
            txt={isSideNavFolded ? "--" : " many many text"}
            style="border-2 border-teal-600"
          />
           {isSideNavFolded ? (
            <div
              className={`block absolute z-10 left-[120px] ${adjustTop()} border rounded-md bg-wh border-yellow-600 w-38.0 h-25.0`}
            >
              <span>obj-modal</span>
            </div>
          ) : null} 
        </div>
*/}
      </ul>

      <div>
        <CustomButton
          endIcon={
            <ChevronRight
              className={`${
                isSideNavFolded ? " rotate-0 " : "rotate-180"
              } w-7 h-7 text-slate-200`}
            />
          }
          afterClick={() =>
            dispatch(
              setSideNavFoldability({ isSideNavFolded: !isSideNavFolded })
            )
          }
          style="bg-slate-950 py-0.5 px-0.25  rounded-md  w-full sm:flex hidden justify-center"
        />
      </div>
    </div>
  );
}
