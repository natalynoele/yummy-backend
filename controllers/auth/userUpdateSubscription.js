// const User = require("../../models/users");

const { AuthService } = require("../../services");
const { HttpError, ctrlWrapper } = require("../../helpers");

const userUpdateSubscription = async (req, res) => {
  const subscription = await AuthService.userSubscription(req);
  
    if (!subscription) {
      throw HttpError(400, "missing fields subscription");
    }

  return res.json(subscription);
};

module.exports = { userUpdateSubscription: ctrlWrapper(userUpdateSubscription) };
