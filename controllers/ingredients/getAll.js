const {IngredientsService} = require("../../services")

const getAllIngredients = async (req, res) => {
  const result = await IngredientsService.getAll(res);
  res.json(result);
};

module.exports = getAllIngredients;
