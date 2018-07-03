'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = function(sequelize, DataTypes) {
  return dbMock.define('Contact', {
    name: 'Sean',
    email: 'sean@email.com',
    message: 'hey there here is a message',
  })
}
