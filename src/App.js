import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import Contacts from './Contacts';
import Testimonials from './Testimonials';


function App() {
  return ( <Router>
    <nav className='top-nav'>
      <Link to="/" className='top-link'>ГЛАВНАЯ</Link>
      <Link to="/shop" className='top-link'>КАТАЛОГ</Link>
      <Link to="/contacts" className='top-link'>КОНТАКТЫ</Link>
      <Link to="/testimonials" className='top-link'>ОТЗЫВЫ</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/testimonials" element={<Testimonials/>}/>
    </Routes>
  </Router>);
}

export default App;
