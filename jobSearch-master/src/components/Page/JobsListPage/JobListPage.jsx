import React, { useState } from "react";
import style from "./JobListPage.module.css";
import GroupFilter from "../../GroupFilter/GroupFilter";
import JobList from "../../JobList/JobList";

const JobListPage = () => {
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

    /// тут должен быть запрос не сервер
    console.log(data, "data", searchQuery, "searchQuery");
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
