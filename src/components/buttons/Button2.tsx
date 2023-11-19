import React from "react";

interface props {
  text: string;
  backgroundColor: string;
  fontColor: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button2({
  text,
  backgroundColor,
  fontColor,
  disabled,
  onClick,
}: props) {
  return (
    <button
      className="button2"
      style={{ backgroundColor: backgroundColor, color: fontColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button2;
