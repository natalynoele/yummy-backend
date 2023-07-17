const express = require("express");
const router = express.Router();
const authenticate = require("../../middlewares/authenticate");
const shoppingListController = require("../../controllers/shoppingListController");

router.get("/", authenticate, shoppingListController.getShoppingList);

router.post("/", authenticate, shoppingListController.addItemToShoppingList);

router.delete("/:id", authenticate, shoppingListController.deleteItemFromShoppingList);

module.exports = router;
