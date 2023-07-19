const express = require("express");
const {
  resendSubscribe,
  subscribe,
} = require("../../../controllers/auth/emailControllers");
const schemas = require("../../../schemas/auth");
const { validateBody } = require("../../../decorators");
const { authenticate } = require("../../../middlewares");

const subscribeRouter = express.Router();

subscribeRouter.post(
  "/",
  authenticate,
  validateBody(schemas.verifySchema),
  resendSubscribe
);

subscribeRouter.get("/:subscriptionToken", authenticate, subscribe);

module.exports = subscribeRouter;
