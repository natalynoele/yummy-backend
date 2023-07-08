const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const User = require("../../models/users/users");

const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(409, `User with email ${email} is already registered`);
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Password is wrong");
  }

  const { _id: id } = user;

  const token = jwt.sign({ id }, SECRET_KEY, { expiresIn: "23h" });

  await User.findByIdAndUpdate(id, { token });

  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
