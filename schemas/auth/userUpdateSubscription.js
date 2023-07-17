const Joi = require("joi");

const userUpdateSubscription = Joi.object({
    inputEmail: Joi.string().required(),
});

module.exports = userUpdateSubscription;