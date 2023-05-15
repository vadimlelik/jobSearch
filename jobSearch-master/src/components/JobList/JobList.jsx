import React, { useEffect, useRef } from "react";
import style from "./JobList.module.css";
import { useSelector } from "react-redux";
import { getJobs, loading } from "../../store/jobs";
import JobCard from "../JobCard/JobCard";
import Search from "../Search";

const JobList = ({ onSearch, value, handleSearch }) => {
    const data = useSelector(getJobs());
    const isLoading = useSelector(loading());
    const isMounted = useRef(false);

    // useEffect(() => {
    //     if (isMounted.current) {
    //         const json = JSON.stringify(data);
    //         localStorage.setItem("jobId", json);
    //     }
    //     isMounted.current = true;
    // }, [data]);

    return (
        <div>
            <Search
                onSearch={onSearch}
                value={value}
                handleSearch={handleSearch}
            />
            <div className={style.JobList}>
                {isLoading ? (
                    <h1>...Loading</h1>
                ) : (
                    <ul>
                        {data.objects?.map((job) => {
                            return <JobCard key={job.id} {...job} />;
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default JobList;
