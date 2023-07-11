const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const User = require("../../models/users/users");

const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!email) return res.status(400).json({ message: "Please, enter E-mail" });
  if (!user) {
    throw HttpError(401, `User with email ${email} don't registered`);
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Password is wrong");
  }

  const { _id: id } = user;

  const token = jwt.sign({ id }, SECRET_KEY, { expiresIn: "10d" });

  await User.findByIdAndUpdate(id, { token });

  res.json({
    token,
    user: {
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
      favorite: newUser.favorite,
      shoppingList: newUser.shoppingList,
    },
  });
};

module.exports = login;
