import './BookProgress.css';

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
export default BookProgress;
