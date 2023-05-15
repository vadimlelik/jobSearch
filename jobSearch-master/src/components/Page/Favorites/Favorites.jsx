import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getFavorite } from "../../../store/favorite";

const Favorites = () => {
    const data = useSelector(getFavorite());

    console.log(data);
    return <div>Favorites</div>;
};

export default Favorites;
