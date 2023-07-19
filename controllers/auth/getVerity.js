const { AuthService } = require("../../services");
const { HttpError } = require("../../helpers");

const getVerity = async (req, res) => {
  const user = await AuthService.verityToken(req);
  if (!user) {
    throw HttpError(404, "User not found");
  }

  res.status(200).json({
    message: "Verification successful",
  });
};

module.exports = getVerity;
