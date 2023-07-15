const { register } = require("./register");

const { login } = require("./login");

const logout = require("./logout");

const { getCurrent } = require("./getCurrent");

const { updateUser } = require("./updateUser");

const getVerity = require("./getVerity");

const userUpdateSubscription = require("./userUpdateSubscription");

const emailController = require("./emailControllers");

const { addRecipeToFavorite } = require("./addRecipeToFavorite");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  userUpdateSubscription,
  updateUser,
  getVerity,
  emailController,
  addRecipeToFavorite,
};
