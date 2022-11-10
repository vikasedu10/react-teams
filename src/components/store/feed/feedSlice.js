import { createSlice } from "@reduxjs/toolkit";
import feedItemsData from "../../helper/feed/feedItemsData";

const initialState = {
    feeds: feedItemsData,
    totalFeeds: 2,
    isLoading: true,
}
const feedSlice = createSlice({
    name: "feed",
    initialState,
});

console.log(initialState)

export default feedSlice.reducer;
