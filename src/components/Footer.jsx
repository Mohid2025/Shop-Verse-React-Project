// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: '#f1f1f1', 
      padding: '1.5rem 2rem', 
      textAlign: 'center', 
      borderTop: '1px solid #ccc',
      marginTop: 'auto' // Ensures footer stays at the bottom in flex containers
    }}>
      <p>&copy; {currentYear} ShopVerse. All rights reserved.</p>
      <div style={{ marginTop: '0.5rem' }}>
        <small>Privacy Policy | Terms of Service</small>
      </div>
    </footer>
  );
};

export default Footer;