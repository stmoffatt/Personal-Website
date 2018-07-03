import React, { Component } from 'react'
import './Work.css'
import SpotiFoundImage from './images/spotifound.png'
import LiteratoImage from './images/literato.png'
import BattleShip from './images/battleship.png'
import Personal from './images/personal.png'
import { BrowserRouter as Link } from 'react-router-dom'

class Work extends Component {
  render() {
    return (
      <div>
        <div className="image-box" id="imageLeft">
          <img src={SpotiFoundImage} alt="SpotiFound Website" className="image" />
          <Link to="/Spoti-Found" className="overlay">
            <div className="header">Spoti-Found</div>
            <div className="subtitle">React - Frontend - API </div>
          </Link>
        </div>
        <div className="image-box" id="imageRight">
          <img src={LiteratoImage} alt="Literato Website" className="image" />
          <Link to="/literato" className="overlay">
            <div className="header">Literato </div>
            <div className="subtitle">React - Frontend - Backend - API </div>
          </Link>
        </div>
        <div className="image-box" id="imageLeft">
          <img src={BattleShip} alt="BattleShip Website" className="image" />
          <Link to="/battleship" div className="overlay">
            <div className="header">BattleShip</div>
            <div className="subtitle">React - Frontend </div>
          </Link>
        </div>
        <div className="image-box" id="imageRight">
          <img src={Personal} alt="Personal Website" className="image" />
          <Link to="/literato" className="overlay">
            <div className="header">Personal WebPage</div>
            <div className="subtitle">React - Frontend - Backend</div>
          </Link>
        </div>
      </div>
    )
  }
}
export default Work
