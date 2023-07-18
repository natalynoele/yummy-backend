const { HttpError } = require("../../helpers");
const { User, Recipe } = require("../../models");

class FavoriteService {
  async addRecipe(req) {
    const { _id: userId } = req.user;
    const { recipeId } = req.params;

    const recipe = await Recipe.findByIdAndUpdate(
      recipeId,
      {
        $addToSet: { favorites: userId },
      },
      { new: true }
    );

    if (!recipe) {
      throw HttpError(
        404,
        "Sorry, but there doesn't appear to be such a recipe."
      );
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: {
          favorite: recipe._id,
        },
      },
      { new: true }
    );

    if (!user) {
      throw HttpError(401, "Sorry, but it appears you are not authorized");
    }

    return recipe;
  }

  async deleteRecipe(req) {
    const { _id } = req.user;

    if (!_id) {
      throw HttpError(401);
    }

    const { recipeId } = req.params;

    await Recipe.findByIdAndUpdate(
      recipeId,
      {
        $pull: { favorites: _id },
      },
      { new: true }
    );

    const user = await User.updateOne(
      { _id },
      {
        $pull: { favorite: recipeId },
      },
      { new: true }
    );

    return user;
  }

  async getFavorite(req) {
    const { _id } = req.user;
    const data = await User.findById(_id).populate("favorite");

    if (!data) {
      throw HttpError(401, "Um, it seems you are not authorized");
    }

    return data.favorite;
  }
}

module.exports = new FavoriteService();
