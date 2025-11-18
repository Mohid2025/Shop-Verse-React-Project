// src/components/Header.jsx

import React from 'react';
// Assuming you will use React Router for navigation links
// import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header style={{ 
      backgroundColor: '#282c34', 
      padding: '1rem 2rem', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>🛍️ ShopVerse</h1>
      <nav>
        {/* Replace <a> with <Link> when using React Router */}
        <a href="/" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Home</a>
        <a href="/products" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Products</a>
        <a href="/cart" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Cart</a>
      </nav>
    </header>
  );
};

export default Header;