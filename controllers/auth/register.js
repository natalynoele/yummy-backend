const { HttpError, ctrlWrapper } = require("../../helpers");

const { AuthService } = require("../../services");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {

  const newUser = await AuthService.addNewUser(req);

  if (!newUser) {
    throw HttpError(500, "Well, this is embarrassing... But try again, please");
  }

  return res.status(201).json({
    code: 201,
    message: "success",
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      subscription: newUser.subscription,
      avatarUrl: newUser.avatarUrl,
      verificationToken: newUser.verificationToken,
    subscriptionToken: newUser.subscriptionToken
    },
  });

};

module.exports = { register: ctrlWrapper(register) };
