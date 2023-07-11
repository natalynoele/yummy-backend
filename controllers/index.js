const recipesController = require("./recipes");
const authController = require("./auth");
const IngredientsController = require("./ingredients")
const ownRecipesController = require("./own-recipes")

module.exports = {
  authController,
  recipesController,
  IngredientsController,
  ownRecipesController,
};
