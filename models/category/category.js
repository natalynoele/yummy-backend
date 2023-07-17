const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
    name: {
      type: String,
      require: true,
    },
  });

const Category = model("categories", categorySchema);
module.exports = { Category };