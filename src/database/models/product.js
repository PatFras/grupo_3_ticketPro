'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Section, {
        as : 'section',
        foreignKey : 'sectionId'
      });

      Product.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      });
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    serviceCharger: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    sectionsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};