const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const deleteRecipeFromFavorite = async (req, res) => {
  const { _id } = req.user;

  const { recipeId } = req.params;

  const user = await User.findByIdAndUpdate(
    _id,
    {
      $pull: { favorite: recipeId },
    },
    { new: true }
  );

  if (!user) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({ message: "The recipe was deleted" });
};

module.exports = deleteRecipeFromFavorite;
