import React, { Component } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import Work from './components/Work'
import Literato from './components/Literato'
import Battleship from './components/Battleship'
import SpotiFound from './components/SpotiFound'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

var apiUrl
if (process.env.NODE_ENV === 'production') {
  apiUrl = ''
} else {
  apiUrl = 'http://localhost:3001'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: apiUrl,
      newMessageSuccess: false,
      errors: null,
    }
  }

  handleNewMessage(params) {
    fetch(`${this.state.apiUrl}/contact`, {
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(rawResponse => {
        return rawResponse.json()
      })
      .then(parsedResponse => {
        if (parsedResponse.errors) {
          this.setState({ errors: parsedResponse.errors })
        } else {
          this.setState({
            newMesssageSuccess: true,
          })
        }
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <NavigationBar />
                <Work />
              </div>
            )}
          />
          <Route
            exact
            path="/spoti-found"
            render={props => (
              <div>
                <NavigationBar />
                <SpotiFound />
              </div>
            )}
          />
          <Route
            exact
            path="/literato"
            render={props => (
              <div>
                <NavigationBar />
                <Literato />
              </div>
            )}
          />
          <Route
            exact
            path="/battleship"
            render={props => (
              <div>
                <NavigationBar />
                <Battleship />
              </div>
            )}
          />
          <Route
            exact
            path="/contact"
            render={props => (
              <div>
                <NavigationBar />
                <Contact onSubmit={this.handleNewMessage.bind(this)} />
                {this.state.newMessageSuccess && <Redirect to="/" />}
              </div>
            )}
          />
        </div>
      </Router>
    )
  }
}

export default App
