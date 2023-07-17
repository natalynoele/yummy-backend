const { HttpError } = require("../../helpers");
const { Recipe } = require("../../models");

const getRecipeByUserId = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Recipe.find({ owner });

  if (!result) {
    throw new HttpError(404, `Recipe not found`);
  }
  res.status(200).json(result);
};

module.exports = getRecipeByUserId;
