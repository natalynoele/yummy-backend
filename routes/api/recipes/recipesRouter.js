const express = require("express");
const { recipesController } = require("../../../controllers");

const recipesRouter = express.Router();

recipesRouter.get("/:category", recipesController.getRecipesByCategory);

recipesRouter.get("/category-list", recipesController.getCategoryList);

recipesRouter.get("/main-page", recipesController.mainPage);

recipesRouter.get("/:id", recipesController.getById);

module.exports = recipesRouter;
