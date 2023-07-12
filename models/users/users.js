const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    avatarUrl: {
      type: String,
      required: true,
    },
    subscription: {
      type: Boolean,
      required: false,
      default: false,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    favorite: {
      type: Array,
      of: {
        recipeId: {
          type: mongoose.Types.ObjectId,
          ref: "recipes",
        },
      },
      default: [],
    },
    shoppingList: {
      type: Array,
      of: {
        ingredientId: {
          // type: mongoose.Types.ObjectId,
          // ref: 'Ingredient',
        },
        measure: {
          type: String,
        },
        recipeId: {
          type: String,
          default: "",
        },
      },
      require: [true, "Add at least one ingredient"],
      default: [],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("users", usersSchema);

module.exports = User;
