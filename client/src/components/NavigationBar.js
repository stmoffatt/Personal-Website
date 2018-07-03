import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'

import './NavigationBar.css'

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar brand="Sean Moffatt" right>
          <NavItem id="work" href="/">
            Work
          </NavItem>
          <NavItem id="contact" href="contact">
            Contact
          </NavItem>
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar
