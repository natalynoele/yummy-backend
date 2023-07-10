
const getCurrent = async (req, res) => {
    const { user } = req.user;
    res.json({
        user: {
            name: newUser.name,
            email: newUser.email,
            avatar: newUser.avatar,
            favorite: newUser.favorite,
            shoppingList: newUser.shoppingList,
    },
    });
};
module.exports = getCurrent;