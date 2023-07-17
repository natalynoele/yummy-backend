const { FavoriteService } = require("../../services");

const addRecipeToFavorite = async (req, res) => {
  const recipe = await FavoriteService.addRecipe(req);

  console.log(recipe, "add");

  res.status(200).json({
    code: 200,
    message: "The recipe was added to favorite",
    recipeId: recipe._id,
  });
};

module.exports = addRecipeToFavorite;
