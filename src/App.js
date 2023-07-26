import { Routes, Route } from 'react-router-dom';
import Bookstore from './components/Bookstore';

import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Bookstore />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
