import './BookProgress.css';
import PropTypes from 'prop-types';

const BookProgress = ({ book }) => (
  <div className="book-progress">
    <div className="progress percentage">
      <div className="circular-progress">
        <div className="oval" />
        <div className="progress-stat">
          <p className="percentage">
            {book.percentage}
            %
          </p>

          <p className="completed">Completed</p>
        </div>
      </div>
    </div>
    <div className="progress-chapter">
      <h4 className="current-chapter">CURRENT CHAPTER</h4>
      <p className="chapter-number">
        Chapter
        {book.chapter}
      </p>
      <button className="progress-button" type="submit">
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

BookProgress.propTypes = {
  book: PropTypes.shape({
    percentage: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    chapter: PropTypes.number.isRequired,
    // Add other prop validations for the 'book' object if needed
  }).isRequired,
};
export default BookProgress;
