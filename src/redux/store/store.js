import { uiSlice } from "../slices/uiSlice";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        ui: uiSlice
    }
})