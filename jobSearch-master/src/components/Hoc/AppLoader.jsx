import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();

    if (usersStatusLoading) return "Loading...";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

export default AppLoader;
