import { useEffect } from "react";
import style from "./App.module.css";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { loadJobsList } from "./store/jobs";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("asda");
        dispatch(loadJobsList());
    }, []);

    return <div className={cn(style.App)}>App</div>;
}

export default App;
