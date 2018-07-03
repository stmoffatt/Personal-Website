'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        name: 'Steven',
        email: 'Steven@email.com',
        message: 'hello this is an example of a message',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dean',
        email: 'Dean@email.com',
        message: 'hello i am dean',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'wayne',
        email: 'wayne@email.com',
        message: 'hello my name is wayne',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Uers', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
}
