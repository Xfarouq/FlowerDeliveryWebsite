// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import About from './pages/AboutUs';
import Checkout from './pages/Checkout';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Success from './pages/Success';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path='/product' element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
}
