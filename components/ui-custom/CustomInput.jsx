import React from "react";

export default function CustomInput({
  id,
  type,
  accept,
  required,
  value,
  ph,
  afterChange,
  afterHover,
  startIcon,
  endIcon,
  endButtonTxt,
  endButtonIcon,
  afterChangeEndButton,
  afterChangeStartButton,
  starButtonIcon,
  startButtonTxt
}) {
  return (
    <div className="flex rounded-md border border-slate-300 w-full h-full">
      {startIcon && (
        <span className="bg-slate-200 py-0.25 px-0.25 border-r rounded-r-sm border-slate-300">
          {startIcon}
        </span>
      )}
      {(startButtonTxt || starButtonIcon) && (
        <button className="flex items-center gap-2 bg-slate-200 py-0.25 px-0.5 border-s rounded-s-sm border-slate-300">
          {starButtonIcon}
          <span>{startButtonTxt}</span>
        </button>
      )}
      <input
        id={id}
        type={type}
        required={true}
        placeholder={ph}
        className="flex-grow py-0.5 px-0.38 outline-blue-300 rounded-md h-full"
        value={value}
        onChange={afterChange}
        accept={accept}
      ></input>
      {endIcon && (
        <span className="bg-slate-200 py-0.25 px-0.5 border-s rounded-s-sm border-slate-300">
          {endIcon}
        </span>
      )}
      {(endButtonTxt || endButtonIcon) && (
        <button className="flex items-center gap-2 bg-slate-200 py-0.25 px-0.5 border-s rounded-s-sm border-slate-300">
          {endButtonIcon}
          <span>{endButtonTxt}</span>
        </button>
      )}
    </div>
  );
}
