const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
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

    subscriptionToken: {
      type: String,
      default: "",
    },

    token: String,
  },
  { versionKey: false, timestamps: true }
);

const User = model("users", usersSchema);

module.exports = User;
