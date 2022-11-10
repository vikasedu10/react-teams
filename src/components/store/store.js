import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feed/feedSlice";'./feed/feedSlice'

export const store = configureStore({
    reducer: {
        feed: feedReducer,
    },
})