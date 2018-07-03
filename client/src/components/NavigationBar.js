import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import './NavigationBar.css'

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar brand="Sean Moffatt" right>
          <Link to="/">
            <NavItem id="work">Work</NavItem>
          </Link>
          <Link to="/contact">
            <NavItem id="contact">Contact</NavItem>
          </Link>
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar
