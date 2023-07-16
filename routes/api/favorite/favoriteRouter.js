const express = require("express");

const favoriteRouter = express.Router();

const favoriteRecipesController = require("../../../controllers/favorite");

const { authenticate } = require("../../../middlewares");

favoriteRouter.post(
  "/:recipeId",
  authenticate,
  favoriteRecipesController.addRecipeToFavorite
);

favoriteRouter.get(
  "/",
  authenticate,
  favoriteRecipesController.getFavoriteRecipes
);

favoriteRouter.delete(
  "/:recipeId",
  authenticate,
  favoriteRecipesController.deleteRecipeFromFavorite
);

module.exports = favoriteRouter;
