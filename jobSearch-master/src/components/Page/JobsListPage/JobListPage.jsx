import React, { useState } from "react";
import style from "./JobListPage.module.css";
import GroupFilter from "../../GroupFilter/GroupFilter";
import JobList from "../../JobList/JobList";
import { useDispatch } from "react-redux";
import { searchJobsList } from "../../../store/jobs";

const JobListPage = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const [data, setData] = useState({
    published: 1,
    paymentFrom: "",
    paymentTo: "",
    catalogues: "",
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchJobsList({ ...data, search: searchQuery }));
    /// тут должен быть запрос не сервер
  };

  const handleReset = () => {};

  return (
    <div className={style.JobListContainer}>
      <GroupFilter
        searchData={data}
        searchQuery={searchQuery}
        data={data}
        handleChange={handleChange}
        onSubmit={handleSubmit}
      />
      <JobList onSearch={setSearchQuery} value={searchQuery} />
    </div>
  );
};

export default JobListPage;
