import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getFavorite } from "../../../store/favorite";
import styles from "./Favorite.module.css";
import { getByIdJobsArray } from "../../../store/jobs";
import JobCard from "../../JobCard/JobCard";

const Favorites = () => {
    const data = useSelector(getFavorite());

    const arrayId = Object.keys(data);
    const arrayJobs = useSelector(getByIdJobsArray(arrayId));

    return (
        <div className={styles.FavoriteWrapper}>
            <div className="list">
                {arrayJobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
