const { Schema, model } = require("mongoose");

const ingredientsSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
});

const Ingredients = model("ingredients", ingredientsSchema);
module.exports = Ingredients;
