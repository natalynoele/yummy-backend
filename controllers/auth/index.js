const { register } = require("./register");

const { login } = require("./login");

const logout = require("./logout");

const getCurrent = require("./getCurrent");

const getVerity = require("./getVerity");

const userUpdateSubscription = require("./userUpdateSubscription");

const emailController = require("./emailControllers")

module.exports = { register, login, logout, getCurrent, userUpdateSubscription, getVerity, emailController, };

