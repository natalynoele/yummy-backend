const { Ingredients } = require("../../models");

const getAllIngredients = async (req, res) => {
  const result = await Ingredients.find();
  res.json(result);
};

module.exports = getAllIngredients;
