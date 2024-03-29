import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const Store = configureStore({
  reducer: {
    book: booksReducer,
    category: categoriesReducer,
  },
});

export default Store;
