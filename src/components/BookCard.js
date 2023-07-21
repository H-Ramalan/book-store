import './BookCard.css';
import PropTypes from 'prop-types';
import BookDetails from './BookDetails';
import BookProgress from './BookProgress';

const BookCard = ({ book }) => (
  <li className="book-card">
    <BookDetails book={book} />
    <BookProgress book={book} />
  </li>
);

BookCard.propTypes = {
  book: PropTypes.shape({
    percentage: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // Add other prop validations for the 'book' object if needed
  }).isRequired,
};
export default BookCard;
