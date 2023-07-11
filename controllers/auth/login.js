const { HttpError, ctrlWrapper } = require("../../helpers");
const { AuthService } = require("../../services");

const login = async (req, res) => {
  const user = await AuthService.login(req);

  if (!user) {
    throw HttpError(500);
  }

  res.status(200).json({
    code: 200,
    message: "Success login",
    user,
  });
};

module.exports = { login: ctrlWrapper(login) };
