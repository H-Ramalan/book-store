import './BookDetails.css';

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
export default BookDetails;
