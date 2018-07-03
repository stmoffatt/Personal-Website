import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import './NavigationBar.css'

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar brand="Sean Moffatt" right>
          <NavItem id="work">
            <Link to="/">Work</Link>
          </NavItem>
          <NavItem id="contact" href="contact">
            <Link to="/contact">Contact</Link>
          </NavItem>
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar
