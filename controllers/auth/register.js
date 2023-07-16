const { HttpError } = require("../../helpers");

const { AuthService } = require("../../services");

const register = async (req, res) => {
  const newUser = await AuthService.addNewUser(req);

  if (!newUser) {
    throw HttpError(500);
  }

  return res.status(201).json({
    code: 201,
    message: "success",
    token: newUser.token,
    user: {
      name: newUser.name,
      email: newUser.email,
      avatarUrl: newUser.avatarUrl,
      favorite: newUser.favorite,
      shoppingList: newUser.shoppingList,
      subscriptionToken: newUser.subscriptionToken,
      registeredAt: newUser.createdAt,
    },
  });
};

module.exports = register;
