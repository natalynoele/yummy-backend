const recipesController = require("./recipes");
const authController = require("./auth");
const IngredientsController = require("./ingredients")

module.exports = {
  authController,
  recipesController,
  IngredientsController,
};
