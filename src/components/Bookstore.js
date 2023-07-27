import './Bookstore.css';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import AddBook from './AddBook';

const Bookstore = () => {
  const books = useSelector((state) => state.book.books);

  return (
    <div className="book-store">
      <BookList books={books} />
      <AddBook />
    </div>
  );
};
export default Bookstore;
