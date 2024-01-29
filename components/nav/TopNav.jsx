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
  const isSideNavFolded = useSelector((state) => state.navView.isSideNavFolded);
  const expansion = useSelector((state) => state.navView.expansion);
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

  const getRightSideWidth = () =>
    isSideNavVisible
      ? isSideNavFolded
        ? "w-[95vw] "
        : "w-[80vw]"
      : "w-[100vw]";

  return (
    <div
      style={{ position: "-webkit-sticky", position: "sticky", top: 0 }}
      className={` ${getRightSideWidth()} bg-tl-1 rounded-b-sm flex justify-between items-center h-3.0 px-1.0 py-1    `}
    >
      <div className="flex flex-col gap-1 items-start">
        <CustomButton
          afterClick={() =>
            dispatch(
              setSideNavVisibility({ isSideNavVisible: !isSideNavVisible })
            )
          }
          startIcon={<Menu className="w-6 h-6 text-black" />}
          style=" "
        />
        <span className="text-xs">{"Home" + pathname}</span>
      </div>

      <p className="flex gap-2 items-center font-inter">
        <span>
          Hi, <b>UserName!</b>
        </span>

        <CustomButton
          afterClick={() =>
            dispatch(
              setProfileModal({ isProfileModalOpen: !isProfileModalOpen })
            )
          }
          startIcon={<UserCog className="w-5 h-6 text-pr/600 " />}
          style=" py-0.12 px-0.5 rounded-full shadow-sm border border-tl-2"
        />
        <div
          className={isProfileModalOpen ? "profile_drop_down" : `hidden`}
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
  );
}
