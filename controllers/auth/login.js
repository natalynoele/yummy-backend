const { HttpError } = require("../../helpers");
const { AuthService } = require("../../services");

const login = async (req, res) => {
  const user = await AuthService.login(req);

  if (!user) {
    throw HttpError(500);
  }

  res.status(200).json({
    code: 200,
    message: "Success login",
    token: user.token,
    user: {
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl,
      favorite: user.favorite,
      shoppingList: user.shoppingList,
      subscriptionToken: user.subscriptionToken,
      registeredAt: user.createdAt,
    },
  });
};

module.exports = login;
