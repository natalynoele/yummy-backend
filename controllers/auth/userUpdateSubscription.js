const { User } = require("../../models");

const { HttpError } = require("../../helpers");

const userUpdateSubscription = async (req, res) => {
  const { _id: id } = req.user;
  const { inputEmail } = req.body;
  console.log(inputEmail);

  if (!inputEmail) {
    throw HttpError(400, "missing fields subscription");
  }

  const result = await User.findByIdAndUpdate(
    id,
    { subscription: inputEmail },
    {
      new: true,
    }
  );

  res.json(result);
};

module.exports = userUpdateSubscription;
