"use client";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import SideNav from "../nav/SideNav"; 
import TopNav from "../nav/TopNav";
import Footer from "../page-partials/other/Footer";
//
export default function DashboardLayout({ content }) {
  const [sideNavHidden, setSideNav] = useState(false);
  const view = () => (sideNavHidden ? " hidden" : "block");
  return (
    <div>
      <div className="flex   min-h-screen w-full">
        <div className={`${view()}    h-screen `}>
          <SideNav sideNavHidden={sideNavHidden} />
        </div>

        <div className="flex flex-grow flex-col  h-screen  ">
          <TopNav click={() => setSideNav(!sideNavHidden)} />
          {content}
          <Footer/>
        </div>
      </div>
    </div>
  );
}
