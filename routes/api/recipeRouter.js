const express = require('express')
const router = express.Router()
const recipeControllers = require("../../controllers/index")

router.get("/:category", recipeControllers.getRecipesByCategory)

router.get("/category-list", recipeControllers.getCategoryList)

router.get("/main-page", recipeControllers.mainPage)

router.get("/:id", recipeControllers.getById);



module.exports = router