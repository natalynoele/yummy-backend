const ShoppingList = require("../models/ShoppingList");
const { User } = require("../models/users");
const ctrlWrapper = require("../helpers/ctrlWrapper");

// Отримати список покупок користувача
const getShoppingList = async (req, res) => {
  const userId = req.user._id;
  // console.log(userId, "shopping");
  try {
    const user = await User.findById(userId).populate("shoppingList");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const shoppingList = user.shoppingList;

    if (!shoppingList) {
      return res.status(404).json({ error: "Shopping list not found" });
    }
    res.json(shoppingList);
  } catch (error) {
    res.json(error);
  }
};

// Додати товар до списку покупок користувача
const addItemToShoppingList = async (req, res) => {
  const userId = req.user._id;
  const { item } = req.body;

  try {
    const user = await User.findById(userId).populate("shoppingList");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    let shoppingList = user.shoppingList;

    if (!shoppingList) {
      shoppingList = new ShoppingList({ items: [], user: user._id });
    }

    shoppingList.items.push(item);
    await shoppingList.save();

    user.shoppingList = shoppingList._id;
    await user.save();

    res.json({ message: "Item added to shopping list" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Видалити товар зі списку покупок користувача
const deleteItemFromShoppingList = async (req, res) => {
  const userId = req.user._id;
  const { id } = req.params;

  try {
    const user = await User.findById(userId).populate("shoppingList");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const shoppingList = user.shoppingList;

    if (!shoppingList) {
      return res.status(404).json({ error: "Shopping list not found" });
    }

    const itemIndex = shoppingList.items.findIndex(
      (item) => item._id.toString() === id
    );
    if (itemIndex === -1) {
      return res.status(404).json({ error: "Item not found" });
    }

    shoppingList.items.splice(itemIndex, 1);
    await shoppingList.save();

    res.json({ message: "Item removed from shopping list" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getShoppingList: ctrlWrapper(getShoppingList),
  addItemToShoppingList: ctrlWrapper(addItemToShoppingList),
  deleteItemFromShoppingList: ctrlWrapper(deleteItemFromShoppingList),
};
