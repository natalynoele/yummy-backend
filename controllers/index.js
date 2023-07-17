const recipesController = require("./recipes");
const authController = require("./auth");
const IngredientsController = require("./ingredients");
const ownRecipesController = require("./own-recipes");
const favoriteRecipesController = require("./favorite");

module.exports = {
  authController,
  recipesController,
  IngredientsController,
  ownRecipesController,
  favoriteRecipesController,
};
