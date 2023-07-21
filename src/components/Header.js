import './Header.css';
import PersonIcon from './PersonIcon';

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
    <button className="user" type="submit">
      <span className="icon">
        <PersonIcon />
      </span>
    </button>
  </div>
);
export default Header;
