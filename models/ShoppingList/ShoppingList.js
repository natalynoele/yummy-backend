const { Schema, model } = require("mongoose");

const shoppingListSchema = new Schema(
  {
    ingredientId: {
      type: Schema.Types.ObjectId,
      ref: "ingredients",
    },
    recipeId: {
      type: Schema.Types.ObjectId,
      ref: "recipes",
    },
    measure: {
      type: String,
    },
    name: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const ShoppingList = model("ShoppingList", shoppingListSchema);

module.exports = ShoppingList;
