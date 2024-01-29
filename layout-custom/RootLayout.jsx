"use client";
import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import SideNav from "../components/nav/SideNav";
import TopNav from "../components/nav/TopNav";
import Footer from "../components/other/Footer";
import { usePathname } from "next/navigation";
import ProtectedRoute from "@/components/route/ProtectedRoute";
//
export default function RootLayout({ content }) {
  const path = usePathname();
  return (
    <div className="   ">
      {path.endsWith("login") === false && (
        //  <ProtectedRoute>
        <div className="flex w-[100vw]">
          <SideNav />

          <div className=" flex flex-col  ">
            <TopNav />
            {content}
          </div>
        </div>
        // </ProtectedRoute>
      )}
      {path.endsWith("login") === true && (
        <div className="h-[100vh] w-[100vw]">{content}</div>
      )}
    </div>
  );
}
