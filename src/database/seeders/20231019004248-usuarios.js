'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', [
      {
        name: "Admin",
        lastName: "TicketPro",
        email: "admin@gmail.com",
        password:"$2a$10$Xb8aoQU3jJJ8lz2xV8RBp.jd4smkyjheeIzbSDMuakwsBo4IIclRu",
        roleId: 1,
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: "Patricio",
        lastName: "Frascaroli",
        email: "pmfrascaroli@gmail.com",
        password:"$2a$10$BOuG7FuVjrq/o/7cNbbLhO.pJdU9nFnX14h3uKOugIe2qnjWYF9l2",
        roleId: 2,
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
