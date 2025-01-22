import { configureStore } from "@reduxjs/toolkit";
import filterByCategoryReducer from "./slice/filterByCategorySlice"

const store = configureStore({
    reducer: {
        filterByCategory: filterByCategoryReducer
    }
});

export default store;