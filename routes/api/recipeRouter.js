const express = require('express')
const router = express.Router()
const recipeControllers = require("../../controllers/index")

router.get("/main-page", recipeControllers.mainPage)
// router.get("/{category}", recipeControllers.getRecipesByCategory);

router.get("/category-list", recipeControllers.getCategoryList)

router.get("/:id", recipeControllers.getById);



module.exports = router