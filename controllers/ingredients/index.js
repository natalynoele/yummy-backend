const { ctrlWrapper } = require("../../helpers");
const getAllIngredients = require("./getAll");

module.exports = { getAllIngredients: ctrlWrapper(getAllIngredients) };
