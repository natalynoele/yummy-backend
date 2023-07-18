const { ctrlWrapper } = require("../../helpers");
const addRecipes = require("./addRecipes");
const deleteRecipe = require("./deleteRecipe");
const getRecipeByUserId = require("./getRecipeByUserId");

module.exports = {
  addRecipes: ctrlWrapper(addRecipes),
  deleteRecipe: ctrlWrapper(deleteRecipe),
  getRecipeByUserId: ctrlWrapper(getRecipeByUserId),
};
