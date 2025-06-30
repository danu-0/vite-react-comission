import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Content from './Content';
import Footer from './Footer';
import About from './About';
import Order from './Order';
import Splash from './Splash';
import './style/index.css';
import Gallery from './Galery';
import Feature from './Feature';
import InvoicePage from './page/GenerateInvoice';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <Router basename='/vite-react-comission'>
      <Routes>
        <Route
          path="/"
          element={[
            <Nav key="nav" />,
            <Hero key="hero" />,
            <About key="about" />,
            <Content key="content" />,
            <Gallery key="gallery" />,
            <Feature key="feature"/>,
            <Footer key="footer" />,
          ]}
        />
        <Route path="order" element={<Order />} />
        <Route path="generate-invoice" element={<InvoicePage/>} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
