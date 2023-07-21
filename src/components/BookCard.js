import './BookCard.css';
import BookDetails from './BookDetails';
import BookProgress from './BookProgress';

const BookCard = ({ book }) => (
  <li className="book-card">
    <BookDetails book={book} />
    <BookProgress book={book} />
  </li>
);
export default BookCard;
