import { useState } from 'react';
// eslint-disable-next-line
import { v4 as uuidv4 } from 'uuid';
import './AddBook.css';
import { useDispatch } from 'react-redux';
import { pushBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    const id = uuidv4();
    dispatch(
      pushBook({
        item_id: `book-id:${id}`,
        title,
        author,
        category,
      }),
    );
    e.preventDefault();
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
          className="author"
        />
        <select
          className="selection"
          id="selection"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          placeholder="Category"
        >
          <option value="">Select Category</option>
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
