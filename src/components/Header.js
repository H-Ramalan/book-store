import { NavLink } from 'react-router-dom';
import './Header.css';
import PersonIcon from './PersonIcon';

const Header = () => (
  <div className="navbar">
    <h1 className="name">Bookstore CMS</h1>
    <ul className="nav-links">
      <li>
        <NavLink to="/">BOOKS</NavLink>
      </li>
      <li>
        <NavLink to="/Categories">CATEGORIES</NavLink>
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
