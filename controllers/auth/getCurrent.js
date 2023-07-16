const { ctrlWrapper } = require("../../helpers");

const getCurrent = async (req, res) => {
  const { name, email, avatarUrl, favorite, shoppingList, createdAt } =
    req.user;

  res.json({
    code: 200,
    message: "Success",
    user: {
      name,
      email,
      avatarUrl,
      favorite,
      shoppingList,
      createdAt,
    },
  });
};
module.exports = { getCurrent: ctrlWrapper(getCurrent) };
