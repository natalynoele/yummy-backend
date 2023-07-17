const { FavoriteService } = require("../../services");

const addRecipeToFavorite = async (req, res) => {
  const recipe = await FavoriteService.addRecipe(req);

  res.status(200).json({
    code: 200,
    message: "The recipe was added to favorite",
    recipeId: recipe._id,
  });
};

module.exports = addRecipeToFavorite;
