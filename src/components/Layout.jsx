// src/components/Layout.jsx

import React from 'react';
import Header from './Header';
import Footer from './Footer';

// The 'children' prop is where the content of the current page will go
const Layout = ({ children }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', // Ensures the layout takes up at least the full viewport height
      width: '100%'
    }}>
      <Header />
      
      {/* Main content area */}
      <main style={{ flexGrow: 1, padding: '20px' }}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;