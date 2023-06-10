import React, { Component } from "react";
import { Menu, Dropdown, Icon, Input } from 'semantic-ui-react'
import logo from "./assests/logo (1).png"
import './Navbar.css'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu pointing secondary>
                <Menu.Item>
                    <img className="logo" alt="logo" src={logo} />
                </Menu.Item>

                <Menu.Menu >
                    <Menu.Item>
                        <div class="inputbox">
                            <input required="required" type="text" />
                            <span>Search products</span>
                            <i></i>
                        </div>
                    </Menu.Item>


                    {/* <Menu.Item
                        name='shopping cart'
                        active={activeItem === 'shopping cart'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to="/cart"
                    >
                        <Icon name='shopping cart' size='big' />
                        Your Cart
                    </Menu.Item> */}

                    <Dropdown item text='My account'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Wishlist</Dropdown.Item>
                            <Dropdown.Item>Transactions</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                        <button>
                            Logout
                        </button>

                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
