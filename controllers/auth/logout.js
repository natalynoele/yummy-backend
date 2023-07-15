// const User = require("../../models/users/users");
const { ctrlWrapper } = require("../../helpers");

const { AuthService } = require("../../services");

const logout = async (req, res) => {
  const user = await AuthService.logout(req);
    if (!user) return res.status(401).json({ message: 'Not authorized' })
    
  // const { _id } = req.user;
  // await User.findByIdAndUpdate(_id, { $unset: { token: 1 } });

  return res.status(204).json({
    message: 'User logout successfully',
  });
};

module.exports = { logout: ctrlWrapper(logout) };
