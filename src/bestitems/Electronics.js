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
