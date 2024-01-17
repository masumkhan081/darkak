import React from "react";

export default function CustomInput({
  id,
  name,
  type,
  accept,
  required,
  label,
  lblstyle,
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
  startButtonTxt,
}) {
  return (
    <div className="flex rounded-md border border-slate-300 w-full h-full font-sans text-base">
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
      {label && (
        <p
          className={
            lblstyle
              ? lblstyle
              : "px-1 bg-slate-200 border-r border-slate-300  "
          }
        >
          {label}
        </p>
      )}
      <input
        id={id}
        name={name}
        type={type}
        required={true}
        placeholder={ph}
        className="flex-grow py-0.25 px-0.38 outline-none rounded-md h-full overflow-hidden"
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
