const User = require("../../models/users");

const { HttpError } = require("../../helpers");

const userUpdateSubscription = async (req, res) => {
    const { _id: id } = req.user;
    const { subscription } = req.body;

    if (!subscription) {
        throw HttpError(400, "missing fields subscription");
    }

    const result = await User.findByIdAndUpdate(
        id,
        { subscription },
        {
            new: true,
        }
    );

    res.json(result);
};

module.exports = userUpdateSubscription;