import React, { useState } from "react";
import style from "./JobListPage.module.css";
import GroupFilter from "../../GroupFilter/GroupFilter";
import JobList from "../../JobList/JobList";

const JobListPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState({
        published: 1,
        paymentFrom: 0,
        paymentTo: 0,
        catalogues: 33,
    });

    return (
        <div className={style.JobListContainer}>
            <GroupFilter searchData={data} searchQuery={searchQuery} />
            <JobList />
        </div>
    );
};

export default JobListPage;
