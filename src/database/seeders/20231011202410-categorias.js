'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Categories', [
        {
       name: 'cine',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        name: 'show',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'teatro',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'streaming',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'festival',
        createdAt: new Date(),
        updatedAt: new Date()
       }
       
       

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
