const { RecipeService } = require("../../services");

const getById = async (req, res) => {
  const result = await RecipeService.getByIdRecipe(req);

  res.status(200).json(result);
};

module.exports = getById;
