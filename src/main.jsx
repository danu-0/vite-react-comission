import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import Hero from './Hero'
import './style/index.css'
import Content from './Content'
import Footer from './Footer'


ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Content />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
