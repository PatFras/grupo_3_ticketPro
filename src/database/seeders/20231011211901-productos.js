'use strict';
const productsJson = require('../../data/products.json')


const productsDB = productsJson.map(({name, price,description,address,image,category,location,serviceCharge,section}) => {
  return {
    name,
    price,
    address,
    categoryId : category === "cine" ? 1 : 2,
    description,
    sectionsId : section === "Nuevo" ? 1 : 2,
    location,
    serviceCharge,
    image,
    createdAt : new Date(),
    updatedAt : new Date()
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Products',productsDB, [
      
       
       
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Products', null, {});
     
  }
};
