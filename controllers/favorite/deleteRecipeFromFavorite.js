const { HttpError } = require("../../helpers");
const { FavoriteService } = require("../../services");

const deleteRecipeFromFavorite = async (req, res) => {
  const user = await FavoriteService.deleteRecipe(req);

  if (!user) {
    throw HttpError(
      404,
      "Sorry, but it appears that there is no user with ID you provided"
    );
  }

  res.status(204);
};

module.exports = deleteRecipeFromFavorite;
