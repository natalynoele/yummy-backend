const ShoppingList = require("../models/ShoppingList");
const { User } = require("../models/users");
const { ctrlWrapper, HttpError } = require("../helpers");

// const shoppingList = await ShoppingList.find().populate('ingredientId');

// Отримати список покупок користувача
const getShoppingList = async (req, res) => {
  const userId = req.user._id;

  const user = await User.findById(userId).populate("shoppingList");

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (!user.shoppingList) {
    return res.status(404).json({ error: "Shopping list not found" });
  }

  console.log(user.shoppingList, "shopping");
  res.json(user.shoppingList);
};

// Додати товар до списку покупок користувача
const addItemToShoppingList = async (req, res) => {
  const userId = req.user._id;

  const shoppingItem = await ShoppingList.create({ ...req.body });

  const user = await User.findByIdAndUpdate(userId, {
    $push: {
      shoppingList: shoppingItem,
    },
  });

  if (!user) {
    throw HttpError(404);
  }

  console.log(user.shoppingList.shoppingItem, "shopping");

  res.status(200).json({
    message: "Item added to shopping list",
  });
};

// Видалити товар зі списку покупок користувача
const deleteItemFromShoppingList = async (req, res) => {
  const userId = req.user._id;
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(userId, {
    $pull: {
      shoppingList: id,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (user.shoppingList.length === 0) {
    return res
      .status(404)
      .json({ error: "You don't have a shopping list yet" });
  }

  res
    .status(200)
    .json({ message: "The ingredient  was deleted from the list" });
};

module.exports = {
  getShoppingList: ctrlWrapper(getShoppingList),
  addItemToShoppingList: ctrlWrapper(addItemToShoppingList),
  deleteItemFromShoppingList: ctrlWrapper(deleteItemFromShoppingList),
};
