import React from 'react';
import './BookDetails.css';

const BookDetails = ({
  bookId, title, category, author, onClick,
}) => (
  <div className="book-details">
    <p className="book-genre">{category}</p>
    <h2 className="book-title">{title}</h2>
    <p className="book-author">{author}</p>
    <ul className="feature">
      <li className="items">
        <button type="button" className="btn">
          Comments
        </button>
      </li>
      <li className="items">
        <button
          className="btn"
          type="button"
          onClick={() => onClick(bookId)}
          id={bookId}
        >
          Remove
        </button>
      </li>
      <li className="item">
        <button className="btn" type="button">
          Edit
        </button>
      </li>
    </ul>
  </div>
);

export default BookDetails;
