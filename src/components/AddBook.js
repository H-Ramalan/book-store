import { useState } from 'react';
import './AddBook.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  const submitHandler = (e) => {
    e.preventDefault();
    const id = books.length + 1;
    const newBook = {
      bookId: `items${id}`,
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="add-book">
      <div className="horizontal" />
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={submitHandler} className="form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
          className="book-name"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select
          className="selection"
          id="selection"
          value={category}
          onSelect={(e) => setCategory(e.value)}
          required
        >
          <option value="Action">Action</option>
          <option value="Economy">Economy</option>
          <option value="Fiction">Fiction</option>
        </select>
        <button className="add-book-button" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default AddBook;
