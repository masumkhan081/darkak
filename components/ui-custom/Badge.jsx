import React from "react";

export default function Badge({ txt, bg, font, children }) {
  const bg_styles = {
    wh: "bg-wh text-slate-900",
    teal: "bg-teal-700 text-slate-100",
    yellow:"bg-yellow-700",
    gray: "bg-slate-100 text-black",
    "gray-2": "bg-slate-200 text-black",
    "gray-3": "bg-slate-300 text-black",
  };
  const font_styles = {
    1: "text-lg ",
    1.1: "text-lg font-semibold",
    2: "text-base",
    2.1: "text-base font-semibold",
    2.2: "text-base font-bold",

    3: "text-sm ",
    3.1: "text-sm font-semibold",
    3.2: "text-sm font-bold",
  };

  return (
    <span
      className={` ${bg_styles[bg]} ${font_styles[font]} flex justify-center gap-2 items-center py-0.125 px-0.25 rounded-md my-auto`}
    >
      {txt}
      {children}
    </span>
  );
}
