import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'
import './Contact.css'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: {
        name: '',
        email: '',
        message: '',
      },
    }
  }

  handleChange(event) {
    const contactState = Object.assign({}, this.state.contact)
    contactState[event.target.name] = event.target.value
    console.log(contactState)
    this.setState({ contact: contactState })
  }

  handleSubmit() {
    this.props.onSubmit(this.state.contact)
    console.log(this.state.contact)
  }

  render() {
    return (
      <div className="contact-section" id="contact">
        <h3 className="contact-title">CONTACT ME</h3>
        <div className="contact">
          <form>
            <Row>
              <Input
                s={6}
                label="Full Name"
                type="text"
                name="name"
                value={this.state.contact.name}
                onChange={this.handleChange.bind(this)}
              />
              <Input
                s={6}
                type="email"
                label="Email"
                name="email"
                value={this.state.contact.email}
                onChange={this.handleChange.bind(this)}
              />
              <Input
                type="textarea"
                label="Message"
                s={12}
                name="message"
                value={this.state.contact.message}
                onChange={this.handleChange.bind(this)}
              />
              <div className="form-button">
                <Button waves="light" onClick={this.handleSubmit.bind(this)} id="submit">
                  Submit
                </Button>
              </div>
            </Row>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
