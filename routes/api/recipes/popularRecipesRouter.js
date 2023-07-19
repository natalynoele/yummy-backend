const express = require("express");
const { getPopularRecipes } = require("../../../controllers/getPopularRecipes");
const { authenticate } = require("../../../middlewares");

const popularRecipesRouter = express.Router();

popularRecipesRouter.get("/recipes", authenticate, getPopularRecipes);

module.exports = popularRecipesRouter;
