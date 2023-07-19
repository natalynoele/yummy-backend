const express = require("express");
const { IngredientsController } = require("../../../controllers");
const { authenticate } = require("../../../middlewares");

const ingredientsRouter = express.Router();

ingredientsRouter.get(
  "/list",
  authenticate,
  IngredientsController.getAllIngredients
);

module.exports = ingredientsRouter;
