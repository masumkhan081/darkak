"use client";
import summery from "@/static-data/dashboard-summery";
import React from "react";
import SummeryCard from "./SummeryCard";

export default function Home() {
  return (
    <div className=" bg-wh w-full h-full overflow-y-scroll flex flex-col gap-5 justify-start items-center py-1.0 px-0.5  ">
      <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1   ">
        {summery.map((item, ind) => {
          return (
            <SummeryCard
              key={ind}
              label={item.label}
              bg={item.bg}
              actions={item.actions}
              count={item.count}
            />
          );
        })}
      </div>
    </div>
  );
}
