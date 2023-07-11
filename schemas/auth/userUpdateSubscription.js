const Joi = require("joi");

const subscriptionList = ["starter", "pro", "business"];

const userUpdateSubscription = Joi.object({
    subscription: Joi.string()
        .valid(...subscriptionList)
        .required(),
});

module.exports = userUpdateSubscription;