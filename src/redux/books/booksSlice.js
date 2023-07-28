import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import axios from 'axios';

const ApiId = 'LQYGPUQgAZCQeGfRpgA8';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ApiId}`;

const initialState = {
  books: [],
  Loading: 'idle',
  error: null,
};

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    loadBooks: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.bookId !== action.payload,
      );
    },
  },
});

const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { dispatch }) => {
    const response = await axios.get(`${url}/books`);
    const data = [];
    Object.entries(response.data).forEach(([k, v]) => {
      data.push({ ...v[0], id: k });
    });
    dispatch(booksSlice.actions.loadBooks(data));
  },
);

const pushBook = createAsyncThunk(
  'books/pushBook',
  async (book, { dispatch }) => {
    try {
      await axios.post(`${url}/books`, book);
      dispatch(fetchBooks());
    } catch (error) {
      throw new Error(error);
    }
  },
);

const deleteBook = createAsyncThunk('book/deleteBook', async (bookId, API) => {
  try {
    await axios.delete(`${url}/books/${bookId}`);
    API.dispatch(fetchBooks());
    return bookId;
  } catch (error) {
    throw new Error(error);
  }
});

export { fetchBooks, pushBook, deleteBook };
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
