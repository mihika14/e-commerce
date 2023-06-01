import React from 'react';
import HomePage from './HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Cart from './cart/cart';
import Payment from './payment/payment';
import './App.css'


function App() {
  return (
    <div>
    
      <Routes>
      <Route path="/" element={ <HomePage />} />
        <Route path="/cart" element={<div className="overlay"><Cart /></div>} />
        <Route path="/payment" element={<Payment />} />

      </Routes>

    </div>
  );
}

export default App;

