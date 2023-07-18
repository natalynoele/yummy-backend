const { RecipeService } = require("../../services");

const searchByIngredients = async (req, res) => {
  const { ingredients } = req.query;
  if (ingredients === "") {
    return res.status(404).json({ message: "Not found ingredients" });
  }
  const result = await RecipeService.searchByIngredients(ingredients);
  res.json(result);
};

module.exports = searchByIngredients;
