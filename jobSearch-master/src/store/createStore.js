import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobsReducer from "./jobs";
import vacanciesReducer from "./catalogues";

const rootReducer = combineReducers({
    jobs: jobsReducer,
    vacancies: vacanciesReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
