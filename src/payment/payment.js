import React, { useState, useEffect } from 'react';
import './payment.css';
import appleplay from './assests/applepay.jpg'
import gpay from './assests/gpay.png'
import paytm from './assests/paytm.jpeg'
import { PayPalButtons } from '@paypal/react-paypal-js';
import PaypalCheckoutButton from './paypalcheckoutbutton';

const Payment = (props) => {
    const product = {
        price: '18'
    };

    return (
        <>
            <div className='paypal-button-container'>
                <PaypalCheckoutButton product={product} />
            </div>
        </>
    )
}


export default Payment;