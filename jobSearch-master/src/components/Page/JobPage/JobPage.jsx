import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getByIdJobsData, loading } from "../../../store/jobs";
import parse from "html-react-parser";
import styles from "./JobPage.module.css";
import JobCard from "../../JobCard/JobCard";

const JobPage = () => {
    const { id } = useParams();
    const data = useSelector(getByIdJobsData(id));
    const isLoading = useSelector(loading());
    console.log(data, "data");

    return (
        <div className={styles.JobPageWrapper}>
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <div>
                    <JobCard {...data} />

                    <div className={styles.Info}>
                        {parse(data?.vacancyRichText)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobPage;
