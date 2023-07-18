// const { ctrlWrapper } = require("../../helpers");
const getById = require("./getById");
const getCategoryList = require("./getCategoryList");
const getRecipesByCategory = require("./getRecipesByCategory");
const mainPage = require("./main-page");
const searchByTitle = require("./searchByTitle");
const searchByIngredients = require("./searchByIngredients");

module.exports = {
  getById,
  getCategoryList,
  getRecipesByCategory,
  mainPage,
  searchByTitle,
  searchByIngredients,
};
