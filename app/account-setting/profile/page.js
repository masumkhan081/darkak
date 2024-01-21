import AddUserRole from "@/components/page-partials/design/AddUserRole";
import Profile from "@/components/page-partials/profile/Profile";
import React from "react";

export default function page() {
  return (
    <div className="bg-slate-200   w-full  h-full overflow-y-scroll flex flex-col justify-start">
      <Profile/>
    </div>
  );
}
