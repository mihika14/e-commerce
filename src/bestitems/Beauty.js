import React, { useState } from "react";
import "./Electronics.css";
import beauty1 from '../bestitems/assests/beauty1.jpg';
import beauty2 from '../bestitems/assests/beauty2.jpg';
import toy1 from '../bestitems/assests/toy1.jpg';
import gym from '../bestitems/assests/gym.jpg';
import pram from '../bestitems/assests/pram.jpg';
import images from '../bestitems/assests/images.png';
import phone from '../bestitems/assests/phone.png';
import printer from '../bestitems/assests/printer.png';
import vaccum from '../bestitems/assests/vaccum.jpg'
import { Link } from "react-router-dom";

const Beauty = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartValue, setCartValue] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartValue(cartValue + parseFloat(item.value.slice(1)));
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const beautyItems = [
    {
      image: images,
      name: "Alpha 9",
      value: "$100+"
    },
    {
      image: phone,
      name: "Iphone 10",
      value: "$300"
    },
    {
      image: printer,
      name: "laser",
      value: "$600"
    },
    {
      image: vaccum,
      name: "Vaccum cleaner",
      value: "$300"
    },
    {
      image: beauty1,
      name: "Makeup",
      value: "$400+"
    },
    {
      image: beauty2,
      name: "Brush",
      value: "$200"
    },
    {
      image: toy1,
      name: "Toys",
      value: "$400"
    },
    {
      image: pram,
      name: "Kids",
      value: "$400"
    },
    {
      image: gym,
      name: "Gym essentials",
      value: "$400"
    }
  ];

  return (
    <>
      <h1 className="electronicshead">Beauty Toys and more</h1>
      <div className="electronics">
        {beautyItems.map((item, index) => (
          <div className="card" key={index}>
            <div className="infos">
              <img src={item.image} className="image" alt="Beauty Item" />
              <div className="info">
                <div>
                  <p className="name">{item.name}</p>
                </div>
                <div className="stats">
                  <p className="flex flex-col">
                    {item.rating}
                    <span className="state-value">{item.value}</span>
                  </p>
                </div>
              </div>
            </div>
            <button className="request" type="button" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className={`cart ${isCartOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M12 10.586L4.707 3.293a1 1 0 0 0-1.414 1.414L10.586 12l-7.293 7.293a1 1 0 0 0 1.414 1.414L12 13.414l7.293 7.293a1 1 0 0 0 1.414-1.414L13.414 12l7.293-7.293a1 1 0 0 0-1.414-1.414L12 10.586z" />
          </svg>
        </button>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
            <p>Total Value:${cartValue.toFixed(2)}</p>

            <Link to="/payment">
              <button className="checkout">CHECKOUT</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Beauty;
