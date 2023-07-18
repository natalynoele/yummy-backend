const { RecipeService } = require("../../services");

const searchByIngredients = async (req, res) => {
  const { ingredients } = req.query;

  if (ingredients === "") {
    return;
  }

  const result = await RecipeService.searchByIngredients(ingredients);

  res.json(result);
};

module.exports = searchByIngredients;
