const { HttpError } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

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
    // const verificationToken = nanoid();
    const avatarUrl = gravatar.url(email);

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      avatarUrl,
    });

    return newUser;
  }
}

module.exports = new AuthService();
