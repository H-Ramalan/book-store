import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import './BookCard.css';

import BookDetails from './BookDetails';
import BookProgress from './BookProgress';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <li className="book-card">
      <BookDetails
        key={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
        id={book.bookId}
        onClick={() => clickHandler(book.bookId)}
      />
      <BookProgress />
    </li>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    percentage: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookCard;
