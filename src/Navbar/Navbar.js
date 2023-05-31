import React, { Component } from "react";
import { Menu, Button , Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu pointing secondary>
                <Menu.Item>
                    <img alt="logo" src='/logo.png' />
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='features'
                        active={activeItem === 'features'}
                        onClick={this.handleItemClick}
                    >
                        HOME
                    </Menu.Item>

                    <Menu.Item
                        name='testimonials'
                        active={activeItem === 'testimonials'}
                        onClick={this.handleItemClick}
                    >
                        ABOUT
                    </Menu.Item>

                    <Menu.Item
                        name='sign-in'
                        active={activeItem === 'sign-in'}
                        onClick={this.handleItemClick}
                    >
                        PRODUCTS
                    </Menu.Item>

                    <Menu.Item
                        name='sign-in'
                        active={activeItem === 'sign-in'}
                        onClick={this.handleItemClick}
                    >
                        CONTACT
                    </Menu.Item>

                    <Menu.Item>
                        <Button primary>Sign up</Button>
                    </Menu.Item>

                    <Menu.Item
                        name='shopping cart'
                        active={activeItem === 'shopping cart'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='shopping cart' size='big'/>
                     
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
