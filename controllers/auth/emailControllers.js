require('dotenv').config();
const { HttpError, sendEmail, ctrlWrapper } = require("../../helpers");
const { BASE_URL } = process.env;
const { User } = require("../../models/users");

const subscribe = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email not found");
  }
  if (user.subscription) {
	res.status(400).json({message: "Subscription has already been passed"});
  }

  const verifyEm = {
    to: email,
    subject: "So Yummy - Підписка",
    html: `<a target="_blank" href="${BASE_URL}/subscribe/${user.subscriptionToken}">Click to Subscription email</a>`,
  };

  await sendEmail(verifyEm);

  res.json({
    message: "Subscription email sent",
  });
};
const resendSubscribe = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email not found");
  }
  if (user.subscription) {
	res.status(400).json({message: "Subscription has already been passed"});
  }

  const SubscriptionEm = {
    to: email,
    subject: "So Yummy - Підписка",
    html: `<a target="_blank" href="${BASE_URL}/subscribe/${user.subscriptionToken}">Click to Subscription email</a>`,
  };

  await sendEmail(SubscriptionEm);

  res.json({
    message: "Subscription email sent",
  });
};

module.exports = {
  resendSubscribe: ctrlWrapper(resendSubscribe),
  subscribe: ctrlWrapper(subscribe),
};
