const {RecipeService} = require("../../services")

const mainPage = async (req, res) => {
  const mainPageRecipe = await RecipeService.mainPage();

  res.status(200).json(mainPageRecipe);
};

module.exports = mainPage;
