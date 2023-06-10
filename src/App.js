import React from 'react';
import HomePage from './HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Cart from './cart/cart';
// import Payment from './payment/payment';
import PaypalCheckoutButton from './payment/paypalcheckoutbutton';
import './App.css'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


function App() {
  return (
   
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/cart" element={<div className="overlay"><Cart /></div>} /> */}
          <Route path="/payment" element={<PaypalCheckoutButton />} />
        </Routes>
      </div>
    
  );
}
export default App;

