const User = require("../../models/users");

const { HttpError } = require("../../helpers");

const updateUser = async (req, res) => {
  const { _id: id } = req.user;

  if (!req.body) {
    throw HttpError(400, "Please, write some data");
  }

  const result = await User.findByIdAndUpdate(
    id,
    { ...req.body },
    {
      new: true,
    }
  );

  res.json(result);
};

module.exports = updateUser;
