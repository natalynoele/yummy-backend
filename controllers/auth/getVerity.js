const User = require("../../models/users");
const { HttpError } = require("../../helpers");

const getVerity = async (req, res) => {
    const { verificationToken } = req.params;

    const user = await User.findOne({ verificationToken });

    if (!user) {
        throw HttpError(404, "User not found");
    }

    const newData = {
        verify: true,
        $unset: { verificationToken: 1 },
    };

    await User.findByIdAndUpdate(user._id, newData);

    res.status(200).json({ message: "Verification successful" });
};

module.exports = getVerity;