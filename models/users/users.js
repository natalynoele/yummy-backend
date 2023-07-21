const { Schema, model, SchemaTypes } = require("mongoose");

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
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    favorite: [{ type: SchemaTypes.ObjectId, ref: "recipes" }],

    shoppingList: [
      {
        type: Schema.Types.ObjectId,
        ref: "ShoppingList",
      },
    ],
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

usersSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    next(new Error("Email already exists"));
  } else {
    next(error);
  }
});

const User = model("users", usersSchema);

module.exports = User;
