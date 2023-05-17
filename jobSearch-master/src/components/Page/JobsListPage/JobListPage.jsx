import React, { useEffect, useState } from "react";
import style from "./JobListPage.module.css";
import GroupFilter from "../../GroupFilter/GroupFilter";
import JobList from "../../JobList/JobList";

const JobListPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleReset = () => {
        setSearchQuery("");
    };

    return (
        <div className={style.JobListContainer}>
            <GroupFilter onReset={handleReset} search={searchQuery} />
            <JobList onSearch={setSearchQuery} value={searchQuery} />
        </div>
    );
};

export default JobListPage;
