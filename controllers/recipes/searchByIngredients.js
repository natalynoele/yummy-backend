const { Recipe } = require("../../models");

const searchByIngredients = async (req, res) => {
  const { id } = req.body;
  if (id === "") {
    return res.status(404).json({ message: "Not found ingredients" });
  }
  const result = await Recipe.find({
    ingredients: {
      $elemMatch: {
        id: id,
      },
    },
  });

  return res.json(result);
};

module.exports = searchByIngredients;
