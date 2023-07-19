const express = require("express");
const {
  recipesController,
  ownRecipesController,
} = require("../../../controllers");
const { validateBody } = require("../../../decorators");
const { authenticate, upload } = require("../../../middlewares");
const { addRecipeSchema } = require("../../../schemas/recipe");

const recipesRouter = express.Router();

recipesRouter.get(
  "/categories/:category",
  authenticate,
  recipesController.getRecipesByCategory
);
recipesRouter.get("/search", authenticate, recipesController.searchByTitle);

recipesRouter.get(
  "/ingredients",
  authenticate,
  recipesController.searchByIngredients
);

recipesRouter.get(
  "/category-list",
  authenticate,
  recipesController.getCategoryList
);

recipesRouter.get("/main-page", authenticate, recipesController.mainPage);

recipesRouter.get(
  "/own-recipes/",
  authenticate,
  ownRecipesController.getRecipeByUserId
);

recipesRouter.get("/:id", authenticate, recipesController.getById);

recipesRouter.post(
  "/own-recipes",
  authenticate,
  upload.single("thumb"),
  validateBody(addRecipeSchema),
  ownRecipesController.addRecipes
);

recipesRouter.delete(
  "/own-recipes/:id",
  authenticate,
  ownRecipesController.deleteRecipe
);

module.exports = recipesRouter;
