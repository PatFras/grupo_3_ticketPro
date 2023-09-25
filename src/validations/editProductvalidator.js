const { check } = require("express-validator");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio"),

  check("price")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número válido"),

  check("serviceCharge")
    .notEmpty()
    .withMessage("La tarifa de servicio es obligatoria")
    .isNumeric()
    .withMessage("La tarifa de servicio debe ser un número válido"),

  check("address")
    .notEmpty()
    .withMessage("La dirección es obligatoria"),

  check("location")
    .notEmpty()
    .withMessage("La ubicación es obligatoria"),

  check("date")
    .notEmpty()
    .withMessage("La fecha es obligatoria"),

  check("category")
    .notEmpty()
    .withMessage("La categoría es obligatoria"),

  check("section")
    .notEmpty()
    .withMessage("La sección es obligatoria"),

 
  check("description")
    .notEmpty()
    .withMessage("La descripción es obligatoria"),
];



