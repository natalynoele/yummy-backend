const { recipesRouter, popularRecipesRouter } = require("./recipes");
const { ingredientsRouter } = require("./ingredients");
const { usersRouter } = require("./users");
const { favoriteRouter } = require("./favorite");
const shoppingListRouter = require("./shoppingListRouter");
const { subscribeRouter } = require("./subscribe");

module.exports = {
  recipesRouter,
  ingredientsRouter,
  usersRouter,
  favoriteRouter,
  popularRecipesRouter,
  shoppingListRouter,
  subscribeRouter,
};
