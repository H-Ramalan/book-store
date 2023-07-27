import React from 'react';
import './BookDetails.css';
import PropTypes from 'prop-types';

const BookDetails = ({
  id, title, category, author, onClick,
}) => {
  const removeHandler = () => {
    onClick(id);
  };
  return (
    <div className="book-details">
      <p className="book-genre">{category}</p>
      <h2 className="book-title">{title}</h2>
      <p className="book-author">{author}</p>
      <ul className="feature">
        <li className="items">
          <button type="button">Comments</button>
        </li>
        <li className="items">
          {' '}
          <button type="button" onClick={removeHandler}>
            Remove
          </button>
        </li>
        <li className="item">
          <button type="button">Edit</button>
        </li>
      </ul>
    </div>
  );
};

BookDetails.propTypes = {
  book: PropTypes.shape({
    percentage: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default BookDetails;
