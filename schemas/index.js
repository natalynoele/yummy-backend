const { registerSchema, loginSchema } = require("./auth");
const { recipeSchema} = require("./recipe")
module.exports = {
  registerSchema,
  loginSchema,
  recipeSchema,
};
