import React from "react";
import style from "./Button.module.css";
import cn from "classnames";

const Button = ({ children, className }) => {
    return (
        <button className={cn(style.Button, {}, [className])}>
            {children}
        </button>
    );
};

export default Button;
