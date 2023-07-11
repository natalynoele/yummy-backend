const express = require("express");

const router = express.Router();

const authController = require("../../../controllers/auth");

const { authenticate } = require("../../../middlewares");

const { validateBody } = require("../../../decorators");

const { registerSchema, loginSchema } = require("../../../schemas");

router.post("/register", validateBody(registerSchema), authController.register);

router.post("/login", validateBody(loginSchema), authController.login);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

// router.patch("/",
//     authenticate,
//     validateBody(schemas.userAuthSchema),
//     authController.userUpdateSubscription);

module.exports = router;
