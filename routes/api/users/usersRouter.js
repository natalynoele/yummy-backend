const express = require("express");

const router = express.Router();

const authController = require("../../../controllers/auth");

const {authenticate} = require("../../../middlewares");

const validateBody  = require("../../../decorators");

const schemas = require("../../../schemas/auth");


router.post("/register",
    validateBody(schemas.registerSchema),
    authController.register);

router.post("/login",
    validateBody(schemas.loginSchema),
    authController.login);

router.get("/current",
    authenticate,
    authController.getCurrent);

router.post("/logout",
    authenticate,
    authController.logout);

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