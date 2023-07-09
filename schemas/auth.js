const Joi = require("joi");

const emailRegexp = require("../constants/patterns");

const userAuthSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
    "string.empty": `name cannot be an empty field`,
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": `missing required email field`,
    "string.empty": `email cannot be an empty field`,
  }),
  password: Joi.string().required().length(10).messages({
    "any.required": `missing required password field`,
    "string.empty": `password cannot be an empty field`,
  }),
});

const verifySchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    "any.required": `missing required email field`,
    "string.empty": `email cannot be an empty field`,
  }),
});

module.exports = {
  userAuthSchema,
  verifySchema,
};
