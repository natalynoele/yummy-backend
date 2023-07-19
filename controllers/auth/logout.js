const { AuthService } = require("../../services");

const logout = async (req, res) => {
  const user = await AuthService.logout(req);
  if (!user) return res.status(401).json({ message: "Not authorized" });

  return res.status(204).json({
    message: "User logout successfully",
  });
};

module.exports = logout;
