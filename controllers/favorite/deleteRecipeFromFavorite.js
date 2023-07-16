const { FavoriteService } = require("../../services");

const deleteRecipeFromFavorite = async (req, res) => {
  const result = await FavoriteService.deleteRecipe(req);

  res.status(200).json(result);
};

module.exports = deleteRecipeFromFavorite;
