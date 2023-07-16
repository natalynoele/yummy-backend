const { HttpError } = require("../../helpers");
const { User, Recipe } = require("../../models");

class FavoriteService {
  async addRecipe(req) {
    const { _id } = req.user;
    const { recipeId } = req.params;

    const recipe = await Recipe.find({ _id: recipeId });

    if (!recipe) {
      throw HttpError(
        404,
        "Sorry, but it appears that there is no recipe with ID you provided"
      );
    }

    const user = await User.updateOne(
      { _id },
      {
        $push: {
          favorite: {
            $each: recipe,
            $position: 0,
          },
        },
      },

      { new: true }
    );

    if (!user) {
      throw HttpError(
        404,
        "Sorry, but it appears that there is no user with ID you provided"
      );
    }

    return recipe;
  }

  async deleteRecipe(req) {
    const { _id } = req.user;

    const { recipeId } = req.params;

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

    return data.favorite;
  }
}

module.exports = new FavoriteService();
