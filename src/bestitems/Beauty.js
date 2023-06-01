import React from "react";
import "./Electronics.css";
import beauty1 from '../bestitems/assests/beauty1.jpg';
import beauty2 from '../bestitems/assests/beauty2.jpg';
import toy1 from '../bestitems/assests/toy1.jpg';
import gym from '../bestitems/assests/gym.jpg';
import pram from '../bestitems/assests/pram.jpg';

const beautyItems = [
  {
    image: beauty1,
    name: "Makeup",
    rating: "5 stars",
    value: "5M+"
  },
  {
    image: beauty2,
    name: "Brush",
    rating: "50% off",
    value: "$200"
  },
  {
    image: toy1,
    name: "toys",
    rating: "Up to 80% off",
    value: ""
  },
  {
    image: pram,
    name: "Kids",
    rating: "Up to 80% off",
    value: ""
  },
  {
    image: gym,
    name: "Gym essentials",
    rating: "Up to 80% off",
    value: ""
  }
];

const Beauty = () => {
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
            <button className="request" type="button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Beauty;
