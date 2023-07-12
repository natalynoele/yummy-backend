const express = require("express");
const { recipesController, ownRecipesController} = require("../../../controllers");
const {validateBody} = require("../../../decorators")
const {recipeSchema} = require("../../../schemas/recipe")
const recipesRouter = express.Router();

recipesRouter.get(
  "/categories/:category",
  recipesController.getRecipesByCategory
);
recipesRouter.get("/search", recipesController.searchByTitle);

recipesRouter.get("/ingredients", recipesController.searchByIngredients);

// recipesRouter.get("/ingredients", recipesController.searchByIngredients);

recipesRouter.get("/category-list", recipesController.getCategoryList);

recipesRouter.get("/main-page", recipesController.mainPage);

recipesRouter.get("/:id", recipesController.getById);

recipesRouter.post("/own-recipes", validateBody(recipeSchema), ownRecipesController.addRecipes);

recipesRouter.delete("/own-recipes/:id", ownRecipesController.deleteRecipe)

module.exports = recipesRouter;
