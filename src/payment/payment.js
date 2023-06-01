import React from 'react';
import './payment.css';
import appleplay from './assests/applepay.jpg'
import gpay from './assests/gpay.png'
import paytm from './assests/paytm.jpeg'

const Payment = () => {
    return (
        <div className='payment'>
            <div className="modal">
                <form className="form" >
                    <div className="payment--options">
                        <button name="paytm" type="button">
                            <img className="pay" src={paytm} alt="" />
                        </button>
                        <button name="apple-pay" type="button">
                            <img className="pay" src={appleplay} alt="" />
                        </button>
                        <button name="google-pay" type="button">
                            <img className="pay" src={gpay} alt="" />
                        </button>
                    </div>
                    <div className="separator">
                        <hr className="line" />
                        <p>or pay using credit card</p>
                        <hr className="line" />
                    </div>
                    <div className="credit-card-info--form">
                        <div className="input_container">
                            <label for="password_field" class="input_label">Card holder full name</label>
                            <input id="password_field" class="input_field" type="text" name="input-name" title="Inpit title" placeholder="Enter your full name" />
                        </div>
                        <div className="input_container">
                            <label for="password_field" class="input_label">Card Number</label>
                            <input id="password_field" class="input_field" type="number" name="input-name" title="Inpit title" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="input_container">
                            <label for="password_field" class="input_label">Expiry Date / CVV</label>
                            <div class="split">
                                <input id="password_field" class="input_field" type="text" name="input-name" title="Expiry Date" placeholder="01/23" />
                                <input id="password_field" class="input_field" type="number" name="cvv" title="CVV" placeholder="CVV" />
                            </div>
                        </div>
                    </div>
                    <button className="purchase--btn">Checkout</button>
                </form>
            </div>
        </div>
    )
}

export default Payment;