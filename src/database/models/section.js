"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    static associate(models) {
      Section.hasMany(models.Product, {
        as: "products",
        foreignKey: "sectionId",
      });
    }
  }
  Section.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Section",
    }
  );
  return Section;
};
