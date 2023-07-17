const { HttpError } = require("../../helpers");
const { FavoriteService } = require("../../services");

const deleteRecipeFromFavorite = async (req, res) => {
  const user = await FavoriteService.deleteRecipe(req);

  if (!user) {
    throw HttpError(401);
  }

  // res.status(204);
  res.status(200).json({ message: "recipe has deleted" });
};

module.exports = deleteRecipeFromFavorite;
