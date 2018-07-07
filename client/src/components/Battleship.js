import React, { Component } from 'react'
import BattleshipGif from './images/battleshipsGif.mp4'
import '../App.css'

class Battleship extends Component {
  render() {
    return (
      <div>
        <div className="gifBox">
          <video autoPlay loop src={BattleshipGif} alt="Battleship-Gif" className="gif" />
        </div>
        <div className="textBox">
          <p id="text">
            Classic Battleship, test your skills against the computer as play either easy, medium, or hard
          </p>
          <a href="https://github.com/stmoffatt/Battleship" target="_blank" rel="noopener noreferrer">
            <button className="btn waves-effect waves-light alink">GitHub</button>
          </a>
          <a href="https://battleshipz.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <button className="btn waves-effect waves-light alink">Try Battleship</button>
          </a>
        </div>
      </div>
    )
  }
}
export default Battleship
