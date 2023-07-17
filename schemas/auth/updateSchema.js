const Joi = require("joi");

const updateSchema = Joi.object({
  name: Joi.string(),  
});

module.exports = updateSchema;
