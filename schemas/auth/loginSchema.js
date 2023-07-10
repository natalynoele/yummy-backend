const Joi = require("joi");

const { emailRegexp, nameRegexp } = require("../../constants/patterns");

const loginSchema = Joi.object({ 
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": `missing required email field`,
    "string.empty": `email cannot be an empty field`,
  }),
  password: Joi.string().required().length(6).messages({
    "any.required": `missing required password field`,
    "string.empty": `password cannot be an empty field`,
  }),
});

// const verifySchema = Joi.object({
//   email: Joi.string().pattern(emailRegexp).required().messages({
//     "any.required": `missing required email field`,
//     "string.empty": `email cannot be an empty field`,
//   }),
// });

module.exports = {
  loginSchema,
//   verifySchema,
};
