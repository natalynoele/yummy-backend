const bcrypt = require("bcrypt");

const { nanoid } = require("nanoid");

const gravatar = require("gravatar");

const User = require("../../models/users/users");

const { HttpError } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email is already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  res.status(201).json({
    verificationToken,
    user: {
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
      favorite: newUser.favorite,
      shoppingList: newUser.shoppingList,
    },
  });
};

module.exports = register;
