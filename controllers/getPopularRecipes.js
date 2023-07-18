// const { RecipeService } = require("../../services");
const { HttpError, ctrlWrapper } = require("../helpers");
const { Recipe } = require("../models");

const getPopularRecipes = async (req, res) => {
  const popularRecipes = await Recipe.aggregate([
    {
      $project: {
        _id: 1,
        title: 1,
        description: 1,
        preview: 1,
        numberOfFavorites: {
          $cond: {
            if: {
              $isArray: "$favorites",
            },
            then: {
              $size: "$favorites",
            },
            else: 0,
          },
        },
      },
    },
    {
      $sort: {
        numberOfFavorites: -1,
      },
    },
    {
      $limit: 4,
    },
  ]);

  if (!popularRecipes) {
    throw HttpError(404);
  }

  res.status(200).json({ message: "The popular recipes", popularRecipes });
};

module.exports = { getPopularRecipes: ctrlWrapper(getPopularRecipes) };
