import React, { Component } from 'react'
import SpotiFoundGif from './images/spotifoundGif.mp4'
import '../App.css'

class SpotiFound extends Component {
  render() {
    return (
      <div>
        <div className="gifBox">
          <video autoPlay loop src={SpotiFoundGif} alt="SpotiFound-Gif" className="gif" />
        </div>
        <div className="textBox">
          <p>(Currently in Progress: updating styling, responsivness, and general code improvements)</p>
          <p id="text">
            Using Spotifys API, Spoti-Found is a music player that allows you to search, play and add your favorite
            music to your library in 30 second clips (Note: Spotify does not provide playback for all songs, some may
            not play)
          </p>
          <a href="https://github.com/stmoffatt/spoti-found" target="_blank" rel="noopener noreferrer">
            <button className="btn waves-effect waves-light alink">GitHub</button>
          </a>
          <a href="http://spoti-found.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <button className="btn waves-effect waves-light alink">Try Spoti-Found</button>
          </a>
        </div>
      </div>
    )
  }
}
export default SpotiFound
