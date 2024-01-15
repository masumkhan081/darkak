"use client"
import React from "react";
import EnhancedText from "../../ui-custom/EnhancedText";
import Link from "next/link";
import summery from "../../../static-data/dashboard-summery";
import SummeryCard from "./SummeryCard";
import SelectAndAdd from "@/components/ui-custom/SelectAndAdd";

export default function Home() {
  return (
    <div className=" bg-wh w-full h-full overflow-y-scroll flex flex-col gap-5 justify-start items-center py-1.0 px-0.5  ">
      <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1   ">
        {summery.map((item) => {
          return (
            <SummeryCard
              label={item.label}
              bg={item.bg}
              actions={item.actions}
              count={item.count}
            />
          );
        })}
      </div>
      <div>
      <SelectAndAdd options={["dhfdhfk","dhfdhfk","dhfdhfk"]}/>
      </div>
    </div>
  );
}
