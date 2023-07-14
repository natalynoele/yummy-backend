const { HttpError, ctrlWrapper } = require("../../helpers");
const { AuthService } = require("../../services");

const login = async (req, res) => {
  const user = await AuthService.login(req);

  if (!user) {
    throw HttpError(500);
  }

  res.status(200).json({
    message: "Success login",
    token: user.token,
    user: {
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl,
      favorite: user.favorite,
      shoppingList: user.shoppingList,
      subscriptionToken: user.subscriptionToken,
    },
  });
};

module.exports = { login: ctrlWrapper(login) };
