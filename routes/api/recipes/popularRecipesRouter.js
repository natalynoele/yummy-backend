const express = require("express");
const { getPopularRecipes } = require("../../../controllers/getPopularRecipes");

const popularRecipesRouter = express.Router();

popularRecipesRouter.get("/recipes", getPopularRecipes);

module.exports = popularRecipesRouter;
