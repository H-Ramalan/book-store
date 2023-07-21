import './Header.css';

/* <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>; */

const Header = () => (
  <div className="navbar">
    <h1 className="name">Bookstore CMS</h1>
    <ul className="nav-links">
      <li>
        <a href="###" className="nav-items">
          Books
        </a>
      </li>
      <li>
        <a href="###" className="nav-items">
          Categories
        </a>
      </li>
    </ul>
    <button className="button" type="submit">
      <span className="material-symbols-outlined">person</span>
    </button>
  </div>
);
export default Header;
