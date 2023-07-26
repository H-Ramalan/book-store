import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state, action) => (action.payload === 'Under construction'
      ? 'Under construction'
      : state.categories),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
