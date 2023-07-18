const { AuthService } = require("../../services");

const getCurrent = async (req, res) => {
  const user = await AuthService.getCurrent(req);

  if (!user)
    return res.status(401).json({
      message: "Not authorized",
    });

  res.json({
    code: 200,
    message: "Success",
    user,
  });
};
module.exports = getCurrent;
