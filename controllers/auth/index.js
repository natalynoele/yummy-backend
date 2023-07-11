const { register } = require("./register");

const { login } = require("./login");

const logout = require("./logout");

const getCurrent = require("./getCurrent");

const userUpdateSubscription = require("./userUpdateSubscription");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  userUpdateSubscription,
};
