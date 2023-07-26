import { NavLink } from 'react-router-dom';
import './Header.css';
import PersonIcon from './PersonIcon';

const Header = () => (
  <div className="navbar">
    <h1 className="name">Bookstore CMS</h1>
    <ul className="nav-links">
      <li>
        <NavLink to="/">Books</NavLink>
        {/* <a href="###" className="nav-items">
          Books
        </a> */}
      </li>
      <li>
        <NavLink to="/Categories">Categories</NavLink>
        {/* <a href="###" className="nav-items">
          Categories
        </a> */}
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
