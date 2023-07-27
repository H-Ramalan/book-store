import PropTypes from 'prop-types';

import BookCard from './BookCard';

const BookList = ({ books }) => (
  <ul className="book-list">
    {books.map((book) => (
      <BookCard book={book} key={book.id} />
    ))}
  </ul>
);
BookList.propTypes = {
  book: PropTypes.shape({
    percentage: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookList;
