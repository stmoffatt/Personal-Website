const request = require('supertest')
const app = require('../app')

jest.mock('../models/contact')

describe('App', () => {
  it('Tests the root path', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })

  it('Lists contacts', () => {
    return request(app)
      .get('/contact')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.contact[0].name).toBe('Sean')
      })
  })

  it('Creates contact', () => {
    return request(app)
      .post('/contact')
      .send({
        name: 'Steven Name',
        email: 'heythere@email.com',
        message: 'here is a message for you',
      })
      .then(response => {
        expect(response.statusCode).toBe(201)
        expect(response.body.contact.name).toBe('Steven Name')
        expect(response.body.contact.email).toBe('heythere@email.com')
        expect(response.body.contact.message).toBe('here is a message for you')
      })
  })

  it('Validates name when creating contact', () => {
    return request(app)
      .post('/contact')
      .send({
        email: 'heythere@email.com',
        message: 'here is a message for you',
      })
      .then(response => {
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('name')
        expect(error.msg).toBe('Is required')
      })
  })

  it('Validates email when creating contact', () => {
    return request(app)
      .post('/contact')
      .send({
        name: 'Steven Name',
        message: 'here is a message for you',
      })
      .then(response => {
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('email')
        expect(error.msg).toBe('Is required')
      })
  })

  it('Validates message when creating contact', () => {
    return request(app)
      .post('/contact')
      .send({
        name: 'Steven Name',
        email: 'heythere@email.com',
      })
      .then(response => {
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('message')
        expect(error.msg).toBe('Is required')
      })
  })
})
