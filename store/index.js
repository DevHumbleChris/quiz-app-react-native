import { configureStore } from "@reduxjs/toolkit";
import progressSlice from "./slices/progressSlice";

export const store = configureStore({
    reducer: {
        progress: progressSlice
    }
})