const { ctrlWrapper } = require("../../helpers");

const { AuthService } = require("../../services");

const getCurrent = async (req, res) => {
const getUser = await AuthService.getCurrent(req);
  
    if (!getUser) return res.status(401).json({
      message: 'Not authorized'
    });

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
