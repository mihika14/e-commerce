
import React from "react";
import { Carousel } from "react-responsive-carousel";
import appliances from "./assests/appliances.jpg";
import models from "./assests/models.jpg";
import newarrival from "./assests/newarrival.png";
import phones from "./assests/phones.png";
import textile from "./assests/textile.jpeg"
import cycle from "./assests/cycle.jpg"
import sunglasses from "./assests/sunglasses.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './caraousel.css'

export default () => (
  <div class="carousel-wrapper">
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
      <div>
        <img src={newarrival} />
      </div>
      <div>
        <img src={appliances} />
      </div>
      <div>
        <img src={models} />
      </div>
      <div>
        <img src={textile} />
      </div>

      <div>
        <img src={sunglasses} />
      </div>
      <div>
        <img src={cycle} />
      </div>
    </Carousel>
  </div>
);
