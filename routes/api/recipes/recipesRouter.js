const express = require("express");
const { recipesController } = require("../../../controllers");

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

module.exports = recipesRouter;
