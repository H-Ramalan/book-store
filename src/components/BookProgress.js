import './BookProgress.css';

import PropTypes from 'prop-types';

const BookProgress = () => (
  <div className="book-progress">
    <div className="progress percentage">
      <div className="circular-progress">
        <div className="oval" />
        <div className="progress-stat">
          <p className="percentage">75%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
    </div>
    <div className="progress-chapter">
      <h4 className="current-chapter">CURRENT CHAPTER</h4>
      <p className="chapter-number">Chapter 14</p>
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
  }).isRequired,
};
export default BookProgress;
