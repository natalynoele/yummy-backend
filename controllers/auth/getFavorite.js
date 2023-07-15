const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const getFavoriteRecipe = async (req, res) => {
  const { _id } = req.user;
  const data = await User.findById(_id).populate("favorite");
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data.favorite);
};

module.exports = getFavoriteRecipe;
