const { HttpError, ctrlWrapper } = require("../../helpers");
const { AuthService } = require("../../services");

const updateUser = async (req, res) => {
  const updated = await AuthService.update(req, res);

  if (!updated) {
    throw HttpError(404, "Not found");
  }

  console.log(updated);

  res.status(200).json({
    code: 200,
    message: "User profile updated successfully",
    user: {
      name: updated.name,
      avatarUrl: updated.avatarUrl,
    },
  });
};

module.exports = { updateUser: ctrlWrapper(updateUser) };
