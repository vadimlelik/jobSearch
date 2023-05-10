import React from "react";
import { ReactComponent as Logo } from "./icon/logo.svg";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={style.Navbar}>
            <div className={style.container}>
                <Logo />

                <nav className="menu">
                    <ul className={style.MenuList}>
                        <li className={style.MenuItem}>
                            <Link className={style.MenuLink} to="/">
                                Поиск Вакансий{" "}
                            </Link>
                        </li>
                        <li className={style.MenuItem}>
                            <Link className={style.MenuLink} to="/favorites">
                                Избранное
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
