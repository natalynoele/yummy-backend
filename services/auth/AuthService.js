const { HttpError } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

const { SECRET_KEY } = process.env;

class AuthService {
  async addNewUser(req) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw HttpError(400, "Please provide all the requested fields");
    }

    const user = await User.findOne({ email });

    if (user) {
      throw HttpError(409, `Email: ${email} is already in use`);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const avatarUrl = gravatar.url(email);

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      avatarUrl,
      favorite: [],
      shoppingList: [],
    });

    return newUser;
  }

  async login(req) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw HttpError(400, "Please provide all the requsted fields");
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw HttpError(401, `Email or password is wrong`);
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      throw HttpError(401, "Email or password is wrong");
    }

    const { _id: id } = user;

    const token = jwt.sign({ id }, SECRET_KEY, {
      expiresIn: "23h",
    });

    const verifyUser = await User.findByIdAndUpdate(
      id,
      { token },
      { next: true }
    );

    return verifyUser;
  }
}

module.exports = new AuthService();
