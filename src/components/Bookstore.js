import './Bookstore.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookList from './BookList';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/booksSlice';

const Bookstore = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="book-store">
      <BookList books={books} />
      <AddBook />
    </div>
  );
};
export default Bookstore;
