const Joi = require("joi");

const recipeSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  area: Joi.string(),
  preparation: Joi.string().required(),
  description: Joi.string().required(),
  photo: Joi.string().required(),
  thumb: Joi.string().required(),
  youtube: Joi.string(),
  time: Joi.string().required(),
  tags: Joi.array().required(),
  ingredients: Joi.array().required(),
});

module.exports = {
  recipeSchema,
};
