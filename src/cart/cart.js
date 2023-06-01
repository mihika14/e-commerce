import React, { useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            name: "Cheese Burger",
            description: "Extra Spicy",
            options: ["No mayo"],
            quantity: 2,
            price: 23.99,
        },
    ]);

    const increaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity++;
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity--;
            setCartItems(updatedCartItems);
        }
    };

    const calculateSubtotal = () => {
        let subtotal = 0;
        for (const item of cartItems) {
            subtotal += item.price * item.quantity;
        }
        return subtotal.toFixed(2);
    };

    const renderCartItems = () => {
        return cartItems.map((item, index) => (
            <div className="product" key={index}>
                <div>
                    <span>{item.name}</span>
                    <p>{item.description}</p>
                    {item.options.map((option, i) => (
                        <p key={i}>{option}</p>
                    ))}
                </div>
                <div className="quantity">
                    <button onClick={() => decreaseQuantity(index)}>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="14"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                stroke="#47484b"
                                d="M20 12L4 12"
                            ></path>
                        </svg>
                    </button>
                    <label>{item.quantity}</label>
                    <button onClick={() => increaseQuantity(index)}>
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="14"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                stroke="#47484b"
                                d="M12 4V20M20 12H4"
                            ></path>
                        </svg>
                    </button>
                </div>
                <label className="price small">${item.price.toFixed(2)}</label>
                {/* <button className="remove-btn" onClick={() => removeItem(index)}>
          Remove
        </button> */}
            </div>
        ));
    };

    return (
        <div id="cart">
            <div className="master-container">
                <div className="card cart">
                    <label className="title">Your cart</label>
                    <div className="products">{renderCartItems()}</div>
                </div>

                <div className="card checkout">
                    <label className="title">Checkout</label>
                    <div className="details">
                        <span>Your cart subtotal:</span>
                        <span>${calculateSubtotal()}</span>
                    </div>
                    <div className="checkout--footer">
                        <label className="price">
                            <sup>$</sup>{calculateSubtotal()}
                        </label>

                        <a href="/payment" className="checkout-btn" target="_blank">
                            Checkout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
