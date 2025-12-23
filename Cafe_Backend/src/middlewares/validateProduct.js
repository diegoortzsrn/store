const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio"),

  body("price")
    .isFloat({ gt: 0 })
    .withMessage("El precio debe ser mayor a 0"),

  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("El stock no puede ser negativo"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    next();
  }
];

module.exports = validateProduct;