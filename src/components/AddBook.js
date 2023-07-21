import './AddBook.css';

const AddBook = () => (
  <div className="add-book">
    <div className="horizontal" />
    <h2 className="form-title">ADD NEW BOOK</h2>
    <form action="submit" className="form">
      <input
        type="text"
        placeholder="Book Title"
        className="book-name"
        required
      />
      <select className="selection" id="selection">
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
export default AddBook;
