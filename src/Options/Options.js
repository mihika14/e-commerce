import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Options.css';
import beauty from './assests/beau.jpeg';
import Electronics from './assests/Electronics.png'
import grocery from './assests/grocery.png'
import mobile from './assests/mobile.png'
import home from './assests/home.jpeg'
import fashion from './assests/fashion.jpeg'

export default class Options extends Component {
  state = {
    activeItem: 'electronics',
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    const menuItems = [
      { name: 'Electronics', label: 'Electronics', logo: Electronics },
      { name: 'Mobiles', label: 'Mobiles', logo: mobile },
      { name: 'Fashion', label: 'Fashion', logo: fashion },
      { name: 'Grocery', label: 'Grocery', logo: grocery },
      { name: 'Home', label: 'home', logo: home },
      { name: 'Beauty', label: 'Beauty', logo: beauty },
    ];

    return (
      <div className="radio-inputs">
        {menuItems.map((item) => (
          <label key={item.name}>
            <input
              className="radio-input"
              type="radio"
              name="engine"
              checked={activeItem === item.name}
              onChange={(e) => this.handleItemClick(e, { name: item.name })}
            />
            <span className="radio-tile">
              <span className="radio-icon">
                <img src={item.logo} alt="" />
              </span>
              <span className="radio-label">{item.label}</span>
            </span>
          </label>
        ))}
      </div>
    );
  }
}
