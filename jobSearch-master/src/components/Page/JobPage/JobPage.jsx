import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getByIdJobsData, loading } from "../../../store/jobs";
import parse from "html-react-parser";

const JobPage = () => {
    const { id } = useParams();
    const data = useSelector(getByIdJobsData(id));
    const isLoading = useSelector(loading());
    console.log(data);

    return (
        <div>
            {isLoading ? (
                <p>Loading</p>
            ) : (
                <div>{parse(data.vacancyRichText)}</div>
            )}
        </div>
    );
};

export default JobPage;
