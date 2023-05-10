import { configureStore, combineReducers } from "@reduxjs/toolkit";
import jobsReducer from "./jobs";

const rootReducer = combineReducers({
    jobs: jobsReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
