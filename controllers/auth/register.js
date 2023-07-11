const bcrypt = require("bcrypt");

const gravatar = require("gravatar");

const User = require("../../models/users/users");

const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });  
      if (!email) return res.status(400).json({ message: "Please, enter E-mail" });
      if (user) {
        throw HttpError(409, `User with email ${email} is already registered`);
      };
    
    const hashPassword = await bcrypt.hash(password, 10);

    const avatarURL = gravatar.url(email);
  
    const { _id: id } = user;
    
    const token = jwt.sign({ id }, SECRET_KEY, { expiresIn: "10d" });
    
    await User.findByIdAndUpdate(id, { token });
        
    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      avatarURL,
      verificationToken,
    });
   
  res.status(201).json({    
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

module.exports = register;
