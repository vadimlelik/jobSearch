import React from "react";
import style from "./Button.module.css";
import cn from "classnames";

const Button = ({ children, className, type }) => {
  return (
    <button className={cn(style.Button, {}, [className])} type={type}>
      {children}
    </button>
  );
};

export default Button;
