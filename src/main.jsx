import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav'
import Hero from './Hero'
import './style/index.css'
import Content from './Content'
import Footer from './Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Content />
    <Footer />
  </React.StrictMode>,
)
