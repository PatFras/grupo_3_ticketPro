"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Feria",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Recital",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Teatro",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Stand Up",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Festival",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
