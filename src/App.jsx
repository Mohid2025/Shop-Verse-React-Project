// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout'; // Import the Layout component
import HomePage from './pages/Home'; // Example page component
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';


function App() {
  return (
    <BrowserRouter>
      {/* 3. The Layout component wraps the content that REMAINS CONSTANT (Header/Footer) */}
      <Layout>
        {/* 4. Routes define the areas that CHANGE based on the URL */}
        <Routes>
          {/* Define a route for each page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          
          {/* Optional: Add a 404/Not Found route */}
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;