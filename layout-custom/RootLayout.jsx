"use client";
import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import SideNav from "../components/nav/SideNav";
import TopNav from "../components/nav/TopNav";
import Footer from "../components/page-partials/other/Footer";
import { usePathname } from "next/navigation";
import ProtectedRoute from "@/components/route/ProtectedRoute";
//
export default function RootLayout({ content }) {
  const dispatch = useDispatch();
  const isSideNavFolded = useSelector((state) => state.navView.isSideNavFolded);
  const expansion = useSelector((state) => state.navView.expansion);
  const isSideNavVisible = useSelector(
    (state) => state.navView.isSideNavVisible
  );

  const getSideNavWidth = () => (isSideNavFolded ? "w-[5vw] " : "w-[20vw]");
  const visibilityControl = () => (isSideNavVisible ? "block   " : "hidden");
  //
  const getRightSideWidth = () => (isSideNavFolded ? "w-[95vw] " : "w-[80vw]");

  // const visibilityControl = () => (isSideNavVisible ? "block   " : "hidden");

  const path = usePathname();
  return path.endsWith("login") === false ? (
    // <ProtectedRoute>
    <div className="  w-[100vw] h-[100vh] brdr">
      <div className={` ${getSideNavWidth()} ${visibilityControl()} h-full`}>
        <SideNav />
      </div>

      <div className={` w-[95vw]  flex flex-col gap-0 brdr`}>
        <div className="w-full h-[10vh]">
          <TopNav />
        </div>
        <div className="w-full h-[90vh]">{content}</div>
      </div>
    </div>
  ) : (
    // </ProtectedRoute>
    <div className="w-[100vw] h-[100vh]  brdr">{content}</div>
  );
}
