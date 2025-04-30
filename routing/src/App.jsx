import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PaginationProvider from './component/context/PaginationContext';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <PaginationProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </PaginationProvider>
  );
}

export default App;
