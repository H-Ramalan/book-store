import './BookDetails.css';
import PropTypes from 'prop-types';

const BookDetails = ({ book }) => (
  <div className="book-details">
    <p className="book-genre">{book.genre}</p>
    <h2 className="book-title">{book.title}</h2>
    <p className="book-author">{book.author}</p>
    <ul className="feature">
      <li className="items">Comments</li>
      <li className="items">Remove</li>
      <li className="item">Edit</li>
    </ul>
  </div>
);

BookDetails.propTypes = {
  book: PropTypes.shape({
    percentage: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // Add other prop validations for the 'book' object if needed
  }).isRequired,
};
export default BookDetails;
