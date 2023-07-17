const {RecipeService} = require("../../services")

const searchByIngredients = async (req, res) => {
  const { id } = req.body;
  if (id === "") {
    return res.status(404).json({ message: "Not found ingredients" });
  }
const result = await RecipeService.searchByIngredients(id);
res.json(result);
};

module.exports = searchByIngredients;
