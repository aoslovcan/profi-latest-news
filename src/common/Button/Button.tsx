import React, { MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  type: string;
};

const Button = ({ label, handleClick, type }: ButtonProps) => {
  const checkType = (type: string) => {
    switch (type) {
      case "primary":
        return "c-button--primary";
      default:
        return "";
    }
  };

  const classes = `c-button ${checkType(type)}`;

  return (
    <button className={classes} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
