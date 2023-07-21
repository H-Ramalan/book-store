import BookCard from './BookCard';

const BookList = (props) => {
  const { books } = props;
  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </ul>
  );
};
export default BookList;
