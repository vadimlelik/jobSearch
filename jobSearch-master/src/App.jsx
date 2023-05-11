import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadJobsList } from "./store/jobs";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout/layout";
import JobListPage from "./components/Page/JobsListPage";
import Favorites from "./components/Page/Favorites";
import JobPage from "./components/Page/JobPage";
import style from "./App.module.css";
import cn from "classnames";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadJobsList());
    }, []);

    return (
        <div className={cn(style.App)}>
            <Layout>
                <Routes>
                    <Route path="/" element={<JobListPage />} />
                    <Route path="/:id" element={<JobPage />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;