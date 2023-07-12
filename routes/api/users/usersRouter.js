const express = require("express");

const router = express.Router();

const authController = require("../../../controllers/auth");

const {authenticate} = require("../../../middlewares");

const { validateBody } = require("../../../decorators");

const { registerSchema, loginSchema } = require("../../../schemas");

router.post("/register", validateBody(registerSchema), authController.register);

router.post("/login", validateBody(loginSchema), authController.login);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

router.patch(
    "/update",
    authenticate,
    validateBody(schemas.userUpdateSubscription),
    authController.userUpdateSubscription
);

router.get("/verity/:verificationToken",
    authController.getVerity);

// router.patch(
//   '/avatars',
//   upload.single("avatarURL"),
//   authController(updateAvatarUrl)
// );

module.exports = router;
