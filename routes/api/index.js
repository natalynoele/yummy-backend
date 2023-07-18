const { recipesRouter } = require("./recipes");
const { ingredientsRouter } = require("./ingredients");
const { usersRouter } = require("./users");
const { favoriteRouter } = require("./favorite");
const popularRecipesRouter = require("./recipes/popularRecipesRouter");

module.exports = {
  recipesRouter,
  ingredientsRouter,
  usersRouter,
  favoriteRouter,
  popularRecipesRouter,
};
