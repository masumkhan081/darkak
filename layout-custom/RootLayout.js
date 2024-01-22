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
    <div>
      {path.endsWith("login") === false && (
        //  <ProtectedRoute>
        <div className="flex w-full ">
          <SideNav />

          <div className="flex flex-col gap-0 ">
            <TopNav />
            {content}
          </div>
        </div>
        // </ProtectedRoute>
      )}
      {path.endsWith("login") === true && <>{content}</>}
    </div>
  );
}
