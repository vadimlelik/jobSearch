import React from "react";
import style from "./Button.module.css";
import cn from "classnames";

const Button = ({ children, className, type, ...rest }) => {
    return (
        <button
            {...rest}
            className={cn(style.Button, {}, [className])}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
