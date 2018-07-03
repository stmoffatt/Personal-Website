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
          <p id="text">
            The website you are currently using! browse my different projects, send me a message if you have any
            questions.
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
