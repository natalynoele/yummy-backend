const ShoppingList = require("../models/ShoppingList");
const { User } = require("../models/users");
const { ctrlWrapper, HttpError } = require("../helpers");

const getShoppingList = async (req, res) => {
  if (!req.user) {
    throw HttpError(401, "Sorry, you have to autorize");
  }

  const userId = req.user._id;

  const user = await User.findById(userId).populate("shoppingList");

  if (!user) {
    throw HttpError(401, "Sorry, you have to autorize");
  }

  res.json(user.shoppingList);
};

const addItemToShoppingList = async (req, res) => {
  if (!req.user) {
    throw HttpError(401, "Sorry, you have to autorize");
  }

  const userId = req.user._id;

  const shoppingItem = await ShoppingList.create({ ...req.body });

  const user = await User.findByIdAndUpdate(
    userId,
    {
      $push: {
        shoppingList: shoppingItem,
      },
    },
    { new: true }
  ).populate("shoppingList");

  if (!user) {
    throw HttpError(404, "User not found");
  }

  res.status(200).json({
    message: "Item added to shopping list",
    item: shoppingItem,
  });
};

const deleteItemFromShoppingList = async (req, res) => {
  if (!req.user) {
    throw HttpError(401, "Sorry, you have to autorize");
  }

  const userId = req.user._id;
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(
    userId,
    {
      $pull: {
        shoppingList: id,
      },
    },
    { new: true }
  );

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  if (user.shoppingList.length === 0) {
    res.json({ shoppingList: [] });
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
