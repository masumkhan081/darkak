"use client";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import SideNav from "../components/nav/SideNav";
import TopNav from "../components/nav/TopNav";
import Footer from "../components/page-partials/other/Footer";
import { usePathname } from "next/navigation";
import ProtectedRoute from "@/components/route/ProtectedRoute";
//
export default function RootLayout({ content }) {
  const path = usePathname();
  return (
    <>
      {path.endsWith("login") === false && (
        //  <ProtectedRoute>
        <div className="flex w-full ">
          <div className="w-[20vw]">
            <SideNav />
          </div>

          <div className="flex flex-grow flex-col gap-0 h-[100vh] max-h-[100vh]  ">
            <TopNav />
            {content}
          </div>
        </div>
        // </ProtectedRoute>
      )}
      {path.endsWith("login") === true && <>{content}</>}
    </>
  );
}
