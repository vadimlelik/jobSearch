import React from "react";
import style from "./JobList.module.css";
import { useSelector } from "react-redux";
import { getJobs, loading } from "../../store/jobs";
import JobCard from "../JobCard/JobCard";
import Search from "../Search";

const JobList = ({ onSearch, value }) => {
  const data = useSelector(getJobs());
  const isLoading = useSelector(loading());

  return (
    <div>
      <Search onSearch={onSearch} value={value} />
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
