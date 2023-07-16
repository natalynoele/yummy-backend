const { HttpError } = require("../../helpers");
const { FavoriteService } = require("../../services");

const getFavoriteRecipes = async (req, res) => {
  const recipes = await FavoriteService.getFavorite(req);

  if (!recipes) {
    throw HttpError(404, "Sorry, but it appears that there are no recipes");
  }

  res.status(200).json(recipes);
};

module.exports = getFavoriteRecipes;
