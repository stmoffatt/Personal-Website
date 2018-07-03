import React, { Component } from 'react'
import './Work.css'
import SpotiFoundImage from './images/spotifound.png'
import LiteratoImage from './images/literato.png'
import BattleShip from './images/battleship.png'
import Personal from './images/personal.png'
import SpotiFound from './SpotiFound'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class Work extends Component {
  render() {
    return (
      <div>
        <div className="image-box" id="imageLeft">
          <img src={SpotiFoundImage} alt="SpotiFound Website" className="image" />
          <Link to="/spoti-found" className="overlay">
            <div className="header">Spoti-Found</div>
            <div className="subtitle">React - Frontend - API </div>
          </Link>
        </div>
        <div className="image-box" id="imageRight">
          <img src={LiteratoImage} alt="Literato Website" className="image" />
          <a href="/literato" className="overlay">
            <div className="header">Literato </div>
            <div className="subtitle">React - Frontend - Backend - API </div>
          </a>
        </div>
        <div className="image-box" id="imageLeft">
          <img src={BattleShip} alt="BattleShip Website" className="image" />
          <a href="/battleship" div className="overlay">
            <div className="header">BattleShip</div>
            <div className="subtitle">React - Frontend </div>
          </a>
        </div>
        <div className="image-box" id="imageRight">
          <img src={Personal} alt="Personal Website" className="image" />
          <a href="/literato" className="overlay">
            <div className="header">Personal WebPage</div>
            <div className="subtitle">React - Frontend - Backend</div>
          </a>
        </div>
      </div>
    )
  }
}
export default Work
