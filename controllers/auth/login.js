const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const User = require("../../models/users/users");

const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, `Incorrect email or password`);
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Incorrect email or password");
  }

  const { _id: id } = user;

  const token = jwt.sign({ id }, SECRET_KEY, { expiresIn: "23h" });

  await User.findByIdAndUpdate(id, { token });

  res.json({
    token,
    user: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      favorite: user.favorite,
      shoppingList: user.shoppingList,
    },
  });
};

module.exports = login;
