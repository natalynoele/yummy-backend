const express = require('express')
const router = express.Router()
const recipeControllers = require("../../controllers/recipes/recipeControllers")

// router.get("/:id", recipeControllers.getById);

router.get("/category-list", recipeControllers.getCategoryList)

module.exports = router