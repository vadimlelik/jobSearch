import React, { useEffect, useState } from "react";
import style from "./JobListPage.module.css";
import GroupFilter from "../../GroupFilter/GroupFilter";
import JobList from "../../JobList/JobList";
import { useDispatch } from "react-redux";
import { searchJobsList } from "../../../store/jobs";

const JobListPage = () => {
    const initialState = {
        published: 1,
        paymentFrom: "",
        paymentTo: "",
        catalogues: "",
    };
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState("");

    const [data, setData] = useState(initialState);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const handleReset = () => {
        setData(initialState);
        setSearchQuery("");
    };

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchJobsList({ ...data, search: searchQuery }));
        handleReset();
    };

    return (
        <div className={style.JobListContainer}>
            <GroupFilter
                searchData={data}
                searchQuery={searchQuery}
                data={data}
                handleChange={handleChange}
                onSubmit={handleSearch}
                onReset={handleReset}
            />
            <JobList
                onSearch={setSearchQuery}
                value={searchQuery}
                handleSearch={handleSearch}
            />
        </div>
    );
};

export default JobListPage;
