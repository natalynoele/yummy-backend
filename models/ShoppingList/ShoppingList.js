const { Schema, model } = require("mongoose");

const shoppingListSchema = new Schema(
  {
    items: [{ type: String }],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false, timestamps: true }
);

const ShoppingList = model("ShoppingList", shoppingListSchema);

module.exports = ShoppingList;
