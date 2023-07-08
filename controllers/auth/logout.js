const User = require("../../models/users");

const logout = async (req, res) => {
    const { _id } = req.user;

    await User.findByIdAndUpdate(_id, { $unset: { token: 1 } });

    res.status(204).json();
};

module.exports = logout;