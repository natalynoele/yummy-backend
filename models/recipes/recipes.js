const { Schema, model } = require("mongoose");

const recipesSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    area: {
      type: String,
    },
    instructions: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    preview: {
      type: String,
      require: true,
    },
    thumb: {
      type: String,
      require: true,
    },
    time: {
      type: String,
      require: true,
    },
    youtube: {
      type: String,
    },
    tags: {
      type: Array,
    },
    ingredients: {
      type: Array,
      require: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    favorites: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false }
);

const Recipe = model("recipes", recipesSchema);
module.exports = { Recipe };
