'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Sections', [
      {
       name: 'Gratis',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        name: 'Nuevo',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Agotado',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Disponible',
        createdAt: new Date(),
        updatedAt: new Date()
       }
       
       
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Sections', null, {});
     
  }
};
