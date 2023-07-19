const { HttpError, getDaysOnSite } = require("../../helpers");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { SECRET_KEY } = process.env;

class AuthService {
  async addNewUser(req) {
    const { email, password } = req.body;

    if (!email || !password) {
      throw HttpError(400, "Please provide all the requested fields");
    }

    const user = await User.findOne({ email });

    if (user) {
      throw HttpError(409, `User with email ${email} is already registered`);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const avatarUrl = gravatar.url(email);

    const subscriptionToken = nanoid();

    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      avatarUrl,      
      subscriptionToken,
    });

    const { _id: id } = newUser;
    const token = jwt.sign({ id }, SECRET_KEY, {
      expiresIn: "23h",
    });

    const theUser = await User.findByIdAndUpdate(id, { token }, { new: true });

    return theUser;
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
      { new: true }
    );

    return verifyUser;
  }

  async update(req, res) {
    const { _id, avatarUrl, name } = req.user;

    if (!req.body.name && !req.file) {
      res.status(200).json({ message: "nothing change" });
    }
    const avatar = req.file ? req.file.path : avatarUrl;
    const newName = req.body.name ? req.body.name : name;

    const updated = await User.findByIdAndUpdate(
      _id,
      { name: newName, avatarUrl: avatar },
      { new: true }
    );

    return updated;
  }

  async logout(req) {
    const { _id } = req.user;
    const user = await User.findByIdAndUpdate(_id, { $unset: { token: " " } });

    user.token = null;
    await user.save();
    return user;
  }

  async getCurrent(req) {
    const { name, email, avatarUrl, favorite, shoppingList, createdAt } =
      req.user;

    const days = getDaysOnSite(createdAt);

    const user = {
      name,
      email,
      avatarUrl,
      favorite,
      shoppingList,
      createdAt,
      days,
    };
    return user;
  }

  async verityToken(req) {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });
    const newData = {
      verify: true,
      $unset: { verificationToken: 1 },
    };
    await User.findByIdAndUpdate(user._id, newData);
  }

  // getDaysOnSite(startDate) {
  //   const registerDate = new Date(startDate);
  //   const today = Date.now();
  //   return Math.round((today - registerDate) / (1000 * 60 * 60 * 24));
  // }
}

module.exports = new AuthService();
