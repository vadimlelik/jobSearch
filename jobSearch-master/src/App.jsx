import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadJobsList, loadSearchJobs } from "./store/jobs";
import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout/layout";
import JobListPage from "./components/Page/JobsListPage";
import Favorites from "./components/Page/Favorites";
import JobPage from "./components/Page/JobPage";
import style from "./App.module.css";
import cn from "classnames";
import authService from "./service/auth.service";
import { loadCatalogList } from "./store/catalogues";

function App() {
    const dispatch = useDispatch();

    const authLogin = async () => {
        const data = await authService.login();
        localStorage.setItem("token", JSON.stringify(data));
    };
    // let token = localStorage.getItem("token");
    // token = JSON.parse(token);

    useEffect(() => {
        dispatch(loadJobsList());
        dispatch(loadCatalogList());

        authLogin();
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
