const Joi = require("joi");

const updateSchema = Joi.object({
  name: Joi.string(),
  avatar: Joi.string(),
});

module.exports = updateSchema;
