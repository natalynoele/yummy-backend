const express = require("express");
const { IngredientsController} = require("../../../controllers");

const ingredientsRouter = express.Router();

ingredientsRouter.get("/list", IngredientsController.getAllIngredients);

module.exports = ingredientsRouter;