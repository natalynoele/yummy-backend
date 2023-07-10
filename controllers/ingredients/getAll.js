const { Ingredients } = require("../../models");

const getAllIngredients = async (req, res) => {
  console.log("ingredients");
  const result = await Ingredients.find();
  console.log(result);
  res.json(result);
};

module.exports = getAllIngredients;
