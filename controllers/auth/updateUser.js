const User = require("../../models");

const { HttpError } = require("../../helpers");

const updateUser = async (req, res) => {
  const { _id: id } = req.user;

  console.log(req.file.path, "update");

  const avatarURL = req.file.path;

  if (!req.body) {
    throw HttpError(400, "Please, write some data");
  }

  const result = await User.findByIdAndUpdate(
    id,
    { ...req.body, avatarURL },
    {
      new: true,
    }
  );
  console.log(result, "result update");
  res.status(200).json(result);
};

module.exports = updateUser;
