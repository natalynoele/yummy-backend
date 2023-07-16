const { ctrlWrapper } = require("../../helpers");

const addRecipeToFavorite = require("./addRecipeToFavorite");

const getFavoriteRecipes = require("./getFavoriteRecipes");

const deleteRecipeFromFavorite = require("./deleteRecipeFromFavorite");

module.exports = {
  addRecipeToFavorite: ctrlWrapper(addRecipeToFavorite),
  getFavoriteRecipes: ctrlWrapper(getFavoriteRecipes),
  deleteRecipeFromFavorite: ctrlWrapper(deleteRecipeFromFavorite),
};
