import React, { MouseEventHandler } from "react";

type ButtonProps = {
  id: string;
  label: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  type: string;
  buttonClass?: string;
};

const Button = ({ id, label, handleClick, type, buttonClass }: ButtonProps) => {
  const checkType = (type: string) => {
    switch (type) {
      case "primary":
        return "c-button--primary";
      default:
        return "";
    }
  };

  const classes = `c-button ${checkType(type)} ${
    buttonClass ? buttonClass : ""
  }`;

  return (
    <button id={id} data-testid={id} className={classes} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
