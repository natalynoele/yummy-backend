const { HttpError, ctrlWrapper } = require("../../helpers");

const { AuthService } = require("../../services");

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
    },
  });
};

module.exports = { register: ctrlWrapper(register) };
