const express = require("express");

const usersRouter = express.Router();

const authController = require("../../../controllers/auth");

const { authenticate } = require("../../../middlewares");

const { validateBody } = require("../../../decorators");

const schemas = require("../../../schemas/auth");


router.post("/register", validateBody(schemas.userAuthSchema), authController.register);

router.post("/login", validateBody(schemas.userAuthSchema), authController.login);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

router.patch("/",
    authenticate,
    validateBody(schemas.userAuthSchema),
    authController.userUpdateSubscription);



module.exports = usersRouter;