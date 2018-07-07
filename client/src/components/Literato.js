import React, { Component } from 'react'
import LiteratoGif from './images/literatoGif.mp4'
import '../App.css'

class Literato extends Component {
  render() {
    return (
      <div>
        <div className="gifBox">
          <video autoPlay loop src={LiteratoGif} alt="Literato-Gif" className="gif" />
        </div>
        <div className="textBox">
          <p id="text">
            Using google books API, Literato allows users to search for books, add them to their collection, and trade
            them with other users
          </p>
          <a href="https://github.com/stmoffatt/literato" target="_blank" rel="noopener noreferrer">
            <button className="btn waves-effect waves-light alink">GitHub</button>
          </a>
          <a href="https://l1terato.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <button className="btn waves-effect waves-light alink">Try Literato</button>
          </a>
        </div>
      </div>
    )
  }
}
export default Literato
