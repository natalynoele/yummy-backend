const { ctrlWrapper } = require("../../helpers");

const register = require("./register");

const login = require("./login");

const logout = require("./logout");

const getCurrent = require("./getCurrent");

const updateUser = require("./updateUser");

const  getVerity  = require("./getVerity");

const userUpdateSubscription = require("./userUpdateSubscription");

const emailController = require("./emailControllers");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrent: ctrlWrapper(getCurrent),
  userUpdateSubscription: ctrlWrapper(userUpdateSubscription),
  updateUser: ctrlWrapper(updateUser),
  getVerity: ctrlWrapper(getVerity),
  emailController,
};
