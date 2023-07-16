const express = require("express");

const router = express.Router();

const authController = require("../../../controllers/auth");

const { authenticate, upload } = require("../../../middlewares");

const { validateBody } = require("../../../decorators");

const {
  registerSchema,
  loginSchema,
  userUpdateSubscription,
  updateSchema,
} = require("../../../schemas");

router.post("/register", validateBody(registerSchema), authController.register);

router.post("/login", validateBody(loginSchema), authController.login);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

router.patch(
  "/update",
  authenticate,
  validateBody(userUpdateSubscription),
  authController.userUpdateSubscription
);
router.put(
  "/update",
  authenticate,
  validateBody(updateSchema),
  upload.single("avatar"),
  authController.updateUser
);

router.get("/verity/:verificationToken", authController.getVerity);

module.exports = router;
