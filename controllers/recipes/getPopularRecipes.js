// const { RecipeService } = require("../../services");
const { HttpError } = require("../../helpers");
const { Recipe } = require("../../models");

const getPopularRecipes = async (req, res) => {
  const popularRecipes = await Recipe.aggregate([
    {
      $project: {
        title: 1,
        description: 1,
        preview: 1,
        numberOfFavorite: {
          $cond: {
            if: { $isArray: "$favorites" },
            then: { $size: "$favorites" },
            else: 0,
          },
        },
      },
    },
    { $sort: { numberOfFavorite: -1 } },
    { $limit: 4 },
  ]);
  if (!popularRecipes) {
    throw HttpError(404);
  }
  console.log(popularRecipes, "popular");
  res.json(popularRecipes);
};

module.exports = getPopularRecipes;
