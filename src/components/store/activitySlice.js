import { createSlice } from "@reduxjs/toolkit";

const initState = localStorage.getItem("teams-activity")
console.log(initState)

export const activitySlice = createSlice({
    name: "activity",
    initState,
    reducers: {
        getActivities: (state) => {
            initState;
        }
        // addActivity: (state, action) => {

        // }
    }
})