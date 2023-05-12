import { createSlice } from "@reduxjs/toolkit";
import jobService from "../service/job.service";
import industryService from "../service/industry.service";

const initialState = {
    isLoading: true,
    entities: null,
    error: null,
};

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        jobsRequested: (state) => {
            state.isLoading = true;
        },
        jobsReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        jobsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

const { reducer: jobsReducer, actions } = jobsSlice;
const { jobsRequested, jobsReceived, jobsRequestFailed } = actions;

export const loadJobsList = () => async (dispatch) => {
    dispatch(jobsRequested());
    try {
        const content = await jobService.get();
        dispatch(jobsReceived(content));
    } catch (error) {
        dispatch(jobsRequestFailed(error.message));
    }
};
export const loadSearchJobs = () => async (dispatch) => {
    console.log("231231");
    dispatch(jobsRequested());
    try {
        const content = await industryService.get();
        console.log(content);
        // dispatch(jobsReceived(content));
    } catch (error) {
        dispatch(jobsRequestFailed(error.message));
    }
};

// selectors
export const getJobs = () => (state) => state.jobs.entities;
export const loading = () => (state) => state.jobs.isLoading;

export const getByIdJobsData = (id) => (state) => {
    return state.jobs.entities
        ? state.jobs.entities.objects.find((u) => {
              return u.id === +id;
          })
        : null;
};

export default jobsReducer;
