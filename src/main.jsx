import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Content from './Content';
import Footer from './Footer';
import About from './About';
import Order from './Order';
import './style/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename='/vite-react-comission'>
     
      <Routes>
        <Route path="/" element={[ <Nav />,<Hero /> ,<About />, <Content />,<Footer />]} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
