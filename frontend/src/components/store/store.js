import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feed/feedSlice";

export const store = configureStore({
    reducer: {
        feed: feedReducer,
    },
})