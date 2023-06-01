import React from "react";
import "./Electronics.css";
import images from '../bestitems/assests/images.png';
import phone from '../bestitems/assests/phone.png';
import printer from '../bestitems/assests/printer.png';
import vaccum from '../bestitems/assests/vaccum.jpg'

const electronicsData = [
  {
    image: images,
    name: "Alpha 9",
    rating: "5 stars",
    value: "5M+"
  },
  {
    image: phone,
    name: "Iphone 10",
    rating: "5 stars",
    value: "9M+"
  },
  {
    image: printer,
    name: "laser",
    rating: "5 stars",
    value: "4M+"
  },
  {
    image: vaccum,
    name: "Vaccum cleaner",
    rating: "5 stars",
    value: "2M+"
  },
 
];

const Electronics = () => {
  return (
    <>
      <h1 className="electronicshead">Best of <br/>Electronics</h1>
    <div className="electronics">
  
      {electronicsData.map((item, index) => (
        <div className="card" key={index}>
          <div className="infos">
            <img src={item.image} className="image" alt="Electronics" />
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




export default Electronics;
