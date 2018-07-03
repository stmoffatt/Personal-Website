import React, { Component } from 'react'
import PersonalWebpageGif from './images/personalWebpageGif.mp4'
import '../App.css'

class PersonalWebpage extends Component {
  render() {
    return (
      <div>
        <div className="gifBox">
          <video autoPlay loop src={PersonalWebpageGif} alt="PersonalWebpage-Gif" className="gif" />
        </div>
        <div className="textBox">
          <p>(Currently in Progress: updating styling, responsivness, and general code improvements)</p>
          <p id="text">
            Using Spotifys API, Spoti-Found is a music player that allows you to search, play and add your favorite
            music to your library (Note: Spotify does not provide playback for all songs, some may not play)
          </p>
          <a href="https://github.com/stmoffatt/personal-website" target="_blank" rel="noopener noreferrer">
            <button className="btn waves-effect waves-light alink">GitHub</button>
          </a>
          <a href="https://sean-moffatt.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <button className="btn waves-effect waves-light alink">Try Personal Website</button>
          </a>
        </div>
      </div>
    )
  }
}
export default PersonalWebpage
