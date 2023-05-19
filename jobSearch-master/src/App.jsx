import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout/layout";
import JobListPage from "./components/Page/JobsListPage";
import Favorites from "./components/Page/Favorites";
import JobPage from "./components/Page/JobPage";
import style from "./App.module.css";
import cn from "classnames";
import AppLoader from "./components/Hoc/AppLoader";

function App() {
  return (
    <AppLoader>
      <div className={cn(style.App)}>
        <Layout>
          <Routes>
            <Route path="/" element={<JobListPage />} />
            <Route path="/:id" element={<JobPage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Layout>
      </div>
    </AppLoader>
  );
}

export default App;
