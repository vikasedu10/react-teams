import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import feedItemsData from "../../helper/feed/feedItemsData";

const initialState = {
    feeds: feedItemsData,
    totalFeeds: 2,
    isLoading: true,
}
const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers: {
        clearFeed: (state) => {
            state.feeds = [];
        },
        addFeed: (state, action) => {
            state.feeds[state.feeds.length+1] = {"title": action.payload["title"], "description": action.payload["description"]}
        },
        updateFeed : (state, action) => {
        }
    }
});

export const {clearFeed, addFeed } = feedSlice.actions
// console.log(initialState)

export default feedSlice.reducer;
