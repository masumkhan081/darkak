import React from "react";

export default function CustomButton({
  id,
  txt,
  style,
  afterClick,
  afterHover,
  startIcon,
  endIcon,
}) {
  return (
    <button
      id={id}
      className={
        style ? style : `flex justify-center items-center border py-0.12 px-2 `
      }
      onClick={afterClick}
      onMouseOver={afterHover}
    >
      {startIcon}
      {txt}
      {endIcon}
    </button>
  );
}
