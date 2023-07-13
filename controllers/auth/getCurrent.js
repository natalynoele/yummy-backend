const getCurrent = async (req, res) => {
  const { name, email, avatarUrl, favorite, shoppingList } = req.user;

  res.json({
    code: 200,
    message: "Success",
    user: {
      name,
      email,
      avatarUrl,
      favorite,
      shoppingList,
    },
  });
};
module.exports = getCurrent;
