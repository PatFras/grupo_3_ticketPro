'use strict';
const productsJson = require('../../data/products.json');
const sectionsJson = require('../../data/sections.json');
const categoriesJson = require('../../data/categories.json');


const categoryMap = Object.fromEntries(categoriesJson.map(category => [category.name, category.id]));
const sectionMap = Object.fromEntries(sectionsJson.map(section => [section.name, section.id]));

const productsDB = productsJson.map(({ name, price, description, address, image, category, location, serviceCharge, section, date }) => {
  return {
    name,
    price,
    address,
    categoryId: categoryMap[category],
    description,
    sectionId: sectionMap[section],
    location,
    serviceCharge,
    image,
    date,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date()
  };
});


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', productsDB, [], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
