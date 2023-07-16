const { recipesRouter } = require("./recipes");
const { ingredientsRouter } = require("./ingredients");
// const { usersRouter } = require("./users");
const { favoriteRouter } = require("./favorite");

module.exports = {
  recipesRouter,
  ingredientsRouter,
  //   usersRouter,
  favoriteRouter,
};
