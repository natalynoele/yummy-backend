const Joi = require("joi");

const updateSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = updateSchema;
