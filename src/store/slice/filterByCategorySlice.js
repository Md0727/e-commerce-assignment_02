import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryKey: '',
    searchbyHeader: '',
}
const filterByCategorySlice = createSlice({
    name: 'category_filter',
    initialState,
    reducers: {
        setFilterByCategory: (state, action) => {
            const { key, value } = action.payload;
            return { ...state, [key]: value }
        }
    }
});

export const { setFilterByCategory } = filterByCategorySlice.actions;
export default filterByCategorySlice.reducer;