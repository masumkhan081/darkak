"use client";
import React, { useEffect, useRef } from "react";
import CustomButton from "../ui-custom/CustomButton";
import { CloudCog, Menu, UserCog } from "lucide-react";
import { usePathname } from "next/navigation";
//
import { useDispatch, useSelector } from "react-redux";
import {
  setProfileModal,
  setSideNavVisibility,
} from "../../redux/slices/NavView";
import ModalBodyProfile from "../modal-body/Profile";
//
export default function TopNav() {
  //
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.authenticated);
  const isProfileModalOpen = useSelector(
    (state) => state.navView.isProfileModalOpen
  );

  const isSideNavVisible = useSelector(
    (state) => state.navView.isSideNavVisible
  );
  //
  const pathname = usePathname();

  const dropdownRef = useRef(null);
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      dispatch(setProfileModal({ isProfileModalOpen: false }));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{ position: "-webkit-sticky", position: "sticky", top: 0 }}
      className="w-full flex flex-col  bg-wh border-b border-slate-400 rounded-b-md"
    >
      <div className="flex justify-between items-center  px-1.0 py-1   border-b border-slate-300  ">
        <CustomButton
          afterClick={() =>
            dispatch(
              setSideNavVisibility({ isSideNavVisible: !isSideNavVisible })
            )
          }
          startIcon={<Menu className="w-7 h-7 text-black" />}
          style=" "
        />

        <p className="flex gap-2 items-center font-inter">
          <span>
          {JSON.stringify(isSideNavVisible)}  Hi, <b>omuk !</b>
          </span>

          <CustomButton
            afterClick={() =>
              dispatch(
                setProfileModal({ isProfileModalOpen: !isProfileModalOpen })
              )
            }
            startIcon={<UserCog className="w-6 h-7 text-orange-800 my-0.125" />}
            style=" py-0.25 px-0.5 rounded-full shadow-sm bg-slate-200"
          />
          <div
            className={isProfileModalOpen ? "nav_drop_down" : `hidden`}
            ref={dropdownRef}
          >
            <ModalBodyProfile
              onClose={() => {
                alert("?");
              }}
            />
          </div>
        </p>
      </div>
      <div className="flex justify-start py-0.25 px-1.0 font-mono text-sm">
        <span className="">{"Home" + pathname}</span>
      </div>
    </div>
  );
}
