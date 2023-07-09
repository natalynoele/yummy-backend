const express = require('express');
const router = express.Router();
const {resendSubscribe,subscribe} = require('../../../controllers/auth/emailControllers');
const schemas = require("../../../schemas/auth");
const  validateBody  = require("../../../decorators");

router.post('/', validateBody(schemas.verifySchema), resendSubscribe);

router.get("/:subscriptionToken", subscribe);

module.exports = router;
