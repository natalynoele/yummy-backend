const { Recipe, User } = require("../../models");
const { HttpError, ctrlWrapper } = require("../../helpers");

const addRecipeToFavorite = async (req, res) => {
  const { _id } = req.user;

  const { recipeId } = req.params;

  const recipe = await Recipe.find({ _id: recipeId });

  if (!recipe) {
    throw HttpError(404, "Not found");
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

  res.status(200).json({
    code: 200,
    message: "The recipe was added to favorite",
    recipe: recipe,
  });
};

module.exports = { addRecipeToFavorite: ctrlWrapper(addRecipeToFavorite) };
