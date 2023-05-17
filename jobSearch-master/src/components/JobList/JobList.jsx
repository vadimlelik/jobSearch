import React, { useEffect, useRef } from "react";
import style from "./JobList.module.css";
import { useSelector } from "react-redux";
import { getJobs, loading } from "../../store/jobs";
import JobCard from "../JobCard/JobCard";
import Search from "../Search";
import { Loader } from "@mantine/core";

const JobList = ({ onSearch, value, handleSearch }) => {
    const data = useSelector(getJobs());
    const isLoading = useSelector(loading());

    return (
        <div>
            <Search
                onSearch={onSearch}
                value={value}
                handleSearch={handleSearch}
            />
            <div className={style.JobList}>
                {isLoading ? (
                    <Loader color="gray" size="xl" />
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
