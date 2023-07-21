import Header from './Header';
import './Bookstore.css';
import BookList from './BookList';
import AddBook from './AddBook';

const Bookstore = () => {
  const books = [
    {
      id: 1,
      genre: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      percentage: 64,
      chapter: 17,
    },
    {
      id: 2,
      genre: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      percentage: 8,
      chapter: 3,
    },
    {
      id: 3,
      genre: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      percentage: 0,
      chapter: 'Introduction',
    },
  ];
  return (
    <div className="book-store">
      <Header />
      <BookList books={books} />
      <AddBook />
    </div>
  );
};
export default Bookstore;
